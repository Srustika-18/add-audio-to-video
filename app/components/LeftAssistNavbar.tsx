import { Box, Title } from "@mantine/core";
import React, { useState } from "react";
import classes from "../styles/LeftNavbar.module.css";

const linksMockdata = [
	"Security",
	"Settings",
	"Dashboard",
	"Releases",
	"Account",
	"Orders",
	"Clients",
	"Databases",
	"Pull Requests",
	"Open Issues",
	"Wiki pages",
];

export default function LeftAssistNavbar() {
	const [active, setActive] = useState("Releases");
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
		<Box className={classes.main}>
			<Title
				order={4}
				className={classes.title}
			>
				{active}
			</Title>

			{links}
		</Box>
	);
}
