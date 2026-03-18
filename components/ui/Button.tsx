import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark shadow-card",
  secondary: "border border-border bg-surface text-text-main shadow-card hover:bg-soft-bg",
  ghost: "text-text-secondary hover:bg-soft-bg hover:text-text-main",
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
