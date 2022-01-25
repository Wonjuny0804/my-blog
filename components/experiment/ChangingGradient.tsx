import React, { FC, useEffect, useState, useRef } from "react";
import { GlowingParticle } from "./glowingParticle";

const COLORS = [
	{ r: 45, g: 75, b: 227 },
	{ r: 250, g: 255, b: 89 },
	{ r: 255, g: 104, b: 248 },
	{ r: 44, g: 209, b: 252 },
	{ r: 54, g: 233, b: 84 },
];

interface Props {
	animate: any;
}

const ChangingGradient: FC<Props> = ({ animate }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	let maxRadius = 90;
	let minRadius = 40;
	let stageWidth: number;
	let stageHeight: number;

	const particles: GlowingParticle[] = [];

	useEffect(() => {
		if (canvasRef.current) {
			const $canvasCtx = canvasRef.current.getContext("2d");
			let pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

			let totalParticles = 1;

			const createParticles = () => {
				let curColor = 0;

				for (let i = 0; i < totalParticles; i++) {
					const item = new GlowingParticle(
						Math.random() * stageWidth,
						Math.random() * stageHeight,
						Math.random() * (maxRadius - minRadius) + minRadius,
						COLORS[curColor],
					);

					if (++curColor >= COLORS.length) {
						curColor = 0;
					}

					particles[i] = item;
				}
			};

			const resize = () => {
				if (!canvasRef?.current) return;

				stageWidth = document.body.clientWidth;
				stageHeight = document.body.clientHeight;

				canvasRef.current.width = stageWidth * pixelRatio;
				canvasRef.current.height = stageHeight * pixelRatio;

				$canvasCtx?.scale(pixelRatio, pixelRatio);
				createParticles();
			};

			window.addEventListener("resize", resize, false);
			animate($canvasCtx, stageHeight, stageWidth, totalParticles, particles);

			// window.requestAnimationFrame(animate);
		}
	}, [canvasRef.current, animate]);

	useEffect(() => {}, [animate]);

	return <canvas ref={canvasRef} />;
};

export default ChangingGradient;
