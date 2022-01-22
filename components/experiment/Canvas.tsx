import React, { useRef, useEffect } from "react";

const Canvas = (props: any) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const draw = (context: CanvasRenderingContext2D, frameCount: number) => {
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		context.fillStyle = "#000000";
		context.beginPath();
		context.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
		context.fill();
	};

	useEffect(() => {
		if (canvasRef.current) {
			const $canvasCtx = canvasRef.current.getContext("2d");
			let frameCount = 0;
			let animationFrameId: number;

			if ($canvasCtx) {
				const render = () => {
					frameCount++;
					draw($canvasCtx, frameCount);
					animationFrameId = window.requestAnimationFrame(render);
				};

				render();

				return () => {
					window.cancelAnimationFrame(animationFrameId);
				};
			}
		}
	}, [draw]);

	return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
