import { ActionIcon, AspectRatio, Avatar, Group, MantineNumberSize, Stack } from '@mantine/core';
import {
  IconBookmark,
  IconBrowser,
  IconDots,
  IconHeart,
  IconHome,
  IconHome2,
  IconMessageCircle,
  IconPhoto,
  IconPlus,
  IconSearch,
  IconSend,
  IconSquareRoundedPlus,
  IconVideo,
} from '@tabler/icons-react';
import Image from 'next/image';

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

function Posts() {
  return (
    <Stack spacing={'xs'} className="pb-52">
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
      <AspectRatio ratio={1 / 1}>
        <Image
          alt="Image / Video Post"
          src={'https://picsum.photos/seed/1/200'}
          style={{
            objectFit: 'cover',
          }}
          fill
        />
      </AspectRatio>
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
    <div className="relative">
      <Stack spacing={'xs'} className="relative">
        <NavigationBar />
        <Story />
        <Posts />
      </Stack>
      <BottomNavigationBar />
    </div>
  );
}
