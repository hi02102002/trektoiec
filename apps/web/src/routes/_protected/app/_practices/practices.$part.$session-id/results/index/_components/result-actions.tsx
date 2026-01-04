import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { LoadingOverlay } from "@/components/ui/loading-overlay";


export const PracticeActions = () => {
	const [isPending, startTransition] = useTransition();

	const handleRetry = () => {
		startTransition(() => {
			alert("Chức năng làm lại bài sẽ sớm được ra mắt. Hãy chờ đón nhé!");
		});
	};

	return (
		<>
			<div className="flex items-center gap-2">
				<Button variant="default" size="sm" onClick={handleRetry}>
					Làm lại bài
				</Button>
			</div>
			<LoadingOverlay open={isPending} message="Bạn chờ chút nhé..." />
		</>
	);
};
