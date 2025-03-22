import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrintPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la page d&apos;accueil
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6 text-primary">
        Services de impression
      </h1>

      <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
        <div>
          <p className="text-lg mb-4">
            Solutions de printage de haute qualité pour tous vos besoins
            commerciaux. De cartes de visite aux impressions grand format, nous
            garantissons une qualité exceptionnelle pour chaque projet.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              ✓ Cartes de visite et documents
            </li>
            <li className="flex items-center">✓ Matériel de marketing</li>
            <li className="flex items-center">✓ Impression grand format</li>
            <li className="flex items-center">✓ Emballage sur mesure</li>
          </ul>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73"
            alt="Print Services"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1611244806964-91d204d4a2a7"
            alt="Business Cards"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1"
            alt="Large Format Printing"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1596920566403-2072ed25d7f5"
            alt="Marketing Materials"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Prêt à commencer votre projet de print ?
        </h2>
        <p className="mb-6">
          Créons des matériaux imprimés beaux et efficaces qui font un impact.
        </p>
        <Button asChild>
          <Link href="/contact">Commencer</Link>
        </Button>
      </div>
    </div>
  );
}
