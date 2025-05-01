import { Menu } from "lucide-react";

export default function MobileMenuToggle({
  onToggle,
}: {
  onToggle: () => void;
}) {
  return (
    <button onClick={onToggle} className="md:hidden">
      <Menu className="h-9 w-9 cursor-pointer" />
    </button>
  );
}
