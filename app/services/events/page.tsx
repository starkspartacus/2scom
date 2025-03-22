import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6 text-primary">Event Management</h1>
      
      <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
        <div>
          <p className="text-lg mb-4">
            Comprehensive event planning and management services. From corporate events to private celebrations, we handle every detail to ensure your event's success.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">✓ Corporate Events</li>
            <li className="flex items-center">✓ Product Launches</li>
            <li className="flex items-center">✓ Conferences & Seminars</li>
            <li className="flex items-center">✓ Private Celebrations</li>
          </ul>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1511578314322-379afb476865"
            alt="Event Management"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
            alt="Corporate Events"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
            alt="Conferences"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
            alt="Product Launches"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Ready to plan your next event?</h2>
        <p className="mb-6">Let's create an unforgettable experience for your guests.</p>
        <Button asChild>
          <Link href="/contact">Start Planning</Link>
        </Button>
      </div>
    </div>
  );
}