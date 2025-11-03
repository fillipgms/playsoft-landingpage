import React from "react";
import { cn } from "@/lib/utils";

const Button = ({
    children,
    className,
    type = "primary",
    disabled,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    type?: "primary" | "secondary" | "tertiary";
    "aria-label"?: string;
    disabled?: boolean;
}) => {
    const getButtonStyles = () => {
        switch (type) {
            case "secondary":
                return cn(
                    "bg-[#F6F7F9] text-[#13171B]",
                    "hover:bg-[#EBECED]",
                    "focus:ring-2 focus:ring-[#13171B] focus:ring-offset-2"
                );
            case "tertiary":
                return cn(
                    "text-[#F6F7F9] border border-[#F6F7F9]",
                    "hover:bg-[#1E252B]",
                    "focus:ring-2 focus:ring-[#F6F7F9] focus:ring-offset-2"
                );
            default:
                return cn(
                    "bg-[#1F8FFF] text-white",
                    "hover:bg-[#1A7EE6]",
                    "focus:ring-2 focus:ring-[#1F8FFF] focus:ring-offset-2"
                );
        }
    };

    return (
        <button
            className={cn(
                "cursor-pointer px-4 py-2 rounded",
                "focus:outline-none",
                "transition-all duration-200",
                disabled && "opacity-50 cursor-not-allowed",
                className,
                getButtonStyles()
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
