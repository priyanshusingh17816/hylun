interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-9 py-4 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300 ease-out";

  return (
    <button
      className={
        variant === "primary"
          ? `${base} bg-burgundy text-white shadow-lg hover:-translate-y-1 hover:bg-[#8E3B55] hover:shadow-xl active:translate-y-0`
          : `${base} border border-white/30 bg-white/20 text-white backdrop-blur-xl hover:bg-white hover:text-burgundy hover:-translate-y-1 hover:shadow-xl active:translate-y-0`
      }
    >
      {children}
    </button>
  );
}