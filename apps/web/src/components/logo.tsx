import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { MountainIcon } from "./icons/mountain-icon";

type LogoProps = ComponentProps<"div"> & {
	classNames?: {
		container?: string;
		icon?: string;
	};
	isShowText?: boolean;
};

export const Logo = ({
	className,
	classNames,
	isShowText = true,
}: LogoProps) => {
	return (
		<div
			className={cn(
				"flex items-start gap-1 font-semibold text-lg text-primary",
				classNames?.container,
				className,
			)}
		>
			<MountainIcon className={cn("size-6", classNames?.icon)} />
			{isShowText && (
				<span>
					<span>Trek</span>
					<span className="text-muted-foreground">Toeic</span>
				</span>
			)}
		</div>
	);
};
