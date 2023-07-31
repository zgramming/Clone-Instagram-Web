import { ActionIcon } from '@mantine/core';
import { IconGridDots, IconBook2, IconBookmark, IconAddressBook } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import routes from '@/utils/routes';

type CategoryPostProfileProps = {
  currentSelectedTab: 'grid' | 'feed' | 'saved' | 'tagged';
};
function CategoryPostProfile({ currentSelectedTab }: CategoryPostProfileProps) {
  const { push } = useRouter();
  return (
    <div
      className={`
  flex flex-row items-center justify-between
  border-solid  border-0 border-t-2 border-b-2 border-gray-300 rounded-md
  shadow-sm
  gap-3 px-12 py-2
  `}
    >
      <ActionIcon
        onClick={() => {
          push(routes.profile('/zeffry-reynando'));
        }}
      >
        <IconGridDots size="2rem" color={currentSelectedTab === 'grid' ? 'blue' : undefined} />
      </ActionIcon>
      <ActionIcon
        onClick={() => {
          push(routes.profile('/zeffry-reynando/feed'), undefined, { shallow: true });
        }}
      >
        <IconBook2 size="2rem" color={currentSelectedTab === 'feed' ? 'blue' : undefined} />
      </ActionIcon>
      <ActionIcon
        onClick={() => {
          push(routes.profile('/zeffry-reynando/saved'), undefined, { shallow: true });
        }}
      >
        <IconBookmark size="2rem" color={currentSelectedTab === 'saved' ? 'blue' : undefined} />
      </ActionIcon>
      <ActionIcon
        onClick={() => {
          push(routes.profile('/zeffry-reynando/tagged'), undefined, { shallow: true });
        }}
      >
        <IconAddressBook size="2rem" color={currentSelectedTab === 'tagged' ? 'blue' : undefined} />
      </ActionIcon>
    </div>
  );
}

export default CategoryPostProfile;
