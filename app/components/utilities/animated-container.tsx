'use client';

import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type AnimatedContainerProps = {
	delay?: number;
	duration?: number;
	initialY?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

export function AnimatedContainer({
	className,
	delay = 0.1,
	duration = 0.8,
	initialY = 10,
	children,
}: AnimatedContainerProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: initialY, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration }}
			className={className}
		>
			{children}
		</motion.div>
	);
}