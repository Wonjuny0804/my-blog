module.exports = {
	stories: [
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
		"../pages/**/*.stories.@(ts|tsx)",
		"../components/**/*.stories.@(ts|tsx)",
		"../components/**/**/*.stories.@(ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		{
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: require("postcss"),
				},
			},
		},
	],
	framework: "@storybook/react",
	core: {
		builder: "webpack5",
	},
	typescript: {
		reactDocgen: false,
	},
};
