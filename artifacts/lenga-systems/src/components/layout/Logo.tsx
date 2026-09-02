interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <img
      src={variant === "light" ? "/logo-light.png" : "/logo-dark.png"}
      alt="Lenga Systems LLC"
      className={`h-8 md:h-9 w-auto object-contain select-none ${className}`}
      draggable={false}
    />
  );
}
