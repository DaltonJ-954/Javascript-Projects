import React from "react";
import { Link as ScrollLink } from "react-scroll";

const ScrollLinkButton: React.FC<ScrollLinkButtonProps> = ({
  to,
  label,
  duration = 500,
  offset = 0,
  className = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition",
}) => {
  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={duration}
      offset={offset}
      className={className}
      role="button"
    >
      <button
        style={{
          color: "white",
          backgroundColor: "goldenrod",
          border: "1px solid black",
          marginTop: "20px",
        }}
      >
        {label}
      </button>
    </ScrollLink>
  );
};

interface ScrollLinkButtonProps {
  to: string; // ID of the target element
  label: string; // Button text
  duration?: number; // Scroll duration in ms
  offset?: number; // Optional offset for fixed headers
  className?: string; // Optional custom styles
}

export default ScrollLinkButton;
