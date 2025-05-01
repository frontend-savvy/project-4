import { cn } from "@/lib/utils";

export default function H2({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-noto-sans font-bold",
        className
      )}
    >
      {children}
    </h2>
  );
}
