import {
	Group,
	ActionIcon,
	Box,
	Slider,
	Mark,
	Center,
	RangeSlider,
} from "@mantine/core";
import {
	IconPlayerPlay,
	IconPlayerPause,
	IconPlayerTrackNext,
	IconPlayerTrackPrev,
} from "@tabler/icons-react";
import { RefObject, useEffect, useRef, useState } from "react";

interface FooterProps {
	videoFile: File | null;
	videoRef: RefObject<HTMLVideoElement>;
}

export default function Footer({ videoFile, videoRef }: FooterProps) {
	const [duration, setDuration] = useState<number | null>(null);
	const timelineRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (videoFile) {
			const videoURL = URL.createObjectURL(videoFile);
			if (videoRef.current) {
				videoRef.current.src = videoURL;
				videoRef.current.onloadedmetadata = () => {
					if (videoRef.current) {
						setDuration(videoRef.current.duration);
					}
				};
			}
		}
	}, [videoFile]);

	function handleTimelineChange(e: number[]) {
		if (videoRef.current) {
			videoRef.current.currentTime = e[0];
			console.log(
				"🚀 ~ handleTimelineChange ~ videoRef.current.currentTime:",
				videoRef.current.currentTime
			);
		}
	}

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
				<RangeSlider
					ref={timelineRef}
					minRange={1}
					min={0}
					max={duration || 1}
					step={0.05}
					onChange={handleTimelineChange}
					// defaultValue={[0.1245, 0.5535]}
				/>
				<video
					ref={videoRef}
					style={{ display: "none" }}
				/>
			</Box>

			<Center>
				<Box mr="md">00:00.0</Box>
				<Box>
					{videoFile &&
						`/ ${Math.floor(videoFile.size / 1024 / 1024)} MB`}
				</Box>
			</Center>
		</Group>
	);
}
