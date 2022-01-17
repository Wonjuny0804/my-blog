import type { NextPage } from "next";
import NavMenu from "../components/common/NavMenu/NavMenu";

const Home: NextPage = () => {
	return (
		<main className="bg-mobile-bg bg-cover w-screen h-screen flex flex-col items-center relative">
			<div className="absolute top-5 right-5">
				<NavMenu />
			</div>
			<h1 className="font-bold text-5xl leading-[60px] text-center text-transparent bg-clip-text bg-gradient-to-b to-[#E7A150] via-[#E7B7B7] from-[#E7D4A6] mt-[30vh]">
				Welcome <br /> to my own <br /> space
			</h1>
		</main>
	);
};

export default Home;
