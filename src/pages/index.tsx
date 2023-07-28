import { Carousel } from '@mantine/carousel';
import { ActionIcon, AspectRatio, Avatar, Group, MantineNumberSize, Stack } from '@mantine/core';
import {
  IconBookmark,
  IconBrowser,
  IconDots,
  IconHeart,
  IconHome2,
  IconMessageCircle,
  IconPlayerPlayFilled,
  IconPlus,
  IconSearch,
  IconSend,
  IconSquareRoundedPlus,
  IconVolume,
  IconVolume3,
} from '@tabler/icons-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function NavigationBar() {
  return (
    <div className="h-14 flex flex-row justify-between items-center bg-white shadow-md px-5">
      <div className="font-bold text-xl">INSTACLONE</div>
      <Group>
        <ActionIcon>
          <IconSquareRoundedPlus size="2rem" />
        </ActionIcon>
        <ActionIcon>
          <IconHeart size="2rem" />
        </ActionIcon>
      </Group>
    </div>
  );
}

type AvatarImageProps = {
  className?: string;
  src?: string;
  size?: MantineNumberSize;
};
function AvatarImage({ className = '', src = 'https://picsum.photos/seed/picsum/200', size }: AvatarImageProps) {
  return (
    <div className={`rounded-full ${className}`}>
      <Avatar radius="xl" size={size}>
        <img src={src} />
      </Avatar>
    </div>
  );
}

function StoryCircle({ index, isMe = false }: { index: number; isMe?: boolean }) {
  return (
    <Stack spacing={'xs'}>
      <div className="h-16 relative flex flex-col items-center justify-center">
        <AvatarImage
          className={`${!isMe && 'border-[3px] border-solid border-pink-700'}`}
          size={'lg'}
          src={`https://picsum.photos/seed/${index}/200`}
        />
        {isMe && (
          <div className="absolute bottom-0 right-0 rounded-full border-[1px] border-solid border-white bg-sky-500">
            <ActionIcon size={'xs'}>
              <IconPlus size="1rem" color="white" />
            </ActionIcon>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="text-center text-xs  line-clamp-1 text-ellipsis ">
          {isMe ? 'Your Story asdasdad' : 'Username'}
        </div>
      </div>
    </Stack>
  );
}

function Story() {
  const dummy = Array.from({ length: 100 });
  return (
    <div className="overflow-x-auto px-5 py-2 shadow-md">
      <Group spacing={'md'} noWrap>
        <StoryCircle index={0} isMe />
        {dummy.map((_, index) => (
          <StoryCircle index={index} />
        ))}
      </Group>
    </div>
  );
}

function PostItemContentImage({ urls }: { urls: string[] }) {
  const isMoreThanOne = urls.length > 1;

  if (isMoreThanOne) {
    return (
      <div className="relative">
        <AspectRatio ratio={1 / 1}>
          <Carousel withIndicators>
            {urls.map((url) => (
              <Carousel.Slide key={url}>
                <img height={'100%'} width={'100%'} alt="Image / Video Post" src={url} />
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
    if (ref.current) {
      ref.current.addEventListener('ended', () => {
        // Play it again
        ref.current?.play();
      });
    }
    return () => {
      ref.current?.removeEventListener('ended', () => {});
    };
  }, []);

  return (
    <div className="relative">
      <video ref={ref} height={'100%'} width={'100%'} onClick={onClick}>
        <source src={url} type="video/mp4" />
      </video>

      <div className="absolute left-[45%] top-[40%]">
        {
          // Show play icon if video is not playing
          !isPlaying && <IconPlayerPlayFilled size="4rem" color="white" className="text-white" onClick={onClick} />
        }
      </div>

      <div className="absolute bottom-5 right-5 rounded-full bg-gray-700 ">
        <ActionIcon size={'xs'} onClick={onMute} className="hover:bg-gray-700">
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
  } else {
    return (
      <AspectRatio ratio={16 / 9}>
        <PostItemContentVideoItem url={urls[0]} />
      </AspectRatio>
    );
  }
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
  // const dummyImageURL = ['https://picsum.photos/seed/1/200'];

  const src = type === 'image' ? dummyImageURL : dummyVideoURL;
  return (
    <Stack spacing={'xs'} className="pb-5">
      <div className="flex flex-row items-center px-5">
        <div className="flex flex-row items-center gap-3">
          <AvatarImage
            className={'border-[3px] border-solid border-pink-700'}
            src={`https://picsum.photos/seed/1/200`}
          />
          <div className="text-sm font-medium">Username</div>
        </div>
        <div className="grow flex justify-end">
          <ActionIcon>
            <IconDots size="1.5rem" color="black" />
          </ActionIcon>
        </div>
      </div>
      {type === 'image' ? <PostItemContentImage urls={dummyImageURL} /> : <PostItemContentVideo urls={src} />}
      <Stack spacing={'xs'} className="px-5 py-1">
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
          <span className="font-medium">Username</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cupiditate natus saepe illum dolore assumenda tenetur porro omnis, in hic dolores, minus voluptate optio non?
          Sed commodi beatae accusamus voluptatum fugiat!
        </div>
        <div className="text-xs text-gray-500">View all 100 comments</div>
        <div className="text-xs text-gray-500">2 hours ago</div>
      </Stack>
    </Stack>
  );
}

function Posts() {
  const dummy = Array.from({ length: 3 });
  return (
    <>
      {dummy.map((_, index) => {
        let type = index % 2 === 0 ? 'image' : ('video' as 'image' | 'video');
        return <PostItem type={type} />;
      })}
    </>
  );
}

function BottomNavigationBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-14 flex flex-row justify-between items-center bg-white shadow-md px-10">
      <ActionIcon>
        <IconHome2 size="2rem" />
      </ActionIcon>
      <ActionIcon>
        <IconSearch size="2rem" />
      </ActionIcon>
      <ActionIcon>
        <IconBrowser size="2rem" />
      </ActionIcon>
      <ActionIcon>
        <IconMessageCircle size="2rem" />
      </ActionIcon>
      <Avatar src={'https://picsum.photos/seed/1/200'} size={'sm'} radius={'xl'}></Avatar>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative pb-32">
      <Stack spacing={'xs'} className="relative">
        <NavigationBar />
        <Story />
        <Posts />
      </Stack>
      <BottomNavigationBar />
    </div>
  );
}
