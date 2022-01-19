import React, { FC, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const Box = (props: JSX.IntrinsicElements["mesh"]) => {
	const mesh = useRef<THREE.Mesh>(null!);

	const [hovered, setHover] = useState<boolean>(false);
	const [active, setActive] = useState<boolean>(false);

	useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
		</mesh>
	);
};

const PracticeOne = () => {
	return (
		<main>
			<h1 className="font-bold ">Create a 3d ball with threejs</h1>
			<p>Please change the Boxes into a Sphere!</p>
			<Canvas>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Box position={[-1.2, 0, 0]} />
				<Box position={[1.2, 0, 0]} />
			</Canvas>
		</main>
	);
};

export default PracticeOne;
