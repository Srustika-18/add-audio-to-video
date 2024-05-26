import { Box, Button, Group, Modal, Text, rem } from "@mantine/core";
import { Dropzone, DropzoneProps } from "@mantine/dropzone";
import {
	IconUpload,
	IconPhoto,
	IconX,
	IconCloudUpload,
} from "@tabler/icons-react";
import { useState } from "react";

interface DropboxProps {
	onFileUpload: (file: File) => void;
	onModalClose: () => void;
}

export default function Dropbox({ onFileUpload, onModalClose }: DropboxProps) {
	const [opened, setOpened] = useState(true);

	const handleModalClose = () => {
		setOpened(false);
		onModalClose();
	};

	const handleFileUpload = (file: File) => {
		onFileUpload(file);
		handleModalClose();
	};

	return (
		<Modal
			opened={opened}
			onClose={() => setOpened(false)}
			centered
			radius={20}
			size={"60%"}
			overlayProps={{
				backgroundOpacity: 0.55,
				blur: 3,
			}}
		>
			<Group
				justify="center"
				mb={20}
			>
				<Text
					size="lg"
					style={{ fontWeight: "bold" }}
				>
					Add Audio to Video
				</Text>
			</Group>
			<Group justify="center">
				<Dropzone
					onDrop={(files) => handleFileUpload(files[0])}
					onReject={(files) => console.log("rejected files", files)}
					accept={{
						"video/*": [],
						"audio/*": [],
					}}
					w={"100%"}
				>
					<Group
						justify="center"
						gap="xl"
						mih={220}
						style={{ pointerEvents: "none" }}
					>
						{/* <Dropzone.Accept>
							<IconUpload
								style={{
									width: rem(52),
									height: rem(52),
									color: "var(--mantine-color-blue-6)",
								}}
								stroke={1.5}
							/>
						</Dropzone.Accept>
						<Dropzone.Reject>
							<IconX
								style={{
									width: rem(52),
									height: rem(52),
									color: "var(--mantine-color-red-6)",
								}}
								stroke={1.5}
							/>
						</Dropzone.Reject> */}
						<Dropzone.Idle>
							<Group
								style={{
									backgroundColor:
										"var(--mantine-color-indigo-light-color)",
									borderRadius: rem(8),
									paddingInline: rem(32),
									paddingBlock: rem(12),
									marginBlockEnd: rem(4),
								}}
								justify="center"
								align="center"
							>
								<IconCloudUpload
									style={{
										width: rem(20),
										height: rem(20),
										color: "var(--mantine-color-white)",
									}}
									stroke={1.5}
								/>
								<Text
									style={{
										color: "var(--mantine-color-white)",
									}}
								>
									Upload
								</Text>
							</Group>
							<Text
								size="sm"
								style={{
									color: "var(--mantine-color-dimmed)",
									textAlign: "center",
								}}
							>
								Drag or drop a file
							</Text>
						</Dropzone.Idle>
					</Group>
				</Dropzone>
			</Group>
			{/* <Group
				justify="center"
				mt="md"
			>
				<Button onClick={() => setOpened(false)}>
					Let's make a video!
				</Button>
			</Group> */}
		</Modal>
	);
}
