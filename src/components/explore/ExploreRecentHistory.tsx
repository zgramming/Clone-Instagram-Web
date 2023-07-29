import { Stack, ActionIcon, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconX } from '@tabler/icons-react';
import AvatarImage from '../AvatarImage';

const ExploreRecentHistoryItem = ({ index }: { index: number }) => {
  return (
    <div key={index} className={`flex flex-row items-center gap-3 px-5 active:bg-gray-300`}>
      <AvatarImage size="sm" />
      <Stack spacing={0} className="grow">
        <div className="text-sm font-semibold">Username</div>
        <div className="text-sm text-gray-500">Recent search</div>
      </Stack>
      <ActionIcon>
        <IconX size="1.2rem" />
      </ActionIcon>
    </div>
  );
};

const ExploreRecentHistory = () => {
  const dummy = Array.from({ length: 10 }).map((_, i) => i);

  const openModalClearHistory = () =>
    modals.openConfirmModal({
      centered: true,
      title: 'Clear search history ?',
      children: (
        <Text size="sm">
          You won't be able to undo this. Your search history will be cleared from <b>InstaClone</b>.
        </Text>
      ),
      labels: { confirm: 'Clear All', cancel: 'Not Now' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  return (
    <Stack spacing={'md'}>
      <div className="flex flex-row justify-between items-center px-5">
        <div className="text-lg font-semibold">Recent</div>
        <div className="text-sm text-gray-500" onClick={openModalClearHistory}>
          Clear all
        </div>
      </div>

      <Stack spacing={'xs'}>
        {dummy.map((_, i) => {
          return <ExploreRecentHistoryItem index={i} />;
        })}
      </Stack>
    </Stack>
  );
};

export default ExploreRecentHistory;
