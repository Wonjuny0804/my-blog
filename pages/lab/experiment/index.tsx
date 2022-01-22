import React from "react";
import Link from "next/link";
import Canvas from "../../../components/experiment/Canvas";

const ExperimentPage = () => {
	return (
		<div>
			<ul>
				<li>
					<Link href="/lab/experiment/changingGradient">
						<a>Changing Gradient</a>
					</Link>
				</li>
				<li>
					<Link href="/lab/experiment/threejs">
						<a>ThreeJS Experiements</a>
					</Link>
				</li>
			</ul>

			<Canvas />
		</div>
	);
};

export default ExperimentPage;
