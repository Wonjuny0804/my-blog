import React, { FC, useCallback } from "react";

interface Props {
	label?: string;
	inputValue: string;
	setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const TextInput: FC<Props> = ({ inputValue, setInputValue, label }) => {
	const handleInputChange = useCallback((e) => {
		setInputValue(e.target.value);
	}, []);
	return (
		<div className="border-b flex gap-2 w-full">
			<label className={`text-white`} htmlFor={label || "textInput"}>
				{label || "Default"}
			</label>
			<input
				id={label || "textInput"}
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				className={`bg-transparent text-white`}
			/>
		</div>
	);
};

export default TextInput;
