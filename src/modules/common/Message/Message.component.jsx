import React from "react";

export const Message = ({ text }) => {
    return (
        <div className="alert alert-success message" role="alert">
            {text}
        </div>
    );
};
