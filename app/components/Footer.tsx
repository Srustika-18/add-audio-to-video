import { Group, ActionIcon, Box, Slider, Mark, Center } from "@mantine/core";
import {
	IconPlayerPlay,
	IconPlayerPause,
	IconPlayerTrackNext,
	IconPlayerTrackPrev,
} from "@tabler/icons-react";

export default function Footer() {
	return (
		<Group
			align="center"
			mt="md"
			p="md"
			style={{
				gridColumn: "1/3",
			}}
		>
			<Group gap="xs">
				<ActionIcon>
					<IconPlayerTrackPrev size={16} />
				</ActionIcon>
				<ActionIcon>
					<IconPlayerPlay size={16} />
				</ActionIcon>
				<ActionIcon>
					<IconPlayerPause size={16} />
				</ActionIcon>
				<ActionIcon>
					<IconPlayerTrackNext size={16} />
				</ActionIcon>
			</Group>

			<Box style={{ width: "80%" }}>
				<Slider
					marks={[
						{ value: 10, label: "10s" },
						{ value: 20, label: "20s" },
						{ value: 30, label: "30s" },
						{ value: 40, label: "40s" },
						{ value: 50, label: "50s" },
					]}
				/>
			</Box>

			<Center>
				<Box mr="md">00:00.0</Box>
				<Box>/ 01:00.0</Box>
			</Center>
		</Group>
	);
}
