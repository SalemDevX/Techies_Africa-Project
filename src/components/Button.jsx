import React from "react";

const Button = ({ children }) => {
  return (
    <div className=" w-60 text-center font-bold">
    <div
      style={{
        background: "linear-gradient(90deg, #D929E5 0%, #3D68FB 100%)",
        padding: "15px 25px",
        borderRadius: "50px",
        cursor: "pointer",
      }}
    >{children}</div>
    </div>
  );
};

export default Button;
