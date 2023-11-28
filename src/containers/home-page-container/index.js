import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";

function HomePageContainer() {
    return (
        <div className="home-page-container">
            <HeroSection />
            <ProjectsSection />
        </div>
    );
}

export { HomePageContainer };
