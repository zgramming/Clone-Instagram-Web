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
        <img alt="avatar img" src={src} />
      </Avatar>
    </div>
  );
}

AvatarImage.defaultProps = {
  className: '',
  src: 'https://picsum.photos/seed/picsum/200',
  size: undefined,
};

export default AvatarImage;
