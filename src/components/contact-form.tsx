import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ContactForm() {
  return (
    <form className="flex gap-4 flex-col items-center">
      <Input placeholder="Enter your name" type="text" />
      <Input placeholder="Enter your email address" type="email" />
      <textarea className="border h-24 w-full" name="" id=""></textarea>
      <ContactButton>Send message</ContactButton>
    </form>
  );
}

export function ContactButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      className={cn(
        "border-0  text-sm tracking-0 bg-secondary text-white hover:bg-primary",
        className
      )}
    >
      {children}
    </Button>
  );
}
