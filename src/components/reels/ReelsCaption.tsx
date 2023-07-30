import { Stack, Avatar, Text } from '@mantine/core';

type ReelsCaptionProps = {
  image: string;
};
function ReelsCaption({ image }: ReelsCaptionProps) {
  return (
    <Stack spacing="md">
      <div className="flex flex-row items-center gap-3">
        <Avatar src={image} radius="xl" size="sm" />
        <div className="text-white text-sm font-semibold">Zainal Abidin</div>
      </div>
      <Text size="sm" weight={500} color="white" className="line-clamp-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam, voluptatum.
      </Text>
    </Stack>
  );
}

export default ReelsCaption;
