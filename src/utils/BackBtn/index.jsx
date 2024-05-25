import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * Renders a back button that navigates to the previous page.
 *
 * @returns {JSX.Element|null} The back button component.
 */
const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const landingPagePath = "/";

  if (location.pathname === landingPagePath) {
    return null;
  }

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-background py-2 px-4 rounded m-auto w-full text-sm"
    >
      Go Back
    </button>
  );
};

export default BackButton;
