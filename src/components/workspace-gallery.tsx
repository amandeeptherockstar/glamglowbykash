import { ImageIcon } from "lucide-react";

/*
 * Workspace gallery — auto-scrolling marquee.
 * The client will share real workspace photos; drop them into /public and
 * swap the `src` fields below. Until then these render as branded placeholders.
 */
type Shot = { label: string; src?: string; from: string; to: string };

const SHOTS: Shot[] = [
  { label: "Nail Studio", src: "/nail-studio.jpg", from: "#e9d5ff", to: "#c084fc" },
  { label: "Manicure Station", src: "/manicure-station.jpg", from: "#fbcfe8", to: "#f472b6" },
  { label: "Makeup Corner", src: "/makeup-corner.jpg", from: "#ddd6fe", to: "#a78bfa" },
  { label: "Hair Styling", src: "/hair-styling.jpg", from: "#c7d2fe", to: "#818cf8" },
  { label: "Skin Care Room", src: "/skin-care.jpg", from: "#bae6fd", to: "#38bdf8" },
  { label: "Course Class", src: "/course-class.jpg", from: "#f5d0fe", to: "#d946ef" },
];

function Tile({ shot }: { shot: Shot }) {
  return (
    <figure className="group relative aspect-[4/5] w-56 shrink-0 overflow-hidden rounded-2xl border border-border shadow-sm sm:w-64">
      {shot.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={shot.src}
          alt={shot.label}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-2 text-primary/70"
          style={{
            backgroundImage: `linear-gradient(135deg, ${shot.from}, ${shot.to})`,
          }}
        >
          <ImageIcon className="size-8 opacity-70" />
          <span className="text-xs font-medium text-foreground/70">
            Photo coming soon
          </span>
        </div>
      )}
      <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 to-transparent p-3 text-sm font-semibold text-white">
        {shot.label}
      </figcaption>
    </figure>
  );
}

export function WorkspaceGallery() {
  const loop = [...SHOTS, ...SHOTS];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      <div className="flex w-max animate-glam-marquee gap-4 sm:gap-5">
        {loop.map((shot, i) => (
          <Tile key={i} shot={shot} />
        ))}
      </div>
    </div>
  );
}
