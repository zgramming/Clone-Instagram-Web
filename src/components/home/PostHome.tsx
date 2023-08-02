/* eslint-disable jsx-a11y/media-has-caption */
import { Carousel } from '@mantine/carousel';
import { AspectRatio, ActionIcon, Stack } from '@mantine/core';
import {
  IconPlayerPlayFilled,
  IconVolume3,
  IconVolume,
  IconDots,
  IconHeart,
  IconMessageCircle,
  IconSend,
  IconBookmark,
} from '@tabler/icons-react';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import AvatarImage from '../AvatarImage';

function PostItemContentImage({ urls }: { urls: string[] }) {
  const isMoreThanOne = urls.length > 1;

  if (isMoreThanOne) {
    return (
      <div className="relative">
        <AspectRatio ratio={1 / 1}>
          <Carousel withIndicators>
            {urls.map((url) => (
              <Carousel.Slide key={url}>
                <img height="100%" width="100%" alt="Post" src={url} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </AspectRatio>
      </div>
    );
  }

  return (
    <AspectRatio ratio={1 / 1}>
      <Image
        alt="Image / Video Post"
        src={urls[0]}
        layout="fill"
        style={{
          objectFit: 'cover',
        }}
      />
    </AspectRatio>
  );
}

function PostItemContentVideoItem({ url }: { url: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const onClick = () => {
    // Toggle Play and pause
    if (ref.current) {
      if (ref.current.paused) {
        // Set isPlaying to true
        setIsPlaying(true);
        ref.current.play();
      } else {
        // Set isPlaying to false
        setIsPlaying(false);
        ref.current.pause();
      }
    }
  };

  const onMute = () => {
    if (ref.current) {
      if (ref.current.muted) {
        setIsMuted(false);
        ref.current.muted = false;
      } else {
        setIsMuted(true);
        ref.current.muted = true;
      }
    }
  };

  // Detect if video has ended
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

  return (
    <div className="relative">
      <video ref={ref} height="100%" width="100%" onClick={onClick}>
        <source src={url} type="video/mp4" />
      </video>

      <div className="absolute left-[45%] top-[40%]">
        {
          // Show play icon if video is not playing
          !isPlaying && <IconPlayerPlayFilled size="4rem" color="white" className="text-white" onClick={onClick} />
        }
      </div>

      <div className="absolute bottom-5 right-5 rounded-full bg-gray-700 ">
        <ActionIcon size="xs" onClick={onMute} className="hover:bg-gray-700">
          {isMuted ? <IconVolume3 size="1rem" color="white" /> : <IconVolume size="1rem" color="white" />}
        </ActionIcon>
      </div>
    </div>
  );
}

function PostItemContentVideo({ urls }: { urls: string[] }) {
  const isMoreThanOne = urls.length > 1;

  if (isMoreThanOne) {
    return (
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <Carousel withIndicators>
            {urls.map((url) => (
              <Carousel.Slide key={url}>
                <PostItemContentVideoItem url={url} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </AspectRatio>
      </div>
    );
  }
  return (
    <AspectRatio ratio={16 / 9}>
      <PostItemContentVideoItem url={urls[0]} />
    </AspectRatio>
  );
}

function PostItemHeader() {
  return (
    <div className="flex flex-row items-center px-5">
      <div className="flex flex-row items-center gap-3">
        <AvatarImage
          className="border-[3px] border-solid border-pink-700"
          src="https://picsum.photos/seed/1/200"
          size="md"
        />
        <div className="text-sm font-medium">Username</div>
      </div>
      <div className="grow flex justify-end">
        <ActionIcon>
          <IconDots size="1.5rem" color="black" />
        </ActionIcon>
      </div>
    </div>
  );
}

function PostItem({ type }: { type: 'image' | 'video' }) {
  const dummyVideoURL = [
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
  ];
  const dummyImageURL = [
    'https://picsum.photos/seed/1/200',
    'https://picsum.photos/seed/2/200',
    'https://picsum.photos/seed/3/200',
    'https://picsum.photos/seed/4/200',
    'https://picsum.photos/seed/5/200',
  ];

  const src = type === 'image' ? dummyImageURL : dummyVideoURL;
  return (
    <Stack spacing="xs" className="pb-5">
      <PostItemHeader />
      {type === 'image' ? <PostItemContentImage urls={dummyImageURL} /> : <PostItemContentVideo urls={src} />}
      <Stack spacing="xs" className="px-5 py-1">
        <div className="flex flex-row items-center">
          <div className="grow flex flex-row items-center gap-4">
            <ActionIcon>
              <IconHeart size="2rem" color="black" />
            </ActionIcon>
            <ActionIcon>
              <IconMessageCircle size="2rem" color="black" />
            </ActionIcon>
            <ActionIcon>
              <IconSend size="2rem" color="black" />
            </ActionIcon>
          </div>
          <div>
            <ActionIcon>
              <IconBookmark size="2rem" color="black" />
            </ActionIcon>
          </div>
        </div>
        <div className="text-base font-medium">100 likes</div>
        <div className="text-sm">
          <span className="font-medium">Username</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus saepe illum dolore assumenda tenetur
          porro omnis, in hic dolores, minus voluptate optio non? Sed commodi beatae accusamus voluptatum fugiat!
        </div>
        <div className="text-xs text-gray-500">View all 100 comments</div>
        <div className="text-xs text-gray-500">2 hours ago</div>
      </Stack>
    </Stack>
  );
}

function PostsHome() {
  const dummy = Array.from({ length: 3 });
  return (
    <>
      {dummy.map((_, index) => {
        const type = index % 2 === 0 ? 'image' : ('video' as 'image' | 'video');
        const randomKey = Math.random().toString(36).substring(7);
        return <PostItem key={randomKey} type={type} />;
      })}
    </>
  );
}

export default PostsHome;
