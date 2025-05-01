import { cn } from "@/lib/utils";

export default function H3({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h3
      className={cn(
        "text-2xl sm:text-3xl md:text-4xl font-bold font-noto-sans leading-[1.2]",
        className
      )}
    >
      {children}
    </h3>
  );
}
