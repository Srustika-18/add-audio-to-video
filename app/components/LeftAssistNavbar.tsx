import { Box, Title } from "@mantine/core";
import React, { useState } from "react";
import classes from "../styles/LeftNavbar.module.css";

const linksMockdata = [
	"Security",
	"Settings",
	"Media",
	"Audio",
	"Subtitle",
	"Elements",
	"Text",
	"Record",
	"Help",
];

export default function LeftAssistNavbar() {
	const [active, setActive] = useState("Media");
	const [activeLink, setActiveLink] = useState("Settings");

	const links = linksMockdata.map((link) => (
		<a
			className={classes.link}
			data-active={activeLink === link || undefined}
			href="#"
			onClick={(event) => {
				event.preventDefault();
				setActiveLink(link);
			}}
			key={link}
		>
			{link}
		</a>
	));

	return (
		<Box
			style={{
				backgroundColor:
					"light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))",
				border: "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-7))",
			}}
		>
			<Title
				order={4}
				style={titleStyle}
			>
				{active}
			</Title>

			{links}
		</Box>
	);
}

const titleStyle = {
	marginBottom: "var(--mantine-spacing-xl)",
	backgroundColor: "var(--mantine-color-body)",
	padding: "var(--mantine-spacing-md)",
	paddingTop: "rem(18px)",
	height: "rem(60px)",
	borderBottom:
		"rem(1px) solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-7))",
};
