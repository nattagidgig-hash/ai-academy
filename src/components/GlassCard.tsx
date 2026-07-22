interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: "lift" | "featured" | "none";
  as?: "div" | "section" | "article" | "a";
  href?: string;
}

export function GlassCard({
  children,
  className = "",
  hover = "lift",
  as: Tag = "div",
  ...props
}: GlassCardProps & Record<string, unknown>) {
  const hoverClass =
    hover === "lift"
      ? "card-glass"
      : hover === "featured"
        ? "card-glass shadow-[0_0_32px_rgba(57,213,255,0.15)]"
        : "bg-surface-glass backdrop-blur-md rounded-2xl shadow-lg shadow-black/20";

  return (
    <Tag className={`${hoverClass} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
