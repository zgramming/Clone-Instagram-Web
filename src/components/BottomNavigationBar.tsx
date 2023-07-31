import { ActionIcon, Avatar } from '@mantine/core';
import { IconHome2, IconSearch, IconMessageCircle, IconDeviceTv } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import routes from '@/utils/routes';

function BottomNavigationBar() {
  const { push } = useRouter();
  const onClick = (path: string) => {
    // Shallow routing
    push(path);
  };

  return (
    <div
      className={`
    fixed bottom-0 left-0 w-full h-14 flex flex-row justify-between items-center bg-white shadow-md px-10
    `}
    >
      <ActionIcon onClick={() => onClick(routes.home)}>
        <IconHome2 size="2rem" />
      </ActionIcon>
      <ActionIcon onClick={() => onClick(routes.explore)}>
        <IconSearch size="2rem" />
      </ActionIcon>
      <ActionIcon onClick={() => onClick(routes.reels)}>
        <IconDeviceTv size="2rem" />
      </ActionIcon>
      <ActionIcon onClick={() => onClick(routes.directInbox)}>
        <IconMessageCircle size="2rem" />
      </ActionIcon>
      <Avatar
        src="https://picsum.photos/seed/1/200"
        size="sm"
        radius="xl"
        onClick={() => onClick(routes.profile('/zeffry-reynando'))}
      />
    </div>
  );
}

export default BottomNavigationBar;
