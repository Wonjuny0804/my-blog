import React from "react";
import ReactDOM from "react-dom";
import { Login } from "..";

const LoginMoal = () => {
	return (
		<>
			{ReactDOM.createPortal(
				<div className="absolute top-0 bg-transparent w-screen h-screen flex justify-center items-center">
					<section className="">
						<Login />
					</section>
				</div>,
				document.body,
			)}
		</>
	);
};

export default LoginMoal;
