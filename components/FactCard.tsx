import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const FactCard = ({
    ClassName,
    title,
    description,
    icon,
}: {
    ClassName?: string;
    title: string;
    description: string;
    icon: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "bg-linear-to-b from-[#4D5B6D] to-[#212D3D] p-px rounded",
                ClassName,
                "group hover:shadow-lg transition-shadow duration-300"
            )}
            role="article"
            aria-label={title}
        >
            <div className="bg-[#13171B] h-full flex flex-col gap-4 items-center justify-center rounded p-4 relative overflow-hidden">
                <div className="size-32  bg-[#285580]/50 top-0 right-0 z-10 -translate-y-1/2 translate-x-1/2 absolute rounded-full blur-2xl" />

                <div className="z-20 flex flex-col gap-2">
                    {icon}
                    <p className="font-bold">{title}</p>
                    <p>{description}</p>
                </div>

                <div className="size-32 bg-[#285580]/50 bottom-0 left-0  z-10 translate-y-1/2 -translate-x-1/2 absolute rounded-full blur-2xl" />
            </div>
        </div>
    );
};

export default FactCard;
