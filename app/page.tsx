"use client"

import { Box, Group, AppShell } from "@mantine/core";
import Dropbox from "./components/Dropbox";
import LeftNavbar from "./components/LeftNavbar";
import Footer from "./components/Footer";
import Viewport from "./components/Viewport";
import { useDisclosure } from "@mantine/hooks";

export default function Home() {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			navbar={{
				width: 300,
				breakpoint: "sm",
				// collapsed: { mobile: !opened },
			}}
			footer={{
				height: 140,
			}}
			styles={{
				main: { padding: 0 },
			}}
		>
			<AppShell.Navbar p="md">
				<LeftNavbar />
			</AppShell.Navbar>
			<Box
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Dropbox />
				<Viewport />
			</Box>
			<AppShell.Footer p="md">
				<Footer />
			</AppShell.Footer>
		</AppShell>
	);
}
