import { MantineNumberSize, Avatar } from '@mantine/core';

type AvatarImageProps = {
  className?: string;
  src?: string;
  size?: MantineNumberSize;
};
function AvatarImage({ className = '', src = 'https://picsum.photos/seed/picsum/200', size }: AvatarImageProps) {
  return (
    <div className={`rounded-full ${className}`}>
      <Avatar radius="xl" size={size}>
        <img src={src} />
      </Avatar>
    </div>
  );
}

export default AvatarImage;
