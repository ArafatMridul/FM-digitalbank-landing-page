import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className }) => {
    return (
        <button
            className={twMerge(
                "text-sm text-neutral-g-2 font-bd px-8 py-3 rounded-full bg-gradient-to-tr from-primary-c to-primary-g cursor-pointer hover:opacity-70 transition duration-300",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
