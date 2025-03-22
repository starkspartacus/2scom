import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SocialMediaPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la page d&apos;accueil
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6 text-primary">
        Gestion des médias sociaux
      </h1>

      <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
        <div>
          <p className="text-lg mb-4">
            Transformez votre présence sur les médias sociaux avec nos services
            de gestion experts. Nous aidons les entreprises à construire et à
            maintenir une présence en ligne forte sur tous les principaux
            réseaux sociaux.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">✓ Stratégie de contenu</li>
            <li className="flex items-center">
              ✓ Création et programmation de posts réguliers
            </li>
            <li className="flex items-center">✓ Gestion de la communauté</li>
            <li className="flex items-center">
              ✓ Analyse et suivi des performances
            </li>
          </ul>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0"
            alt="Social Media Management"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
            alt="Social Media Analytics"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293"
            alt="Content Creation"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1553484771-371a605b060b"
            alt="Community Engagement"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Prêt à booster votre présence sur les médias sociaux ?
        </h2>
        <p className="mb-6">
          Créons une stratégie qui fonctionne pour votre entreprise.
        </p>
        <Button asChild>
          <Link href="/contact">Commencer</Link>
        </Button>
      </div>
    </div>
  );
}
