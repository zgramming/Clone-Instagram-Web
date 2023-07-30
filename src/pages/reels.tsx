/* eslint-disable jsx-a11y/media-has-caption */
import { Carousel } from '@mantine/carousel';
import { Avatar, Grid } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { IconVolume, IconVolume3 } from '@tabler/icons-react';
import LayoutBottomOrSideNavigation from '@/components/LayoutBottomOrSideNavigation';
import ReelsCaption from '@/components/reels/ReelsCaption';
import ReelsActions from '@/components/reels/ReelsActions';
import useLongPressed from '@/hooks/use_long_press';

type ReelsItemProps = {
  url: string;
  currentVideoIndex: number;
  index: number;
};
function ReelsItem({ url, currentVideoIndex = 0, index = 0 }: ReelsItemProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const { isLongPressed, onMouseDown, onMouseUp } = useLongPressed({});

  const [toggleMute, setToggleMute] = useState({
    isMuted: true,
    component: <IconVolume3 />,
    showComponent: false,
  });

  const onVideoClick = () => {
    // Don't trigger when long pressed mouse up

    const refCurrent = ref.current;
    if (refCurrent) {
      // Check if video is muted
      if (refCurrent.muted) {
        refCurrent.muted = false;

        // Unmute video
        setToggleMute((prevState) => ({
          ...prevState,
          isMuted: false,
          component: <IconVolume color="black" size={40} />,
          showComponent: true,
        }));

        // Hide the component after 1 seconds
        setTimeout(() => {
          setToggleMute((prevState) => ({
            ...prevState,
            showComponent: false,
          }));
        }, 1000);
      } else {
        refCurrent.muted = true;

        // Mute video
        setToggleMute((prevState) => ({
          ...prevState,
          isMuted: true,
          component: <IconVolume3 color="black" size={40} />,
          showComponent: true,
        }));

        // Hide the component after 1 seconds
        setTimeout(() => {
          setToggleMute((prevState) => ({
            ...prevState,
            showComponent: false,
          }));
        }, 1000);
      }
    }
  };

  // Play or pause automatically based on currentVideoIndex and index
  useEffect(() => {
    const refCurrent = ref.current;
    if (refCurrent) {
      // Play if current video index is the same as this video index
      if (currentVideoIndex === index) {
        refCurrent.play();
      } else {
        refCurrent.pause();
      }
    }
    return () => {};
  }, [currentVideoIndex, index]);

  // Detect if video is ended and play it again
  useEffect(() => {
    const refCurrent = ref.current;
    if (refCurrent) {
      const endedListener = () => {
        // Play it again
        refCurrent.play();
      };

      refCurrent.addEventListener('ended', endedListener);

      // Cleanup event listener when component unmount
      return () => {
        refCurrent.removeEventListener('ended', endedListener);
      };
    }
    return () => {};
  }, []);

  // Detect if video is long pressed and pause it
  useEffect(() => {
    const refCurrent = ref.current;
    if (refCurrent) {
      if (isLongPressed && currentVideoIndex === index) {
        refCurrent.pause();
      }

      if (!isLongPressed && currentVideoIndex === index) {
        refCurrent.play();
      }
    }
    return () => {};
  }, [currentVideoIndex, index, isLongPressed]);

  return (
    <>
      <div className="relative h-full w-full" role="presentation" onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
        <video
          ref={ref}
          height="100%"
          width="100%"
          style={{
            objectFit: 'cover',
          }}
          onClick={onVideoClick}
        >
          <source src={url} type="video/mp4" />
        </video>
      </div>
      <div className="absolute bottom-0 left-0 right-0 my-5 ml-5 mr-20">
        <Grid align="flex-end">
          <Grid.Col span={12}>
            <ReelsCaption image="https://picsum.photos/seed/1/200/300" />
          </Grid.Col>
        </Grid>
      </div>

      <div className="absolute bottom-0 right-0 p-5 ">
        <ReelsActions image="https://picsum.photos/seed/6/200/300" />
      </div>

      <div className="absolute top-[45%] left-[45%]">
        {toggleMute.showComponent && (
          <Avatar radius="xl" size="lg" color="gray">
            {toggleMute.component}
          </Avatar>
        )}
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
