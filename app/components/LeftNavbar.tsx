import { Box, Group, Text, Title, UnstyledButton, rem } from "@mantine/core";
import {
	IconCalendarStats,
	IconDeviceDesktopAnalytics,
	IconFingerprint,
	IconGauge,
	IconAd,
	IconMenu2,
	IconSearch,
	IconSettings,
	IconUser,
	IconMusic,
	IconLetterA,
	IconNote,
	IconLetterT,
	IconVideo,
	IconHelp,
} from "@tabler/icons-react";
import { useState } from "react";
import classes from "../styles/LeftNavbar.module.css";

const mainLinksMockdata = [
	{ icon: IconSearch, label: "Search" },
	{ icon: IconAd, label: "Media" },
	{ icon: IconMusic, label: "Audio" },
	{ icon: IconLetterA, label: "Subtitle" },
	{ icon: IconNote, label: "Elements" },
	{ icon: IconLetterT, label: "Text" },
	{ icon: IconVideo, label: "Record" },
	{ icon: IconHelp, label: "Help" },
];

export default function LeftNavbar() {
	const [active, setActive] = useState("Releases");
	const [activeLink, setActiveLink] = useState("Settings");

	const mainLinks = mainLinksMockdata.map((link) => (
		<Group
			key={link.label}
			justify="center"
			align="center"
			gap={0}
			display="flex"
			style={{
				flexDirection: "column",
			}}
		>
			<UnstyledButton
				onClick={() => setActive(link.label)}
				className={classes.mainLink}
				data-active={link.label === active || undefined}
			>
				<link.icon
					style={{ width: rem(22), height: rem(22) }}
					stroke={1.5}
				/>
			</UnstyledButton>
			<Text size="xs">{link.label}</Text>
		</Group>
	));

	return (
		<Box className={classes.navbar}>
			<Box className={classes.wrapper}>
				<Box className={classes.aside}>
					<Box className={classes.logo}>
						<IconMenu2 />
					</Box>
					<Group className={classes.mainlinks}>{mainLinks}</Group>
				</Box>
			</Box>
		</Box>
	);
}
