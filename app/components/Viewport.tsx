import {
	Box,
	Group,
	Button,
	Stack,
	Center,
	Text,
	Container,
	Paper,
} from "@mantine/core";
import { RefObject, useEffect } from "react";

interface ViewportProps {
	videoFile: File | null;
	videoRef: RefObject<HTMLVideoElement>;
}

export default function Viewport({ videoFile, videoRef }: ViewportProps) {
	useEffect(() => {
		console.log(
			"🚀 ~ useEffect ~ videoRef.current?.currentTime:",
			videoRef.current?.currentTime
		);
	}, [videoRef.current?.currentTime]);

	return (
		<Stack
			gap={0}
			mt="md"
			mx="md"
			my="md"
		>
			<Group mb="xs">
				<Button variant="outline">Landscape</Button>
				<Button variant="outline">Background</Button>
			</Group>
			<Box
				style={{
					width: "100%",
					height: 450,
					backgroundColor: "black",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{" "}
				{videoFile ? (
					<video
						ref={videoRef}
						controls
						style={{
							display: "flex",
							height: "100%",
							objectFit: "contain",
						}}
					>
						<source
							src={URL.createObjectURL(videoFile)}
							type="video/mp4"
						/>
					</video>
				) : (
					<Center>
						<Text size="xl">Video/Audio Viewport</Text>
					</Center>
				)}
			</Box>
			<Group
				justify="center"
				mt="md"
			>
				<Button variant="outline">Add media to this project</Button>
			</Group>
		</Stack>
	);
}
