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
          Back to Home
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6 text-primary">Network Solutions</h1>
      
      <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
        <div>
          <p className="text-lg mb-4">
            Professional network infrastructure and cabling services. We provide comprehensive networking solutions to keep your business connected and running smoothly.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">✓ Network Infrastructure Design</li>
            <li className="flex items-center">✓ Structured Cabling</li>
            <li className="flex items-center">✓ Network Security</li>
            <li className="flex items-center">✓ Maintenance & Support</li>
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
        <h2 className="text-2xl font-semibold mb-4">Ready to upgrade your network?</h2>
        <p className="mb-6">Let's build a reliable network infrastructure for your business.</p>
        <Button asChild>
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}