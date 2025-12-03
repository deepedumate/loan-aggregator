// Google Maps utility for university autocomplete
// This handles loading the Google Maps SDK and provides autocomplete functionality
// Uses functional approach with closures (no classes)

// Type declarations for Google Maps
declare global {
  namespace google {
    namespace maps {
      namespace places {
        class AutocompleteService {
          getPlacePredictions(
            request: { input: string },
            callback: (predictions: any[], status: any) => void
          ): void;
        }
        enum PlacesServiceStatus {
          OK = 'OK'
        }
      }
    }
  }
  interface Window {
    google: any;
  }
}

interface UniversitySuggestion {
  name: string;          // "Harvard University, Cambridge, MA, USA"
  placeId: string;       // "ChIJOae13ii644kRuC8SkiUkpQQ"
  country: string;       // "US" or "USA"
}

// Module state (private variables in closure)
let isLoaded = false;
let isLoading = false;
let loadPromise: Promise<void> | null = null;
let autocompleteService: google.maps.places.AutocompleteService | null = null;

/**
 * Load Google Maps JavaScript SDK
 * @param apiKey - Google Maps API key
 */
const loadGoogleMapsSDK = async (apiKey: string): Promise<void> => {
  // Already loaded
  if (isLoaded) return;
  
  // Currently loading - return existing promise
  if (isLoading && loadPromise) return loadPromise;

  isLoading = true;
  loadPromise = new Promise((resolve, reject) => {
    // Check if Google Maps is already loaded (could be loaded by another script)
    if (window.google?.maps?.places) {
      isLoaded = true;
      isLoading = false;
      autocompleteService = new window.google.maps.places.AutocompleteService();
      resolve();
      return;
    }

    // Create script element to load Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      isLoaded = true;
      isLoading = false;
      autocompleteService = new window.google.maps.places.AutocompleteService();
      resolve();
    };

    script.onerror = () => {
      isLoading = false;
      reject(new Error('Failed to load Google Maps API'));
    };

    document.head.appendChild(script);
  });

  return loadPromise;
};

/**
 * Get university suggestions from Google Places API
 * @param query - Search query
 * @returns Promise resolving to array of university names
 */
const fetchUniversitySuggestions = async (query: string): Promise<UniversitySuggestion[]> => {
  // Check if API is loaded
  if (!isLoaded || !autocompleteService) {
    console.warn('Google Maps API not loaded yet');
    return [];
  }

  // Minimum query length
  if (query.length < 2) {
    return [];
  }

  return new Promise((resolve) => {
    autocompleteService!.getPlacePredictions(
      {
        input: query + ' university',
        // types: ['establishment'], // Optional: filter to establishments only
      },
      (predictions, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
          // Keywords to filter university-related institutions
          const universityKeywords = [
            'university',
            'college',
            'institute',
            'school',
            'academy',
            'università', // Italian
            'universität', // German
            'universidad', // Spanish
            'université', // French
          ];

          // Filter and map results
          const results  = predictions
            .filter((prediction) => {
              const lowerDesc = prediction.description.toLowerCase();
              return universityKeywords.some((keyword) =>
                lowerDesc.includes(keyword)
              );
            })
            .map((prediction) => {
              const country = extractCountryFromTerms(prediction.terms);
              return {
                name: prediction.description,
                placeId: prediction.place_id,
                country: country
              };
            })
            .slice(0, 8); // Limit to 8 suggestions

          resolve(results);
        } else {
          console.log('Google Places API status:', status);
          resolve([]);
        }
      }
    );
  });
};

/**
 * Check if Google Maps API is loaded and ready
 * @returns Boolean indicating if API is loaded
 */
const checkIsLoaded = (): boolean => {
  return isLoaded;
};

// Export the public API
export const googleMapsService = {
  /**
   * Initialize Google Maps API
   * @param apiKey - Google Maps API key
   * @returns Promise that resolves when API is loaded
   */
  initialize: async (apiKey: string): Promise<void> => {
    return loadGoogleMapsSDK(apiKey);
  },

  /**
   * Get university suggestions based on query
   * @param query - Search query (minimum 2 characters)
   * @returns Promise resolving to array of university names (max 8)
   */
  getUniversitySuggestions: async (query: string): Promise<UniversitySuggestion[]> => {
    return fetchUniversitySuggestions(query);
  },

  /**
   * Check if Google Maps API is loaded
   * @returns Boolean indicating if API is ready to use
   */
  isLoaded: (): boolean => {
    return checkIsLoaded();
  },
};

// Helper function to extract country
const extractCountryFromTerms = (terms: any[]): string => {
  if (!terms || terms.length === 0) return 'Other';
  
  // Last term is usually the country
  const lastTerm = terms[terms.length - 1].value;
  
  // Map common country names to codes
  const countryMap: Record<string, string> = {
    'USA': 'US',
    'United States': 'US',
    'UK': 'UK', 
    'United Kingdom': 'UK',
    'Canada': 'Canada',
    'Australia': 'Australia',
    'Germany': 'Germany',
    'France': 'France',
    'Singapore': 'Singapore',
    'India': 'India',
    'China': 'China',
    'Japan': 'Japan',
    // Add more as needed
  };
  
  return countryMap[lastTerm] || lastTerm;
};