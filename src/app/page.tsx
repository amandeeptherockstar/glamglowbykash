import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Droplets,
  GraduationCap,
  Hand,
  Heart,
  MapPin,
  Palette,
  Phone,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/site-header";
import { NailsBackground } from "@/components/nails-background";
import { WorkspaceGallery } from "@/components/workspace-gallery";
import { Instagram } from "@/components/icons";

const PHONE = "9517890790";
const ALT_PHONE = "7973413325";
const INSTAGRAM = "https://www.instagram.com/glamglowkash";
const ADDRESS = "18 Peer Shah Road, Bhatwan Wala Station, near Tip Top Bakery";

const SERVICES = [
  {
    icon: Hand,
    title: "Nails & Extensions",
    desc: "Permanent nail extensions, gel, acrylic & shellac finishes with custom press-on designs.",
    tags: ["Extensions", "Gel", "Acrylic", "Press-on"],
  },
  {
    icon: Sparkles,
    title: "Manicure & Pedicure",
    desc: "Relaxing hand and foot care that leaves your nails clean, healthy and beautifully polished.",
    tags: ["Manicure", "Pedicure"],
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    desc: "Professional hairstyling and dressing for every occasion — from everyday looks to bridal.",
    tags: ["Styling", "Dressing"],
  },
  {
    icon: Palette,
    title: "Makeup",
    desc: "Flawless party, event and bridal makeup tailored to your features and your special day.",
    tags: ["Party", "Bridal", "Event"],
  },
  {
    icon: Droplets,
    title: "Skin Services",
    desc: "Refreshing facials and skin treatments to cleanse, glow and rejuvenate — starting at ₹199.",
    tags: ["Facials", "Glow", "Care"],
  },
  {
    icon: GraduationCap,
    title: "Nail Education",
    desc: "Learn the craft from a certified educator. Professional nails course with hands-on training.",
    tags: ["Course", "Certified", "Hands-on"],
  },
];

const PRICING = [
  {
    icon: Hand,
    name: "Permanent Nail Extensions",
    price: "₹399",
    note: "Starting price",
    featured: false,
  },
  {
    icon: GraduationCap,
    name: "Professional Nails Course",
    price: "₹4999",
    note: "Complete certification training",
    featured: true,
  },
  {
    icon: Droplets,
    name: "Skin Services",
    price: "₹199",
    note: "Starting price",
    featured: false,
  },
];

const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "6", label: "Service Categories" },
  { value: "100%", label: "Passion & Care" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="home" className="flex-1">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-glam-radial">
          <NailsBackground />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
            <Badge
              variant="secondary"
              className="mb-6 gap-1.5 rounded-full border border-primary/20 px-4 py-1.5 text-sm"
            >
              <BadgeCheck className="size-4 text-primary" />
              Certified Nail Artist &amp; Educator
            </Badge>

            <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Glam <span className="text-gradient-glam">&amp; Glow</span>
              <span className="mt-2 block text-2xl font-medium text-muted-foreground sm:text-3xl">
                by Kash
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Nails, makeup, hair &amp; skin — crafted with care. From permanent
              nail extensions to a professional nails course, get pampered and
              glow your way, all in one studio.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="rounded-full bg-linear-to-r from-primary to-accent px-7 text-base text-primary-foreground shadow-lg shadow-primary/25"
                render={<a href={`tel:${PHONE}`} />}
              >
                <Phone className="size-4" /> Book an Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/25 bg-background/60 px-7 text-base backdrop-blur"
                render={
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" />
                }
              >
                <Instagram className="size-4" /> View on Instagram
              </Button>
            </div>

            <dl className="mt-14 grid w-full max-w-lg grid-cols-3 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <dt className="font-heading text-3xl font-bold text-gradient-glam sm:text-4xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="What we do"
            title="Services made to make you glow"
            subtitle="A complete beauty destination — plus professional training to master the craft yourself."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Card
                key={s.title}
                className="group border-border/70 bg-card/70 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <CardHeader>
                  <div className="mb-2 flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary/15 to-accent/15 text-primary transition-colors group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground">
                    <s.icon className="size-6" />
                  </div>
                  <CardTitle className="font-heading text-xl">{s.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {s.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="rounded-full font-normal text-muted-foreground"
                    >
                      {t}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Pricing highlights ── */}
        <section id="pricing" className="relative overflow-hidden bg-secondary/40 py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Signature offers"
              title="Loved services, honest prices"
              subtitle="Transparent starting prices on our most popular services. Final pricing varies with design and length."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {PRICING.map((p) => (
                <Card
                  key={p.name}
                  className={
                    p.featured
                      ? "relative border-transparent bg-linear-to-br from-primary to-accent text-primary-foreground shadow-2xl shadow-primary/30 md:-translate-y-3"
                      : "border-border/70 bg-card/80"
                  }
                >
                  {p.featured && (
                    <Badge className="absolute right-4 top-4 gap-1 rounded-full bg-white/20 text-primary-foreground backdrop-blur">
                      <Star className="size-3.5" /> Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div
                      className={`mb-2 flex size-12 items-center justify-center rounded-2xl ${
                        p.featured
                          ? "bg-white/20 text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <p.icon className="size-6" />
                    </div>
                    <CardTitle className="font-heading text-lg">{p.name}</CardTitle>
                    <CardDescription
                      className={p.featured ? "text-primary-foreground/80" : ""}
                    >
                      {p.note}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-heading text-4xl font-bold">{p.price}</p>
                    <Button
                      variant={p.featured ? "secondary" : "outline"}
                      className="mt-5 w-full rounded-full"
                      render={<a href={`tel:${PHONE}`} />}
                    >
                      Enquire now <ArrowRight className="size-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery / workspace ── */}
        <section id="gallery" className="w-full py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Our studio"
              title="Inside the Glam & Glow workspace"
              subtitle="A warm, welcoming space designed for your comfort. Every corner is set up to help you look and feel your best."
            />
          </div>
          <div className="mt-12">
            <WorkspaceGallery />
          </div>
          <div className="mx-auto mt-8 flex justify-center px-4 sm:px-6">
            <Button
              variant="outline"
              className="rounded-full border-primary/25"
              render={<Link href="/workspace" />}
            >
              View all photos <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>

        {/* ── About / Educator + Certification ── */}
        <section id="about" className="bg-secondary/40 py-20">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <Badge
                variant="secondary"
                className="mb-4 gap-1.5 rounded-full border border-primary/20"
              >
                <GraduationCap className="size-4 text-primary" /> Meet the artist
              </Badge>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Trained, certified &amp; passionate about beauty
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Glam &amp; Glow by Kash is led by{" "}
                <strong className="text-foreground">Kashish Khosla</strong>, a
                certified nail artist with over{" "}
                <strong className="text-foreground">3 years of experience</strong>.
                Having completed a professional 30-day nail course, Kash now not
                only pampers clients but also teaches these skills as an educator
                — helping others launch their own beauty journey.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Certified 30-Day Professional Nail Course",
                  "3+ years of hands-on client experience",
                  "Educator — trains aspiring nail artists",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <BadgeCheck className="size-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/90">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  className="rounded-full bg-linear-to-r from-primary to-accent text-primary-foreground"
                  render={
                    <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" />
                  }
                >
                  <Instagram className="size-4" /> Follow @glamglowkash
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-primary/25"
                  render={<a href="#pricing" />}
                >
                  Join the course <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden border-border/70 bg-card/80 p-2 shadow-xl">
              <div className="relative overflow-hidden rounded-xl border border-border">
                <Image
                  src="/certificate.png"
                  alt="Certificate of Achievement — 30 Days Professional Nail Course awarded to Kashish Khosla"
                  width={1330}
                  height={1140}
                  className="h-auto w-full"
                />
              </div>
              <p className="flex items-center justify-center gap-2 py-3 text-center text-sm text-muted-foreground">
                <BadgeCheck className="size-4 text-primary" />
                Certificate of Achievement · Kashish Khosla
              </p>
            </Card>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Get in touch"
            title="Ready to glow? Let's talk"
            subtitle="Call, message or drop by the studio — we'd love to pamper you."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <ContactCard
              icon={Phone}
              title="Call or WhatsApp"
              lines={[PHONE, ALT_PHONE]}
              actionLabel="Call now"
              href={`tel:${PHONE}`}
            />
            <ContactCard
              icon={MapPin}
              title="Visit the studio"
              lines={[ADDRESS]}
              actionLabel="Get directions"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                ADDRESS,
              )}`}
            />
            <ContactCard
              icon={Instagram}
              title="Follow along"
              lines={["@glamglowkash", "Latest work & offers"]}
              actionLabel="Open Instagram"
              href={INSTAGRAM}
            />
          </div>

          <Card className="mt-6 overflow-hidden border-border/70 bg-card/80 p-2 shadow-md">
            <div className="relative overflow-hidden rounded-xl border border-border">
              <Image
                src="/visiting_card.png"
                alt="Glam & Glow by Kash — visiting card with services and contact details"
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </Card>

          <Card className="mt-6 border-border/70 bg-linear-to-br from-primary/10 to-accent/10">
            <CardContent className="flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-3">
                <Clock className="size-6 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Open for appointments</p>
                  <p className="text-sm text-muted-foreground">
                    Walk-ins welcome — calling ahead is recommended.
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                className="rounded-full bg-linear-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25"
                render={<a href={`tel:${PHONE}`} />}
              >
                <Phone className="size-4" /> Book Now
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <a href="#home" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent text-primary-foreground shadow-md">
                <Sparkles className="size-5" />
              </span>
              <span className="font-heading text-lg font-bold">
                Glam <span className="text-gradient-glam">&amp; Glow</span> by Kash
              </span>
            </a>
            <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <a href="#services" className="hover:text-foreground">Services</a>
              <a href="#pricing" className="hover:text-foreground">Pricing</a>
              <a href="#gallery" className="hover:text-foreground">Gallery</a>
              <Link href="/workspace" className="hover:text-foreground">Workspace</Link>
              <a href="#about" className="hover:text-foreground">About</a>
              <a href="#contact" className="hover:text-foreground">Contact</a>
            </nav>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
            <p className="flex items-center gap-1.5">
              Made with <Heart className="size-4 fill-primary text-primary" /> for
              Glam &amp; Glow by Kash
            </p>
            <p>© {new Date().getFullYear()} Glam &amp; Glow by Kash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-sm font-semibold uppercase tracking-widest text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
  actionLabel,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  actionLabel: string;
  href: string;
}) {
  return (
    <Card className="border-border/70 bg-card/80 text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
      <CardHeader className="items-center">
        <div className="mb-1 flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary/15 to-accent/15 text-primary">
          <Icon className="size-6" />
        </div>
        <CardTitle className="font-heading text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-0.5 text-sm text-muted-foreground">
          {lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
        <Button
          variant="outline"
          className="mt-5 rounded-full border-primary/25"
          render={
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            />
          }
        >
          {actionLabel} <ArrowRight className="size-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
