import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Crown } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
}

const LeadershipCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  // Responsive items per slide
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1200) {
        setItemsPerSlide(4); // xl screens
      } else if (window.innerWidth >= 992) {
        setItemsPerSlide(3); // lg screens
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2); // md screens
      } else {
        setItemsPerSlide(1); // sm and xs screens
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Paras Fatnani",
      title: "Chief Strategy Officer",
      image: "/Leadership/Paras.png",
    },
    {
      id: 2,
      name: "Sanjay Dhingra",
      title: "Chief Operating Officer",
      image: "/Leadership/SanjayDhingra.jpg",
    },
    {
      id: 3,
      name: "Sharang Dhaimade",
      title: "Chief Marketing Officer",
      image: "/Leadership/Sharang.png",
    },
    {
      id: 4,
      name: "Priyank Mehta",
      title: "Chief Business Officer",
      image: "/Leadership/PriyankMehta.jpeg",
    },
  ];

  const totalSlides = teamMembers.length;
  const autoSlideInterval = 3000; // 3 seconds

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getCurrentSlideMembers = () => {
    const members = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (currentSlide + i) % teamMembers.length;
      members.push(teamMembers[index]);
    }
    return members;
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, autoSlideInterval]);

  // Pause on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Crown className="w-4 h-4" />
            <span>Meet Our Team</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Our </span>
            <span className="gradient-text">Leadership</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experienced professionals dedicated to transforming education
            financing
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 border border-border rounded-full shadow-md hidden md:flex items-center justify-center w-12 h-12 text-primary z-10 hover:shadow-lg transition-all"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 border border-border rounded-full shadow-md hidden md:flex items-center justify-center w-12 h-12 text-primary z-10 hover:shadow-lg transition-all"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getCurrentSlideMembers().map((member) => (
              <div key={member.id} className="flex justify-center">
                <div className="w-full max-w-sm">
                  <div className="bg-white dark:bg-gray-800 border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
                    {/* Profile Image */}
                    <div className="text-center mb-6">
                      <div className="relative mx-auto w-32 h-32 mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full p-1">
                          <div className="bg-white dark:bg-gray-800 rounded-full p-1 h-full w-full">
                            <div className="relative rounded-full overflow-hidden h-full w-full">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Name */}
                      <h4 className="font-bold text-xl text-foreground mb-2">
                        {member.name}
                      </h4>

                      {/* Title */}
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-full px-4 py-2 inline-block">
                        <p className="text-primary text-sm font-medium">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`rounded-full transition-all ${
                currentSlide === index
                  ? "w-8 h-3 bg-gradient-to-r from-primary to-accent"
                  : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-primary"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipCarousel;
