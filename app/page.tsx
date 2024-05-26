"use client";

import { Box, Group, AppShell, MantineProvider, Skeleton } from "@mantine/core";
import Dropbox from "./components/Dropbox";
import LeftNavbar from "./components/LeftNavbar";
import Footer from "./components/Footer";
import Viewport from "./components/Viewport";
import { useDisclosure } from "@mantine/hooks";
import LeftAssistNavbar from "@/app/components/LeftAssistNavbar";
import { useRef, useState } from "react";

export default function Home() {
	const [showUI, setShowUI] = useState(false);
	const [videoFile, setVideoFile] = useState<File | null>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleModalClose = () => {
		setShowUI(true);
	};

	const handleFileUpload = (file: File) => {
		setVideoFile(file);
	};
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
				<Dropbox
					onFileUpload={handleFileUpload}
					onModalClose={handleModalClose}
				/>

				<AppShell.Main>
					<Group
						style={{
							height: "100svh",
							display: "grid",
							gridTemplateColumns: "20rem 1fr",
							gridTemplateRows: "1fr auto",
							gap: 0,
						}}
					>
						<LeftAssistNavbar />
						{showUI && (
							<>
								<Viewport videoFile={videoFile} videoRef={videoRef}  />
								<Footer videoFile={videoFile} videoRef={videoRef} />
							</>
						)}
					</Group>
				</AppShell.Main>
			</AppShell>
		</MantineProvider>
	);
}
