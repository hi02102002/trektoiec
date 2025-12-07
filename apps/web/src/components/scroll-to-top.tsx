"use client";

import { useScroll } from "ahooks";
import { ChevronUpIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const SCROLL_Y_THRESHOLD = 300;

export const ScrollToTop = () => {
	const scroll = useScroll();
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (!scroll) return;
		setShow(scroll.top > SCROLL_Y_THRESHOLD);
	}, [scroll?.top, scroll]);

	const handleScrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<AnimatePresence>
			{show && (
				<motion.div
					key="scroll-to-top"
					initial={{ opacity: 0, y: 20, scale: 0.9 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: 20, scale: 0.9 }}
					transition={{ duration: 0.25 }}
					className="fixed right-4 bottom-4 z-50"
				>
					<Button size="icon" onClick={handleScrollTop}>
						<span className="sr-only">Scroll to top</span>
						<ChevronUpIcon className="size-5" />
					</Button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
