import { Box, Group, Button, Stack, Center, Text } from "@mantine/core";

export default function Viewport() {
	return (
		<Stack
			gap={0}
			mt="md"
		>
			<Group mb="xs">
				<Button variant="outline">Landscape</Button>
				<Button variant="outline">Background</Button>
			</Group>
			<Box
				style={{
					width: 800,
					height: 450,
					backgroundColor: "black",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Center>
					<Text
						color="dimmed"
						size="xl"
					>
						Video/Audio Viewport
					</Text>
				</Center>
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
