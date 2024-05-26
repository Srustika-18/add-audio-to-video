"use client";

import { Box, Group, AppShell, MantineProvider, Skeleton } from "@mantine/core";
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
					width: 100,
					breakpoint: "sm",
					// collapsed: { mobile: !opened },
				}}
			>
				<AppShell.Navbar p="md">
					<LeftNavbar />
				</AppShell.Navbar>
				<Dropbox />

				<AppShell.Main>
					<Group
						style={{
							height: "100svh",
							display: "grid",
							gridTemplateColumns: "20rem 1fr",
							gridTemplateRows: "1fr auto",
						}}
					>
						<LeftAssistNavbar />
						<Viewport />
						<Footer />
					</Group>
				</AppShell.Main>
			</AppShell>
		</MantineProvider>
	);
}
