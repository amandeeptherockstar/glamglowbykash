import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Our Workspace — Glam & Glow by Kash",
  description:
    "Take a peek inside the Glam & Glow studio — a warm, welcoming space crafted for your comfort and beauty.",
};

const PHOTOS = [
  { src: "/nail-studio.jpg", alt: "Nail Studio" },
  { src: "/manicure-station.jpg", alt: "Manicure Station" },
  { src: "/makeup-corner.jpg", alt: "Makeup Corner" },
  { src: "/hair-styling.jpg", alt: "Hair Styling" },
  { src: "/skin-care.jpg", alt: "Skin Care Room" },
  { src: "/course-class.jpg", alt: "Course Class" },
];

export default function WorkspacePage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Button
            variant="ghost"
            className="mb-8 gap-1.5 rounded-full text-muted-foreground"
            render={<Link href="/" />}
          >
            <ArrowLeft className="size-4" /> Back to Home
          </Button>

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our studio
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
              Inside the Glam &amp; Glow workspace
            </h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A warm, welcoming space designed for your comfort. Every corner is
              set up to help you look and feel your best.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PHOTOS.map((photo) => (
              <figure
                key={photo.alt}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4 text-sm font-semibold text-white">
                  {photo.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
