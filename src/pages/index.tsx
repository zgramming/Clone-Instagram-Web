import { Stack } from '@mantine/core';
import LayoutBottomOrSideNavigation from '@/components/LayoutBottomOrSideNavigation';
import NavigationBar from '@/components/NavigationBar';
import Story from '@/components/home/Story';
import PostsHome from '@/components/home/PostHome';

export default function Page() {
  return (
    <Stack spacing="xs" className="relative pb-32">
      <NavigationBar />
      <Story />
      <PostsHome />
    </Stack>
  );
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <LayoutBottomOrSideNavigation>{page}</LayoutBottomOrSideNavigation>;
};
