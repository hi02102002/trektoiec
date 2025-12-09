import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Sidebar } from "@/components/layouts/app";

export const Route = createFileRoute("/_protected/app/_dashboard")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Sidebar>
			<Outlet />
		</Sidebar>
	);
}
