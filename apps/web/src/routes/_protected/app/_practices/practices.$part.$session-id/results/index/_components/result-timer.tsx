import { CheckCircleIcon } from "@phosphor-icons/react";
import { getRouteApi } from "@tanstack/react-router";
import { getTime } from "@trektoeic/utils/get-time";
import { timerVariants } from "@/components/practices/timer";
import { dayjs } from "@/lib/dayjs";
import { cn } from "@/lib/utils";

const Route = getRouteApi(
	"/_protected/app/_practices/practices/$part/$session-id/results/",
);

export const ResultTimer = () => {
	const { history } = Route.useLoaderData();

	const formattedDuration = dayjs
		.duration(history.metadata.duration ?? 0, "milliseconds")
		.format(
			(history.metadata.duration ?? 0) >=
				getTime({
					hours: 1,
				})
				? "HH:mm:ss"
				: "mm:ss",
		);

	return (
		<div
			className={cn(
				timerVariants(),
				"absolute left-1/2 -translate-x-1/2 transform gap-2",
			)}
		>
			<CheckCircleIcon className="size-5 text-green-600" weight="duotone" />
			<div className="flex items-center gap-1.5">
				<span className="text-muted-foreground text-xs">Hoàn thành trong</span>
				<span className="font-medium tabular-nums">{formattedDuration}</span>
			</div>
		</div>
	);
};
