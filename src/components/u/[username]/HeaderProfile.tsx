import { ActionIcon } from '@mantine/core';
import { IconSettings, IconUserPlus } from '@tabler/icons-react';

type HeaderProfileProps = {
  isMe: boolean;
};
function HeaderProfile({ isMe }: HeaderProfileProps) {
  return (
    <div className="h-14 shadow-sm px-5">
      <div className="flex flex-row items-center justify-between h-full">
        <ActionIcon>
          <IconSettings color="black" />
        </ActionIcon>
        <div className="text-center text-base font-bold">Zeffry Reynando</div>
        <ActionIcon>
          <IconUserPlus color="black" />
        </ActionIcon>
      </div>
    </div>
  );
}

export default HeaderProfile;
