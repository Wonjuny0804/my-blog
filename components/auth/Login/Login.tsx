import React, { FC, useState } from "react";
import TextInput from "../../common/Inputs/TextInput/TextInput";

const Login: FC = () => {
	const [id, setId] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<div className="bg-modal-bg backdrop-blur-sm w-11/12 rounded-lg py-20 flex flex-col items-center">
			<h2 className="text-white text-center">
				Authorized <br /> Personel Only
			</h2>
			<TextInput inputValue={id} label="ID" setInputValue={setId} />
		</div>
	);
};

export default Login;
