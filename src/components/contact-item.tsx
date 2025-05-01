import { IconType } from "react-icons";
import P from "./p";

type ContactItemProps = {
  icon: IconType;
  title: string;
  children: React.ReactNode;
};

export default function ContactItem({
  icon: Icon,
  title,
  children,
}: ContactItemProps) {
  return (
    <div className="p-8">
      <h5 className="text-xl font-bold uppercase flex items-center tracking-[2px] gap-4">
        <Icon className="text-xl text-secondary" />
        {title}
      </h5>
      <P className="mt-5 [&_a]:text-secondary [&_a]:font-bold [&_a]:underline [&_a]:underline-offset-4 [&_a]:block">
        {children}
      </P>
    </div>
  );
}
