"use client";

import { cn } from "@/lib/utils";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

const Question = ({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }
            }}
            aria-expanded={isOpen}
            className={cn(
                "opacity-50 hover:opacity-100 transition-all duration-200 flex w-full flex-col gap-4",
                isOpen ? "opacity-100" : "",
                "cursor-pointer"
            )}
        >
            <div className="flex items-center justify-between transition">
                <h5 className="text-xl font-semibold">{question}</h5>
                <span
                    className={cn(
                        "text-2xl transition-transform duration-200",
                        isOpen ? "rotate-180" : ""
                    )}
                    aria-hidden="true"
                >
                    <CaretDownIcon />
                </span>
            </div>
            <div
                className={cn(
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                    "overflow-hidden transition-all duration-300 text-[#13171B]/70"
                )}
            >
                {answer}
            </div>
        </div>
    );
};

export default Question;
