import { cn } from "@/lib/utils";

const HighlightSection = ({
    children,
    arialabel,
    className,
}: {
    children: React.ReactNode;
    arialabel?: string;
    className?: string;
}) => {
    return (
        <section
            aria-label={arialabel}
            className={cn(
                "flex flex-col overflow-hidden gap-10 items-center relative justify-center bg-[#13171B] text-[#F6F7F9] scroll-smooth",
                className
            )}
        >
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-size-[20px_20px]",
                    "bg-[radial-gradient(#d4d4d433_1px,transparent_1px)]",
                    "pointer-events-none"
                )}
                aria-hidden="true"
            />

            <div className="absolute flex items-center justify-center h-[300svh] w-[80vw] sm:w-[70vw] lg:w-[60vw] -right-[30vw] sm:-right-[25vw] lg:-right-[20vw] -top-[150vh] rounded-full bg-radial from-[#D8E1EC] via-[#285580]/70 to-transparent opacity-80 rotate-45 blur-3xl"></div>

            {children}
        </section>
    );
};

export default HighlightSection;
