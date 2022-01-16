import React, { FC } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { Menu } from "@headlessui/react";
import menus from "../../../core/data/menus";
import Link from "next/link";

const NavMenu: FC = () => {
	return (
		<Menu>
			<Menu.Button>
				<MenuIcon className="w-5 h-5 text-[white]" />
			</Menu.Button>
			<Menu.Items className="flex flex-col">
				{menus.map((menu) => (
					<Menu.Item>
						{({ active }) => (
							<Link href={menu.href}>
								<a className={`${active ? "bg-blue-400" : ""}`}>{menu.name}</a>
							</Link>
						)}
					</Menu.Item>
				))}
			</Menu.Items>
		</Menu>
	);
};

export default NavMenu;
