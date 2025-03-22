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
          Back to Home
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6 text-primary">Social Media Management</h1>
      
      <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
        <div>
          <p className="text-lg mb-4">
            Transform your social media presence with our expert management services. We help businesses build and maintain a strong online presence across all major social platforms.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">✓ Content Strategy Development</li>
            <li className="flex items-center">✓ Regular Post Creation & Scheduling</li>
            <li className="flex items-center">✓ Community Management</li>
            <li className="flex items-center">✓ Analytics & Performance Reporting</li>
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
        <h2 className="text-2xl font-semibold mb-4">Ready to boost your social media presence?</h2>
        <p className="mb-6">Let's create a strategy that works for your business.</p>
        <Button asChild>
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}