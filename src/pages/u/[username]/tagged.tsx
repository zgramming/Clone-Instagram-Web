import LayoutBottomOrSideNavigation from '@/components/LayoutBottomOrSideNavigation';
import ProfilePage from '../[username]';

export default function Page() {
  return <ProfilePage defaultTab="tagged" />;
}

Page.getLayout = function getLayout(page: any) {
  return <LayoutBottomOrSideNavigation>{page}</LayoutBottomOrSideNavigation>;
};
