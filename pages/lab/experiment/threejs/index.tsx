import React, { FC, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function useTurntable() {
	const ref = React.useRef<THREE.Mesh>(null!);
	useFrame(() => {
		ref.current.rotation.y += 0.01;
	});

	return ref;
}

const Box = (props: JSX.IntrinsicElements["mesh"]) => {
	// const mesh = useRef<THREE.Mesh>(null!);

	const [hovered, setHover] = useState<boolean>(false);
	const [active, setActive] = useState<boolean>(false);

	const ref = useTurntable();

	// useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

	return (
		<mesh
			{...props}
			ref={ref}
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

const Sphere = (props: JSX.IntrinsicElements["mesh"]) => {
	const mesh = useRef<THREE.Mesh>(null);

	// useFrame((state, delta) => (mesh.current?.rotation.y += 0.01));

	return (
		<mesh {...props} ref={mesh} scale={2} visible>
			<sphereGeometry args={[7, 12, 8]} attach="geometry" />
			<meshStandardMaterial
				attach="material" // How the element should attach itself to its parent
				color="#7222D3" // The color of the material
				transparent // Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects. When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
				roughness={0.1} // The roughness of the material - Defaults to 1
				metalness={0.1}
			/>
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
				<Sphere />
			</Canvas>
		</main>
	);
};

export default PracticeOne;
