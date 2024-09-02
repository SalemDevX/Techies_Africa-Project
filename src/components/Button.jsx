import React from "react";

const Button = ({
  children,
  backgroundColor = "linear-gradient(90deg, #D929E5 0%, #3D68FB 100%)",
  borderColor = "#A24EEC",
  padding = "10px 20px",
}) => {
  return (
    <div className="text-center font-bold">
      <div
        style={{
          background: backgroundColor,
          padding: padding,
          borderRadius: "50px",
          cursor: "pointer",
          border: `2px solid ${borderColor}`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Button;
