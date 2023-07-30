import { ActionIcon, Avatar, ScrollArea, Stack } from '@mantine/core';
import { IconArrowLeft, IconMessageCirclePlus } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import LayoutBottomOrSideNavigation from '@/components/LayoutBottomOrSideNavigation';
import routes from '@/utils/routes';

function InboxHeader() {
  const { back, push } = useRouter();
  return (
    <Stack spacing="md" className="px-5">
      <div className="h-14 flex flex-row items-center justify-between shadow-sm">
        <ActionIcon onClick={back}>
          <IconArrowLeft color="black" />
        </ActionIcon>
        <div className="text-center text-xl font-bold">Zeffry Reynando</div>
        <ActionIcon onClick={() => push(routes.directInboxNew)}>
          <IconMessageCirclePlus color="black" />
        </ActionIcon>
      </div>

      <div className="font-bold">Messages</div>
    </Stack>
  );
}

function InboxList() {
  const dummy = Array.from(Array(100).keys());
  return (
    <div className="h-[calc(100vh-3.5rem-3.5rem)]">
      <ScrollArea className="h-full px-5">
        <div className="flex flex-col gap-3">
          {dummy.map(() => (
            <div className="flex flex-row items-center gap-3">
              <Avatar size="lg" radius="xl" src="https://i.pravatar.cc/300" />
              <div className="flex flex-col gap-1">
                <div className="font-medium">Zeffry Reynando</div>
                <div className="text-sm text-gray-500">Active 1h ago</div>
              </div>
            </div>
          ))}
        </div>
        <div className="pb-32" />
      </ScrollArea>
    </div>
  );
}

function Page() {
  return (
    <Stack spacing="md">
      <InboxHeader />
      <InboxList />
    </Stack>
  );
}

Page.getLayout = function getLayout(page: any) {
  return <LayoutBottomOrSideNavigation>{page}</LayoutBottomOrSideNavigation>;
};

export default Page;
