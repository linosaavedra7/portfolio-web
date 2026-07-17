import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/features/home/components/HeroSection';
import { ExperienceSection } from '@/features/home/components/ExperienceSection';
import { CompaniesCarousel } from '@/features/home/components/CompaniesCarousel';
import { ProjectsSection } from '@/features/home/components/ProjectsSection';
import { AboutSection } from '@/features/home/components/AboutSection';

export default function Home() {
  return (
    <>
      {/* Theme-aware background */}
      <div
        aria-hidden
        className="fixed inset-0 -z-20"
        style={{
          backgroundColor: 'var(--page-bg)',
          backgroundImage: 'var(--page-gradient)',
        }}
      />

      <Navbar />

      <main className="px-4">
        <HeroSection />
        <div className="space-y-24 pb-24">
          <ExperienceSection />
          <CompaniesCarousel />
          <ProjectsSection />
          <AboutSection />
        </div>
      </main>

      <Footer />
    </>
  );
}
