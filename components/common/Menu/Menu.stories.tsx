import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Menu from "./Menu";

export default {
	title: "component/Menu",
	component: Menu,
} as ComponentMeta<typeof Menu>;

export const SampleMenu: ComponentStory<typeof Menu> = () => {
	return <Menu />;
};
