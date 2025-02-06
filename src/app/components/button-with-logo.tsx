import { LucideIcon } from "lucide-react";

interface ButtonWithLogoProps {
  title: string;
  Icon: LucideIcon;
}

export default function ButtonWithLogo({ title, Icon }: ButtonWithLogoProps) {
  return (
    <div className="border-[1px] border-black py-2 pr-2 flex items-center gap-2 rounded-full hover:shadow-lg transition-all cursor-pointer hover:scale-105">
      <div className="border-[1px] border-black rounded-3xl p-1">
        <Icon className="h-6 w-6 text-black" />
      </div>
      <a href="#" className="text-black">
        {title}
      </a>
    </div>
  );
}
