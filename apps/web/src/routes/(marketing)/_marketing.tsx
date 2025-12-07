import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Footer, Header } from "@/components/layouts/marketing";

export const Route = createFileRoute("/(marketing)/_marketing")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
