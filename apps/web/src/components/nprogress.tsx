import { useRouterState } from "@tanstack/react-router";

import LNProgress from "nprogress";
import { useEffect } from "react";

export const NProgress = () => {
	const routerState = useRouterState();

	useEffect(() => {
		LNProgress.configure({
			showSpinner: false,
		});

		if (routerState.isLoading) {
			LNProgress.start();
		} else {
			LNProgress.done();
		}
	}, [routerState.isLoading]);

	return null;
};
