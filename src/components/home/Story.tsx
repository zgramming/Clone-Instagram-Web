import { Stack, ActionIcon, Group } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import AvatarImage from '../AvatarImage';

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

export default Story;
