import React, { FC, useRef, useEffect } from "react";

interface Props {
	draw: any;
}

const Canvas: FC<Props> = ({ draw, ...rest }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

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

	return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;
