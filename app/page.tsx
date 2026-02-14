import { Hero } from "@/components/home/Hero";
import { EventsSection } from "@/components/home/EventsSection";
import { DrinksPreview } from "@/components/home/DrinksPreview";
import { AboutSection } from "@/components/home/AboutSection";
import { LocationSection } from "@/components/home/LocationSection";
import { QuickActions } from "@/components/layout/QuickActions";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EventsSection />
      <DrinksPreview />
      <AboutSection />
      <LocationSection />
      <QuickActions />
    </>
  );
}
