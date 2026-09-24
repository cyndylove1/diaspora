import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  bgColor?: string; // Tailwind class (e.g., "bg-emerald-800 hover:bg-emerald-900")
    onClick?: () => void;
    textColor?: string;
  className?: string; // Custom classes for external layout tweaks
}

export default function Button({
  label,
  bgColor = "bg-emerald-700 hover:bg-emerald-900", // Default color
    onClick,
  textColor= "text-white",
  className = "",
  ...props
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 
        ${bgColor} ${textColor} font-semibold text-sm sm:text-base 
        px-7 py-3.5 rounded-full 
        transition-all duration-300 ease-out 
        shadow-md hover:shadow-lg 
        hover:-translate-y-0.5 active:translate-y-0 active:scale-95 
        group cursor-pointer ${className}`}
      {...props}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );
}
