import React, { useEffect, useState } from "react";
import GlowParticles from "./glowParticles";

const COLORS = [
	{ r: 45, g: 75, b: 227 },
	{ r: 250, g: 255, b: 89 },
	{ r: 255, g: 104, b: 248 },
	{ r: 44, g: 209, b: 252 },
	{ r: 54, g: 233, b: 84 },
];

const ExperimentPage = () => {
	const [stageWidth, setStageWidth] = useState<number>(0);
	const [stageHeight, setStageHeight] = useState<number>(0);

	useEffect(() => {
		const $canvas = document.createElement("canvas");
		document.body.appendChild($canvas);

		const $context = $canvas.getContext("2d");
		const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

		const totalParticles = 1;
		const particles = [];
		const maxRadius = 90;
		const minRadius = 40;

		// window resize code

		// window.requestAnimationFrame($canvas.animate.bind($canvas));

		const createParticles = () => {
			let curColor = 0;

			for (let i = 0; i < totalParticles; i++) {
				const item = (
					<GlowParticles
						x={Math.random() * stageWidth}
						y={Math.random() * stageHeight}
						radius={Math.random() * (maxRadius - minRadius) + minRadius}
						rgb={COLORS[curColor]}
					/>
				);

				if (++curColor >= COLORS.length) curColor = 0;

				particles.push(item);
			}
		};

		const resize = () => {
			setStageWidth(document.body.clientWidth);
			setStageHeight(document.body.clientHeight);

			$canvas.width = stageWidth * pixelRatio;
			$canvas.height = stageHeight * pixelRatio;

			$context?.scale(pixelRatio, pixelRatio);
		};

		const animate = () => {};
	}, []);

	return <div></div>;
};
