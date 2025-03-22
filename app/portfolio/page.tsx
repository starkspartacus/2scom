import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-commerce Platform Redesign",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description:
        "Complete redesign and development of an e-commerce platform, resulting in a 40% increase in conversions.",
    },
    {
      title: "Corporate Brand Identity",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb",
      description:
        "Comprehensive social media strategy and content creation for a major corporate brand.",
    },
    {
      title: "Product Launch Campaign",
      category: "Event Management",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      description:
        "Successful product launch event with over 500 attendees and extensive media coverage.",
    },
    {
      title: "Tech Conference Production",
      category: "Audiovisual",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      description:
        "Full audiovisual production for a major tech conference with live streaming capabilities.",
    },
    {
      title: "Marketing Materials Suite",
      category: "Print Services",
      image: "https://images.unsplash.com/photo-1557425955-df376b5903c8",
      description:
        "Comprehensive print materials including brochures, business cards, and large format displays.",
    },
    {
      title: "Office Network Infrastructure",
      category: "Network Solutions",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      description:
        "Complete network infrastructure setup for a 200-person office space.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la page d&apos;accueil
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6 text-primary">Notre portfolio</h1>

      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Explorez nos derniers projets et voyez comment nous avons aidé les
        entreprises à atteindre leurs objectifs grâce à des solutions numériques
        innovantes.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-card rounded-lg overflow-hidden shadow-sm"
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-primary text-sm font-medium mb-2">
                {project.category}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">En savoir plus</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Prêt à commencer votre projet ?
        </h2>
        <p className="mb-6">Créons ensemble quelque chose de fantastique.</p>
        <Button variant="secondary" asChild>
          <Link href="/contact">Contactez-nous</Link>
        </Button>
      </div>
    </div>
  );
}
