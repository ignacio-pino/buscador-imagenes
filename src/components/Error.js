import React from "react";

const Error = ({ mensaje }) => {
  return (
    <div className="my-3 p-4 text-center text-black alert alert-primary">
      <strong>{mensaje}</strong>
    </div>
  );
};

export default Error;
