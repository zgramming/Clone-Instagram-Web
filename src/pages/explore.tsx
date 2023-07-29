import LayoutBottomOrSideNavigation from '@/components/LayoutBottomOrSideNavigation';
import ExploreFeeds from '@/components/explore/ExploreFeeds';
import ExploreRecentHistory from '@/components/explore/ExploreRecentHistory';
import ExploreSearch from '@/components/explore/ExploreSearch';
import { Stack } from '@mantine/core';
import { useState } from 'react';

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <LayoutBottomOrSideNavigation>{page}</LayoutBottomOrSideNavigation>;
};

export default function Page() {
  const [stateSearch, setStateSearch] = useState<'blur' | 'focus'>('blur');
  return (
    <Stack spacing={'md'} className="py-3">
      <ExploreSearch currentState={setStateSearch} />
      {stateSearch === 'blur' && <ExploreFeeds />}
      {stateSearch === 'focus' && <ExploreRecentHistory />}
    </Stack>
  );
}
