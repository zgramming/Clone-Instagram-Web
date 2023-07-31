import { Stack } from '@mantine/core';
import LayoutBottomOrSideNavigation from '@/components/LayoutBottomOrSideNavigation';
import FeedsPostProfile from '@/components/u/[username]/FeedPostProfile';
import SavedPostProfile from '@/components/u/[username]/SavedPostProfile';
import TaggedPostProfile from '@/components/u/[username]/TaggedPostProfile';
import CategoryPostProfile from '@/components/u/[username]/MultiActionProfile';
import SocialStatsProfile from '@/components/u/[username]/SocialStatsProfile';
import DescriptionProfile from '@/components/u/[username]/DescriptionProfile';
import HighlightProfile from '@/components/u/[username]/HighlightProfile';
import HeaderProfile from '@/components/u/[username]/HeaderProfile';
import ImageAndNameProfile from '@/components/u/[username]/ImageAndNameProfile';

type ProfilePageProps = {
  defaultTab: 'grid' | 'feed' | 'saved' | 'tagged';
};
function ProfilePage({ defaultTab = 'grid' }: ProfilePageProps) {
  const isMe = true;

  return (
    <Stack spacing="md">
      <HeaderProfile isMe={isMe} />
      <ImageAndNameProfile isMe={isMe} />
      <DescriptionProfile isMe={isMe} />
      {isMe && <HighlightProfile />}
      <Stack spacing={0}>
        <SocialStatsProfile />
        <CategoryPostProfile currentSelectedTab={defaultTab} />
      </Stack>
      {defaultTab === 'grid' && <FeedsPostProfile />}
      {defaultTab === 'saved' && <SavedPostProfile />}
      {defaultTab === 'tagged' && <TaggedPostProfile />}

      <div className="pb-32" />
    </Stack>
  );
}

ProfilePage.getLayout = function getLayout(page: any) {
  return <LayoutBottomOrSideNavigation>{page}</LayoutBottomOrSideNavigation>;
};

export default ProfilePage;
