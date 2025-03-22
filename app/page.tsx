import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Monitor, Smartphone, Video, Printer, Calendar, Network } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const carouselItems = [
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      title: "Solutions Digitales Innovantes",
      description: "Transformez votre présence numérique avec nos services experts"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Développement Web Professionnel",
      description: "Des sites web modernes et performants pour votre entreprise"
    },
    {
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
      title: "Production Audiovisuelle",
      description: "Donnez vie à vos idées avec nos services de production"
    }
  ];

  return (
    <>
      {/* Hero Section avec Carousel */}
      <section className="relative">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px] w-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${item.image})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover'
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50" />
                  </div>
                  <div className="relative h-full flex items-center justify-center text-center">
                    <div className="max-w-3xl mx-auto px-4">
                      <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">{item.title}</h2>
                      <p className="text-xl text-white/90 mb-8">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Nos Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Smartphone className="w-10 h-10" />}
              title="Gestion des Réseaux Sociaux"
              description="Gestion stratégique de votre présence sur les réseaux sociaux pour augmenter votre visibilité."
              href="/services/social-media"
            />
            <ServiceCard
              icon={<Monitor className="w-10 h-10" />}
              title="Développement Web"
              description="Sites web et applications personnalisés adaptés à vos besoins."
              href="/services/web-development"
            />
            <ServiceCard
              icon={<Video className="w-10 h-10" />}
              title="Production Audiovisuelle"
              description="Services professionnels de création de contenu vidéo et audio."
              href="/services/audiovisual"
            />
            <ServiceCard
              icon={<Printer className="w-10 h-10" />}
              title="Services d'Impression"
              description="Solutions d'impression de haute qualité pour tous vos besoins professionnels."
              href="/services/print"
            />
            <ServiceCard
              icon={<Calendar className="w-10 h-10" />}
              title="Gestion d'Événements"
              description="Services complets de planification et d'exécution d'événements."
              href="/services/events"
            />
            <ServiceCard
              icon={<Network className="w-10 h-10" />}
              title="Solutions Réseau"
              description="Services professionnels d'infrastructure réseau et de câblage."
              href="/services/network"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Ce que disent nos clients</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Travailler avec cette équipe a transformé notre présence en ligne. Leur expertise en gestion des réseaux sociaux est incomparable."
              author="Sarah Martin"
              company="Tech Solutions Inc."
            />
            <TestimonialCard
              quote="L'équipe de développement web a dépassé nos attentes. Notre nouveau site web a considérablement amélioré nos taux de conversion."
              author="Michel Dubois"
              company="Growth Dynamics"
            />
            <TestimonialCard
              quote="La qualité de leur production audiovisuelle est exceptionnelle. Ils nous ont aidés à créer du contenu captivant qui résonne avec notre audience."
              author="Emma Laurent"
              company="Creative Studios"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre entreprise ?</h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg opacity-90">
            Discutons de la façon dont nos services peuvent vous aider à atteindre vos objectifs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contactez-nous</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ icon, title, description, href }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Card className="p-6 transition-all hover:shadow-lg">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button variant="ghost" asChild className="group">
        <Link href={href}>
          En savoir plus
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </Card>
  );
}

function TestimonialCard({ quote, author, company }: {
  quote: string;
  author: string;
  company: string;
}) {
  return (
    <Card className="p-6">
      <p className="text-lg mb-4">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </div>
    </Card>
  );
}