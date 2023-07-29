const routeHome = '/';
const routeExplore = '/explore';
const routeReels = '/reels';
const routeDirectInbox = '/direct/inbox';
const routeProfile = (username: string) => `/${username}`;

const routes = {
  home: routeHome,
  explore: routeExplore,
  reels: routeReels,
  directInbox: routeDirectInbox,
  profile: routeProfile,
};

export default routes;
