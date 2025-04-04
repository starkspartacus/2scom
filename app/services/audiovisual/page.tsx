import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AudiovisualPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la page d&apos;accueil
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6 text-primary">
        Production audiovisuelle
      </h1>

      <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
        <div>
          <p className="text-lg mb-4">
            Professional video and audio production services for all your
            content needs. From corporate videos to promotional content, we
            deliver high-quality productions.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              ✓ Production de vidéo corporate
            </li>
            <li className="flex items-center">✓ Filmage commercial</li>
            <li className="flex items-center">✓ Couverture d&apos;événement</li>
            <li className="flex items-center">
              ✓ Enregistrement audio et édition
            </li>
          </ul>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            alt="Audiovisual Production"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1"
            alt="Video Production"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
            alt="Audio Recording"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c"
            alt="Film Equipment"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Prêt à créer du contenu captivant ?
        </h2>
        <p className="mb-6">
          Faisons de votre vision une réalité grâce à la production
          audiovisuelle professionnelle.
        </p>
        <Button asChild>
          <Link href="/contact">Commencer votre projet</Link>
        </Button>
      </div>
    </div>
  );
}
