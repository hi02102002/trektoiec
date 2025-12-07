import { createFileRoute } from "@tanstack/react-router";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ComparisonSection } from "./_components/comparison-section";
import { CtaSection } from "./_components/cta-section";
import { FeaturesBentoGrid } from "./_components/feature-bento-grid";
import { HeroSection } from "./_components/hero-section";

export const Route = createFileRoute("/(marketing)/_marketing/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<>
			<HeroSection />
			<FeaturesBentoGrid />
			<ComparisonSection />
			<CtaSection />
			<ScrollToTop />
		</>
	);
}
