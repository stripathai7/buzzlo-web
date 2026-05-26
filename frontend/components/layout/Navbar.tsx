"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Zap } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ background: "var(--color-saffron)" }}
            >
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span
              className="text-lg font-bold"
              style={{ color: "var(--color-navy)" }}
            >
              Buzzlo AI
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Log In
            </Link>
            <Link
              href={siteConfig.signupUrl}
              className={cn(
                buttonVariants({ size: "sm" }),
                "hover:opacity-90 transition-opacity"
              )}
              style={{ background: "var(--color-saffron)", color: "white" }}
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-6 pt-6">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-lg"
                    style={{ background: "var(--color-saffron)" }}
                  >
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <span
                    className="font-bold"
                    style={{ color: "var(--color-navy)" }}
                  >
                    Buzzlo AI
                  </span>
                </Link>

                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="flex flex-col gap-3 border-t pt-4">
                  <Link
                    href="/login"
                    className={cn(buttonVariants({ variant: "outline" }), "w-full justify-center")}
                    onClick={() => setOpen(false)}
                  >
                    Log In
                  </Link>
                  <Link
                    href={siteConfig.signupUrl}
                    className={cn(
                      buttonVariants(),
                      "w-full justify-center hover:opacity-90 transition-opacity"
                    )}
                    style={{ background: "var(--color-saffron)", color: "white" }}
                    onClick={() => setOpen(false)}
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
