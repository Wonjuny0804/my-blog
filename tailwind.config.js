module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"modal-bg": "rgba(255, 255, 255, 0.25)",
			},
			backgroundImage: {
				"mobile-bg": 'url("/assets/images/mobile-bg.jpg")',
			},
		},
	},
	plugins: [],
};
