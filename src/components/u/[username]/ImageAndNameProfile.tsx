import { Button } from '@mantine/core';

type ImageAndNameProfileProps = {
  isMe: boolean;
};
function ImageAndNameProfile({ isMe }: ImageAndNameProfileProps) {
  return (
    <div className="flex flex-row items-center gap-5 px-5">
      <div className="h-20 w-20 rounded-full shadow-sm bg-red-400">
        <img alt="profile" src="https://i.pravatar.cc/300" className="h-full w-full object-cover rounded-full" />
      </div>
      <div className="grow flex flex-col gap-3">
        <div className="font-medium text-lg">zeffry_reynando</div>
        <Button variant="default" color="blue">
          Edit Profile
        </Button>
      </div>
    </div>
  );
}

export default ImageAndNameProfile;
