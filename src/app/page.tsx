import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { StatsSection } from '@/components/home/StatsSection';

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
    </main>
  );
}
