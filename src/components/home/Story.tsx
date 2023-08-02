import { Stack, ActionIcon, Group } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import AvatarImage from '../AvatarImage';
import routes from '@/utils/routes';

type StoryCircleProps = {
  index: number;
  isMe?: boolean;
};
function StoryCircle({ index, isMe = false }: StoryCircleProps) {
  return (
    <Stack spacing="xs">
      <div className="h-16 relative flex flex-col items-center justify-center">
        <Link href={routes.stories('zeffry-reynando', '123')}>
          <AvatarImage
            className={!isMe ? 'border-[3px] border-solid border-pink-700' : ''}
            size="lg"
            src={`https://picsum.photos/seed/${index}/200`}
          />
        </Link>
        {isMe && (
          <div className="absolute bottom-0 right-0 rounded-full border-[1px] border-solid border-white bg-sky-500">
            <ActionIcon size="xs">
              <IconPlus size="1rem" color="white" />
            </ActionIcon>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="text-center text-xs  line-clamp-1 text-ellipsis ">{isMe ? 'Your Story' : 'Username'}</div>
      </div>
    </Stack>
  );
}

StoryCircle.defaultProps = {
  isMe: false,
};

function Story() {
  const dummy = Array.from({ length: 100 });
  return (
    <div className="overflow-x-auto px-5 py-2 shadow-md">
      <Group spacing="md" noWrap>
        <StoryCircle key="1" index={0} isMe />
        {dummy.map((_, index) => {
          const randomKey = Math.random().toString(36).substring(7);
          return <StoryCircle key={randomKey} index={index} />;
        })}
      </Group>
    </div>
  );
}

export default Story;
