import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/app/_dashboard/vocabularies")(
	{
		component: RouteComponent,
	},
);

function RouteComponent() {
	return <div>Hello "/_protected/app/_dashboard/vocabularies"!</div>;
}
