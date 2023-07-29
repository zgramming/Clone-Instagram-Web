import BottomNavigationBar from './BottomNavigationBar';

type Props = {
  children: React.ReactNode;
};
function LayoutBottomOrSideNavigation({ children }: Props) {
  return (
    <div className="relative">
      {children}
      <BottomNavigationBar />
    </div>
  );
}

export default LayoutBottomOrSideNavigation;
