interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={`w-full ${
        align === "center" ? "flex flex-col items-center text-center" : "text-left"
      }`}
    >
      <h2 className="hero-title text-[58px] md:text-[68px] leading-none font-medium text-heading">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}