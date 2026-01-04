import { useMutation } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { LoadingOverlay } from "@/components/ui/loading-overlay";
import { useAnswersApi, useQuestionTimerApi } from "@/stores/attempt";
import { orpc } from "@/utils/orpc";

const Route = getRouteApi(
	"/_protected/app/_practices/practices/$part/$session-id/",
);

export const PracticeActions = () => {
	const params = Route.useParams();
	const search = Route.useSearch();
	const navigate = Route.useNavigate();
	const createPartPracticeHistoryMutation = useMutation(
		orpc.partPractices.createPartPracticeHistory.mutationOptions(),
	);

	const questionTimerApi = useQuestionTimerApi();
	const answersApi = useAnswersApi();
	const [isPending, startTransition] = useTransition();

	const handleSubmit = () => {
		startTransition(async () => {
			const answers = answersApi.getState().answers;

			const duration = questionTimerApi.getState().getTotalSessionTime();

			await createPartPracticeHistoryMutation.mutateAsync({
				contents: Object.values(answers).map((answer) => {
					return {
						isCorrect: answer.isCorrect,
						questionId: answer.parentQuestionId,
						subQuestionId: answer.subQuestionId,
						userAnswer: answer.choice,
						isFlagged: answer.isFlagged,
						timeTaken: questionTimerApi
							.getState()
							.getQuestionTime(answer.parentQuestionId),
					};
				}),
				metadata: {
					part: Number(params.part),
					mode: search.mode,
					duration,
					numberOfQuestions: Object.keys(answers).length,
				},
				id: params["session-id"],
			});

			await navigate({
				to: "/app/practices/$part/$session-id/results",
				params: {
					part: params.part,
					"session-id": params["session-id"],
				},
				replace: true,
				ignoreBlocker: true,
			});
		});
	};

	return (
		<>
			<div className="flex items-center gap-2">
				<Button variant="default" size="sm" onClick={handleSubmit}>
					Làm lại bài
				</Button>
			</div>
			<LoadingOverlay open={isPending} message="Bạn chờ chút nhé..." />
		</>
	);
};
