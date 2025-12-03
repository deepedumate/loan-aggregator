import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to loan aggregator page
    navigate("/loan-offers");
  }, [navigate]);

  return null;
};

export default Index;
