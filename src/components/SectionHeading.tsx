interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  accentWord?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  accentWord,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  const renderTitle = () => {
    if (!accentWord || !title.includes(accentWord)) return title;
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-accent">{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""} ${alignClass}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.08em] uppercase text-accent mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-balance">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
