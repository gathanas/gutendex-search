import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "@mui/icons-material";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const goToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <button className="back-button" onClick={goToPreviousPage}>
      <ChevronLeft /> <span>Back</span>
    </button>
  );
};

export default BackButton;
