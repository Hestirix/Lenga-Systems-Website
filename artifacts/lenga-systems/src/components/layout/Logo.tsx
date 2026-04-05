interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Lenga Systems LLC"
      className={`h-9 w-auto object-contain select-none ${
        variant === "light"
          ? "rounded-lg bg-white/10 backdrop-blur-sm px-2 py-1"
          : ""
      } ${className}`}
      draggable={false}
    />
  );
}
