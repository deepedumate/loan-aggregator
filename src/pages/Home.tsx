import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to ai-loan-path page
    navigate("/ai-loan-path");
  }, [navigate]);

  return null;
};

export default Index;
