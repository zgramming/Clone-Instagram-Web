import { ActionIcon, Avatar, ScrollArea, Stack, TextInput } from '@mantine/core';
import { IconArrowLeft, IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import LayoutBottomOrSideNavigation from '@/components/LayoutBottomOrSideNavigation';
import routes from '@/utils/routes';

type HeaderInboxNewProps = {
  onSearch: (query: string) => void;
};
function HeaderInboxNew({ onSearch }: HeaderInboxNewProps) {
  const { back } = useRouter();

  return (
    <Stack spacing="md" className="">
      <div className="h-14 flex flex-row items-center justify-between shadow-sm px-5">
        <ActionIcon onClick={back}>
          <IconArrowLeft color="black" />
        </ActionIcon>
        <div className="text-center text-xl font-bold">New Message</div>
        {/* Empty Element */}
        <div className="px-3" />
      </div>

      <TextInput
        placeholder="Search"
        icon={<IconSearch size="0.8rem" />}
        onChange={(event) => {
          onSearch(event.currentTarget.value);
        }}
      />
    </Stack>
  );
}

type InboxNewListItemProps = {
  index: number;
};
function InboxNewListItem({ index }: InboxNewListItemProps) {
  const { push } = useRouter();
  const onClick = () => {
    push(routes.directThread(`${index}`));
  };
  return (
    <div
      className={`
        flex flex-row items-center gap-3 px-5
        active:bg-gray-100 hover:bg-gray-100
    `}
      onClick={onClick}
      role="presentation"
    >
      <Avatar size="lg" radius="xl" src="https://i.pravatar.cc/300" />
      <div className="flex flex-col gap-1">
        <div className="font-medium">Zeffry Reynando</div>
        <div className="text-sm text-gray-500">Active 1h ago</div>
      </div>
    </div>
  );
}

function InboxNewList() {
  const dummy = Array.from(Array(100).keys());

  return (
    <div className="h-[calc(100vh-3.5rem-3.5rem)]">
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-3">
          {dummy.map((i) => (
            <InboxNewListItem index={i} />
          ))}
        </div>
        <div className="pb-32" />
      </ScrollArea>
    </div>
  );
}

function Page() {
  const onSearch = (query: string) => {
    console.log(query);
  };

  return (
    <Stack spacing="md">
      <HeaderInboxNew onSearch={onSearch} />
      <InboxNewList />
    </Stack>
  );
}

Page.getLayout = function getLayout(page: any) {
  return <LayoutBottomOrSideNavigation>{page}</LayoutBottomOrSideNavigation>;
};

export default Page;
