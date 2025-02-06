import { LucideIcon } from "lucide-react";

interface ButtonWithLogoProps {
  title: string;
  Icon: LucideIcon;
  theme?: "white" | "black"; // Default is black
}

export default function ButtonWithLogo({ title, Icon, theme = "black" }: ButtonWithLogoProps) {
  const textColor = theme === "white" ? "text-white" : "text-black";
  const borderColor = theme === "white" ? "border-white" : "border-black";

  return (
    <div className={`border-[1px] ${borderColor} ${textColor} py-2 pr-2 flex items-center gap-2 rounded-full hover:shadow-lg transition-all cursor-pointer hover:scale-105`}>
      <div className={`border-[1px] ${borderColor} rounded-3xl p-1`}>
        <Icon className={`h-6 w-6 ${textColor}`} />
      </div>
      <a href="#" className={textColor}>{title}</a>
    </div>
  );
}
