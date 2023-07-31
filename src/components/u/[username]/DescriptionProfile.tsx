import { IconLink } from '@tabler/icons-react';

type DescriptionProfileProps = {
  isMe: boolean;
};
function DescriptionProfile({ isMe }: DescriptionProfileProps) {
  return (
    <div className="flex flex-col px-5">
      <div className="font-semibold">Zeffry Reynando</div>
      <div className="text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias iusto itaque sit deserunt consequuntur
      </div>
      <div className="flex flex-row items-center gap-2">
        <IconLink size="1rem" />
        <div className="text-sm">
          <a
            href="
          https://www.instagram.com/zeffry_reynando/
          "
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold"
          >
            https://www.instagram.com/zeffry_reynando/
          </a>
        </div>
      </div>
    </div>
  );
}

export default DescriptionProfile;
