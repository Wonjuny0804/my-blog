import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<main className="bg-mobile-bg bg-cover w-screen h-screen flex flex-col justify-center items-center">
			<h1 className="font-bold text-5xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-pink-700">
				My First Blog
			</h1>
			<p className="font-bold text-white text-xl">Hi, this is my first blog.</p>
			<p className="text-white mt-2">New updates will come soon!</p>
		</main>
	);
};

export default Home;
