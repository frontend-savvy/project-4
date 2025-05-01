import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ImageCredit({ className }: { className?: string }) {
  return (
    <p className={cn("md:text-lg", className)}>
      Image from{" "}
      <Link className="underline underline-offset-4" href={"#"}>
        Freepik
      </Link>
    </p>
  );
}
