"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
const services = [
  {
    title: "Gestion des Réseaux Sociaux",
    href: "/services/social-media",
    description:
      "Gestion professionnelle de votre présence sur les réseaux sociaux",
  },
  {
    title: "Développement Web",
    href: "/services/web-development",
    description: "Sites web et applications sur mesure",
  },
  {
    title: "Production Audiovisuelle",
    href: "/services/audiovisual",
    description: "Production vidéo et audio de haute qualité",
  },
  {
    title: "Services d'Impression",
    href: "/services/print",
    description: "Impression professionnelle sur tout support",
  },
  {
    title: "Gestion d'Événements",
    href: "/services/events",
    description: "Organisation complète d'événements",
  },
  {
    title: "Solutions Réseau",
    href: "/services/network",
    description: "Infrastructure réseau et câblage professionnel",
  },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex  items-center">
        <div className="mr-28 hidden md:flex flex-row">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              <Image
                src="/logos/2scom.png"
                alt="Logo"
                width={100}
                height={100}
                className="ml-10"
              />
            </span>
          </Link>
          <NavigationMenu className="ml-28 flex-row ">
            <NavigationMenuList className="space-x-11">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    À propos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Navigation Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <Link href="/" className="font-bold">
        <Image src="/logos/2scom.png" alt="Logo" width={70} height={70} />
      </Link>
      <div className="space-y-4">
        <div className="space-y-4">
          <div className="font-medium">Services</div>
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block text-muted-foreground"
            >
              {service.title}
            </Link>
          ))}
        </div>
        <Link href="/portfolio" className="block font-medium">
          Portfolio
        </Link>
        <Link href="/about" className="block font-medium">
          À propos
        </Link>
        <Link href="/contact" className="block font-medium">
          Contact
        </Link>
      </div>
    </div>
  );
}
