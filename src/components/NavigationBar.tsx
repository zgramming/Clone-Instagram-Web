import { Group, ActionIcon } from '@mantine/core';
import { IconSquareRoundedPlus, IconHeart } from '@tabler/icons-react';

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

export default NavigationBar;
