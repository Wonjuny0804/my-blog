import { useEffect } from "@storybook/addons";
import React, { FC, useState } from "react";

const PI2 = Math.PI * 2;

interface Props {
	x: number;
	y: number;
	radius: number;
	rgb: any;
	context: any;
	stageWidth: number;
	stageHeight: number;
}

const GlowParticles: FC<Props> = ({ x, y, radius, rgb, context, stageHeight, stageWidth }) => {
	const [particleX, setParticleX] = useState<number>(x);
	const [particleY, setParticleY] = useState<number>(y);
	const [particleRadius, setParticleRadius] = useState<number>(radius);
	const [particleRgb, setParticleRgb] = useState<any>(rgb);

	const [vx, setVx] = useState<number>(Math.random() * 4);
	const [vy, setVy] = useState<number>(Math.random() * 4);

	const [sinValue, setSinValue] = useState<number>(Math.random());

	useEffect(() => {
		const animate = (ctx: any, stageWidth: number, stageHeight: number) => {
			setSinValue(sinValue + 0.01);
			setParticleRadius(particleRadius + Math.sin(sinValue));

			setParticleX(particleX + vx);
			setParticleY(particleY + vy);

			if (particleX < 0) {
				setVx(vx * -1);
				setParticleX(particleX + 10);
			} else if (particleX > stageWidth) {
				setVx(vx * -1);
				setParticleX(particleX - 10);
			}

			if (particleY < 0) {
				setVy(vy * -1);
				setParticleY(particleY + 10);
			} else if (particleY > stageHeight) {
				setVy(vx * -1);
				setParticleY(particleY - 10);
			}

			ctx.beginPath();

			ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`;
			ctx.arc(particleX, particleY, particleRadius, 0, PI2, false);
			ctx.fill();
		};

		animate(context, stageWidth, stageHeight);
	}, [stageWidth, stageHeight]);

	return <div></div>;
};

export default GlowParticles;
