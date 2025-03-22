import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NetworkPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la page d&apos;accueil
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6 text-primary">Solutions réseau</h1>

      <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
        <div>
          <p className="text-lg mb-4">
            Services de câblage et d&apos;infrastructure réseau professionnels.
            Nous fournissons des solutions de réseau complètes pour maintenir
            votre entreprise connectée et en bon fonctionnement.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              ✓ Conception de l&apos;infrastructure réseau
            </li>
            <li className="flex items-center">✓ Câblage structuré</li>
            <li className="flex items-center">✓ Sécurité réseau</li>
            <li className="flex items-center">✓ Maintenance et support</li>
          </ul>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
            alt="Network Infrastructure"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
            alt="Network Cabling"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1520869562399-e772f042f422"
            alt="Network Security"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8b"
            alt="Network Maintenance"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Prêt à mettre à jour votre réseau ?
        </h2>
        <p className="mb-6">
          Créons une infrastructure réseau fiable pour votre entreprise.
        </p>
        <Button asChild>
          <Link href="/contact">Commencer</Link>
        </Button>
      </div>
    </div>
  );
}
