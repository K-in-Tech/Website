import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import BlogsSection from "@/components/home/BlogsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import RoadmapsSection from "@/components/home/RoadmapsSection";
import AIToolsSection from "@/components/home/AIToolsSection";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <HeroSection />

      <StatsSection
        subscribers={"10K+"}
        tutorials={"200+"}
        codingProblems={"500+"}
        projects={"50+"}
        youtubeUrl="https://youtube.com/@k-in-tech"
      />

      <FeaturesSection />

      <BlogsSection />

      <ProjectsSection />

      <RoadmapsSection />

      <AIToolsSection />
    </main>
  );
}