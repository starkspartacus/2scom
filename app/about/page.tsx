import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      bio: "With over 15 years of experience in digital solutions, John leads our team with vision and expertise.",
    },
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      bio: "Sarah brings creativity and innovation to every project, ensuring exceptional results for our clients.",
    },
    {
      name: "Michael Chen",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Michael's technical expertise drives our development projects to success.",
    },
    {
      name: "Emma Davis",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "Emma ensures smooth project execution and client satisfaction through effective management.",
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

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-primary">
          À propos de nous
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Nous sommes un équipe de professionnels passionnés dédiés à la
          livraison de solutions numériques exceptionnelles. Notre expertise
          s&apos;étend sur divers domaines, nous permettant de fournir des
          services complets à nos clients.
        </p>
      </div>

      {/* Company Values */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Notre mission</h3>
          <p className="text-muted-foreground">
            Evaluer les besoins de nos clients et fournir des solutions
            numériques innovantes qui stimulent leur croissance et leur succès
            dans le monde moderne.
          </p>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Notre vision</h3>
          <p className="text-muted-foreground">
            Être le leader dans la fourniture de services numériques complets,
            reconnu pour son excellence et son innovation.
          </p>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Nos valeurs</h3>
          <p className="text-muted-foreground">
            L&apos;innovation, l&apos;intégrité et le succès client sont à la
            base de tout ce que nous faisons.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Rencontrez notre équipe
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Prêt à travailler ensemble ?
        </h2>
        <p className="mb-6">
          Discutons de la façon dont nous pouvons vous aider à grandir.
        </p>
        <Button variant="secondary" asChild>
          <Link href="/contact">Contactez-nous</Link>
        </Button>
      </div>
    </div>
  );
}
