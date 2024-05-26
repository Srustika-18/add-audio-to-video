"use client";

import { Box, Group, AppShell, MantineProvider } from "@mantine/core";
import Dropbox from "./components/Dropbox";
import LeftNavbar from "./components/LeftNavbar";
import Footer from "./components/Footer";
import Viewport from "./components/Viewport";
import { useDisclosure } from "@mantine/hooks";
import LeftAssistNavbar from "@/app/components/LeftAssistNavbar";

export default function Home() {
	const [opened, { toggle }] = useDisclosure();

	return (
		<MantineProvider
			theme={{
				primaryColor: "indigo",
			}}
		>
			<AppShell
				navbar={{
					width: "auto",
					breakpoint: "sm",
					collapsed: { mobile: true },
				}}
			>
				<AppShell.Navbar
					p="md"
				>
					<LeftNavbar />
				</AppShell.Navbar>
				{/* <AppShell.Main> */}
					<Box
						style={{
							// display: "grid",
						}}
					>
						<Dropbox />
						<Viewport />
						{/* <LeftAssistNavbar /> */}
						<Footer />
					</Box>
				{/* </AppShell.Main> */}
			</AppShell>
		</MantineProvider>
	);
}
