import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  alt: string;
  className?: string;
}

export function ImagePlaceholder({ alt, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-dark/10 text-dark/40",
        className
      )}
      role="img"
      aria-label={alt}
    >
      <span className="px-4 text-center text-sm">{alt}</span>
    </div>
  );
}
