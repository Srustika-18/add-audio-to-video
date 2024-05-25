import { NavLink, Box, Group, Anchor, Text, ScrollArea } from "@mantine/core";
import {
	IconUpload,
	IconBrandInstagram,
	IconSpeakerphone,
	IconMusic,
} from "@tabler/icons-react";

export default function LeftNavbar() {
	return (
		<Box style={{ width: 300 }}>
			<NavLink
				label="Upload a File"
				leftSection={<IconUpload size={16} />}
				childrenOffset={28}
				defaultOpened
			>
				<ScrollArea offsetScrollbars>
					<Anchor
						component="a"
						href="#"
					>
						<Group gap="xs">
							<IconUpload size={16} />
							<Text>Drag & drop a file</Text>
						</Group>
					</Anchor>
					<Anchor
						component="a"
						href="#"
					>
						<Group gap="xs">
							<IconUpload size={16} />
							<Text>Import from a link</Text>
						</Group>
					</Anchor>
				</ScrollArea>
			</NavLink>
			<NavLink
				label="Brand Kit"
				leftSection={<IconBrandInstagram size={16} />}
				childrenOffset={28}
			/>
			<NavLink
				label="Text To Speech"
				leftSection={<IconSpeakerphone size={16} />}
				childrenOffset={28}
			/>
			<NavLink
				label="Voice Clone"
				leftSection={<IconMusic size={16} />}
				childrenOffset={28}
			/>
			<Box mt="md">AI Avatars</Box>
			{/* Render AI Avatars */}
		</Box>
	);
}
