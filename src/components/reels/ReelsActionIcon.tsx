import { Stack, Text } from '@mantine/core';
import { IconMessageCircle } from '@tabler/icons-react';
import { formattedNumberReels } from '@/utils/functions';

type ReelsActionIconProps = {
  icon?: React.ReactNode;
  count?: number;
  showCount?: boolean;
  onClick?: () => void;
};
function ReelsActionIcon({
  icon = <IconMessageCircle size={24} color="white" />,
  count = 1,
  onClick,
  showCount = true,
}: ReelsActionIconProps) {
  return (
    <Stack spacing={2} align="center" onClick={onClick}>
      {icon}
      <Text size="sm" weight={500} color="white">
        {showCount && (formattedNumberReels(count) || 0)}
      </Text>
    </Stack>
  );
}

ReelsActionIcon.defaultProps = {
  icon: <IconMessageCircle size={24} color="white" />,
  count: 0,
  showCount: true,
  onClick: () => {},
};

export default ReelsActionIcon;
