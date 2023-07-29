import LayoutBottomOrSideNavigation from '@/components/LayoutBottomOrSideNavigation';
import NavigationBar from '@/components/NavigationBar';
import Posts from '@/components/home/Post';
import Story from '@/components/home/Story';
import { Stack } from '@mantine/core';

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <LayoutBottomOrSideNavigation>{page}</LayoutBottomOrSideNavigation>;
};

export default function Page() {
  return (
    <>
      <Stack spacing={'xs'} className="relative">
        <NavigationBar />
        <Story />
        <Posts />
      </Stack>
    </>
  );
}
