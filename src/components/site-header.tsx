"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone, Sparkles } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Workspace", href: "/workspace" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent text-primary-foreground shadow-md">
            <Sparkles className="size-5" />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight sm:text-xl">
            Glam <span className="text-gradient-glam">&amp; Glow</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            className="hidden rounded-full bg-linear-to-r from-primary to-accent text-primary-foreground shadow-md sm:inline-flex"
            render={<a href="tel:9517890790" />}
          >
            <Phone className="size-4" /> Book Now
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary/25 md:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="font-heading text-xl">
                  Glam <span className="text-gradient-glam">&amp; Glow</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-2 flex flex-col gap-1 px-4">
                {NAV.map((item) =>
                  item.href.startsWith("#") ? (
                    <SheetClose
                      key={item.href}
                      render={
                        <a
                          href={item.href}
                          className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                        />
                      }
                    >
                      {item.label}
                    </SheetClose>
                  ) : (
                    <SheetClose
                      key={item.href}
                      render={
                        <Link
                          href={item.href}
                          className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                        />
                      }
                    >
                      {item.label}
                    </SheetClose>
                  ),
                )}
                <SheetClose
                  render={
                    <a
                      href="tel:9517890790"
                      className={cn(
                        buttonVariants(),
                        "mt-3 rounded-full bg-linear-to-r from-primary to-accent text-primary-foreground",
                      )}
                    />
                  }
                >
                  <Phone className="size-4" /> Call to Book
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
