import { Stack, Avatar } from '@mantine/core';
import { IconHeart, IconSend, IconDots } from '@tabler/icons-react';
import ReelsActionIcon from './ReelsActionIcon';

type ReelsActionsProps = {
  image: string;
};
function ReelsActions({ image }: ReelsActionsProps) {
  return (
    <Stack spacing="md" align="center">
      <ReelsActionIcon icon={<IconHeart size={24} color="white" />} count={12500} />
      <ReelsActionIcon count={384} />
      <ReelsActionIcon showCount={false} icon={<IconSend size={24} color="white" />} />
      <ReelsActionIcon showCount={false} icon={<IconDots size={24} color="white" />} />
      <Avatar src={image} radius="md" size="sm" />
    </Stack>
  );
}

export default ReelsActions;
