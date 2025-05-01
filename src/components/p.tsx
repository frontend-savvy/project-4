import { cn } from "@/lib/utils";

export default function P({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("font-open-sans md:text-lg leading-[2]", className)}>
      {children}
    </p>
  );
}
