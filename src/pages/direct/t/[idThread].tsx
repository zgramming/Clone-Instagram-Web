import { ActionIcon, Avatar, ScrollArea, Stack } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useRouter } from 'next/router';

function HeaderThread() {
  const { back } = useRouter();
  return (
    <div className="h-14 flex flex-row items-center justify-start gap-3 shadow-sm px-5">
      <ActionIcon onClick={back}>
        <IconArrowLeft color="black" />
      </ActionIcon>
      <div className="grow flex flex-row items-center gap-3">
        <Avatar size="sm" radius="xl" src="https://i.pravatar.cc/300" />
        <div className="text-base font-semibold">Zeffry Reynando</div>
      </div>
    </div>
  );
}

type ThreadListItemProps = {
  index: number;
};
function ThreadListItem({ index }: ThreadListItemProps) {
  const isMe = index % 2 === 0;

  if (isMe) {
    return (
      <div className="flex flex-row items-center justify-end ">
        <div className="max-w-[60vw] text-start text-sm rounded-xl p-2 bg-cyan-600 text-white ">
          Dateng bre, tapi ga tau mau berangkat kapan eui
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center justify-start ">
      <div className="max-w-[60vw] text-start text-sm rounded-xl p-2 bg-gray-200 text-black ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam saepe aut cum quod doloribus illo delectus, ea
        dolor, aliquid, tempore quaerat consequatur et! Quibusdam quasi autem quidem tenetur, laboriosam placeat.
      </div>
    </div>
  );
}

function ThreadList() {
  const dummy = Array.from(Array(100).keys());
  return (
    <div className="h-[calc(100vh-3.5rem)]">
      <ScrollArea className="h-full">
        <Stack spacing="md" className="h-full px-5">
          {dummy.map((i) => (
            <ThreadListItem index={i} />
          ))}
        </Stack>
      </ScrollArea>
    </div>
  );
}

function Page() {
  return (
    <Stack spacing="sm">
      <HeaderThread />
      <ThreadList />
    </Stack>
  );
}

export default Page;
