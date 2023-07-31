const routeHome = '/';
const routeExplore = '/explore';
const routeReels = '/reels';
const routeDirectInbox = '/direct/inbox';
const routeDirectInboxNew = '/direct/new';
const routeDirectThread = (threadId: string) => `/direct/t/${threadId}`;
const routeProfile = (username: string) => `/u/${username}`;

const routes = {
  home: routeHome,
  explore: routeExplore,
  reels: routeReels,
  directInbox: routeDirectInbox,
  directInboxNew: routeDirectInboxNew,
  directThread: routeDirectThread,
  profile: routeProfile,
};

export default routes;
