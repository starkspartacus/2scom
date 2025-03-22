import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="font-bold">
              <Link href="/">
                <Image
                  src="/logos/2scom.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </Link>
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Solutions digitales professionnelles pour vos besoins
              d&apos;entreprise.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Services</h3>
            <div className="flex flex-col mt-4 space-y-2 text-sm text-muted-foreground">
              <Link href="/services/social-media">
                Gestion des Réseaux Sociaux
              </Link>
              <Link href="/services/web-development">Développement Web</Link>
              <Link href="/services/audiovisual">Production Audiovisuelle</Link>
              <Link href="/services/print">Services d'Impression</Link>
              <Link href="/services/events">Gestion d'Événements</Link>
              <Link href="/services/network">Solutions Réseau</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Entreprise</h3>
            <div className="flex flex-col mt-4 space-y-2 text-sm text-muted-foreground">
              <Link href="/about">À propos</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Politique de confidentialité</Link>
              <Link href="/terms">Conditions d'utilisation</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Suivez-nous</h3>
            <div className="flex mt-4 space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCODJh6ozeX1PwDSgCCQ3Llw"
                className="text-muted-foreground hover:text-foreground"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} 2scom. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
