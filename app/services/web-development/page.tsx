import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WebDevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6 text-primary">Web Development</h1>
      
      <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
        <div>
          <p className="text-lg mb-4">
            Custom web solutions tailored to your business needs. From responsive websites to complex web applications, we deliver high-quality digital experiences.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">✓ Custom Website Development</li>
            <li className="flex items-center">✓ E-commerce Solutions</li>
            <li className="flex items-center">✓ Web Applications</li>
            <li className="flex items-center">✓ CMS Integration</li>
          </ul>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1547658719-da2b51169166"
            alt="Web Development"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            alt="Coding"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            alt="Web Design"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Development Process"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Ready to build your digital presence?</h2>
        <p className="mb-6">Let's create a website that represents your brand perfectly.</p>
        <Button asChild>
          <Link href="/contact">Start Your Project</Link>
        </Button>
      </div>
    </div>
  );
}