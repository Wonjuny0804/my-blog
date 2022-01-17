import React, { FC } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { Menu } from "@headlessui/react";
import menus from "../../../core/data/menus";
import Link from "next/link";
import LoginMoal from "../../auth/Login/LoginMoal";
import useModal from "../../../hooks/useModal";

const NavMenu: FC = () => {
	const { toggle, isShowing } = useModal();

	return (
		<Menu>
			<Menu.Button>
				<MenuIcon className="w-5 h-5 text-[white]" />
			</Menu.Button>
			<Menu.Items className="flex flex-col">
				{menus.map((menu) => (
					<Menu.Item key={menu.id}>
						{({ active }) => (
							<Link href={menu.href}>
								<a className={`${active ? "bg-blue-400" : ""}`}>{menu.name}</a>
							</Link>
						)}
					</Menu.Item>
				))}
				<Menu.Item
					onClick={() => {
						toggle();
						console.log("click!");
					}}
				>
					<div>login</div>
				</Menu.Item>
			</Menu.Items>
			{isShowing && <LoginMoal />}
		</Menu>
	);
};

export default NavMenu;
