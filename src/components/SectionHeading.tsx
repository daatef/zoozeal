import { SparkleIcon } from "lucide-react";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <div className="liquid-eyebrow">
        <SparkleIcon size={17} />
        {eyebrow}
      </div>

      <h2>
        {title} {highlight && <span>{highlight}</span>}
      </h2>

      <p>{description}</p>
    </div>
  );
}
