/* eslint-disable jsx-a11y/media-has-caption */
import { Carousel } from '@mantine/carousel';
import { Avatar, Grid, Stack, Text } from '@mantine/core';
import { IconDots, IconHeart, IconMessageCircle, IconSend } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import LayoutBottomOrSideNavigation from '@/components/LayoutBottomOrSideNavigation';
import { formattedNumberReels } from '@/utils/functions';

type ReelsActionIconProps = {
  icon?: React.ReactNode;
  count?: number;
  showCount?: boolean;
  onClick?: () => void;
};
function ReelsActionIcon({
  icon = <IconMessageCircle size={24} color="white" />,
  count = 1,
  onClick,
  showCount = true,
}: ReelsActionIconProps) {
  return (
    <Stack spacing={2} align="center" onClick={onClick}>
      {icon}
      <Text size="sm" weight={500} color="white">
        {showCount && (formattedNumberReels(count) || 0)}
      </Text>
    </Stack>
  );
}

ReelsActionIcon.defaultProps = {
  icon: <IconMessageCircle size={24} color="white" />,
  count: 0,
  showCount: true,
  onClick: () => {},
};

type ReelsActionProps = {
  image: string;
};
function ReelsAction({ image }: ReelsActionProps) {
  return (
    <Stack spacing="md" align="center">
      <ReelsActionIcon icon={<IconHeart size={24} color="white" />} count={12500} />
      <ReelsActionIcon count={384} />
      <ReelsActionIcon showCount={false} icon={<IconSend size={24} color="white" />} />
      <ReelsActionIcon showCount={false} icon={<IconDots size={24} color="white" />} />
      <Avatar src={image} radius="md" size="sm" />
    </Stack>
  );
}

type ReelsCaptionProps = {
  image: string;
};
function ReelsCaption({ image }: ReelsCaptionProps) {
  return (
    <Stack spacing="md">
      <div className="flex flex-row items-center gap-3">
        <Avatar src={image} radius="xl" size="sm" />
        <div className="text-white text-sm font-semibold">Zainal Abidin</div>
      </div>
      <Text size="sm" weight={500} color="white" className="line-clamp-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam, voluptatum.
      </Text>
    </Stack>
  );
}

type ReelsItemProps = {
  url: string;
  currentVideoIndex: number;
  index: number;
};
function ReelsItem({ url, currentVideoIndex = 0, index = 0 }: ReelsItemProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      // Play if current video index is the same as this video index
      if (currentVideoIndex === index) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
    return () => {};
  }, []);

  return (
    <>
      <div className="relative h-full w-full">
        <video
          ref={ref}
          height="100%"
          width="100%"
          style={{
            objectFit: 'cover',
          }}
        >
          <source src={url} type="video/mp4" />
        </video>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <Grid columns={24} align="flex-end">
          <Grid.Col span={20}>
            <ReelsCaption image="https://picsum.photos/seed/1/200/300" />
          </Grid.Col>
          <Grid.Col span={4}>
            <ReelsAction image="https://picsum.photos/seed/6/200/300" />
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}

export default function Page() {
  const dummyVideoURL = [
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => () => {}, []);

  return (
    <Carousel
      withControls={false}
      withIndicators={false}
      height="calc(100vh - 3.5rem)"
      orientation="vertical"
      onSlideChange={setCurrentVideoIndex}
    >
      {dummyVideoURL.map((url, index) => (
        <Carousel.Slide className="relative">
          <ReelsItem currentVideoIndex={currentVideoIndex} index={index} url={url} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

Page.getLayout = function getLayout(page: any) {
  return <LayoutBottomOrSideNavigation>{page}</LayoutBottomOrSideNavigation>;
};
