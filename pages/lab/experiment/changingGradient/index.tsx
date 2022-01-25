import React from "react";
import ChangingGradient from "../../../../components/experiment/ChangingGradient";

const ChangingGradientPage: React.FC = () => {
	const animate = (
		ctx: CanvasRenderingContext2D | null,
		stageWidth: number,
		stageHeight: number,
		totalParticles: number,
		particles: Array<any>,
	) => {
		if (!ctx) return;

		// window.requestAnimationFrame(animate);

		ctx.clearRect(0, 0, stageWidth, stageHeight);

		for (let i = 0; i < totalParticles; i++) {
			const item = particles[i];
			item?.animate(ctx, stageWidth, stageHeight);
		}
	};

	return (
		<div>
			<ChangingGradient animate={animate} />
		</div>
	);
};

export default ChangingGradientPage;
