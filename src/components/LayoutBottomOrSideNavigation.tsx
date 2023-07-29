import BottomNavigationBar from './BottomNavigationBar';

type Props = {
  children: React.ReactNode;
};
const LayoutBottomOrSideNavigation = ({ children }: Props) => {
  return (
    <div className="relative pb-32">
      {children}
      <BottomNavigationBar />
    </div>
  );
};

export default LayoutBottomOrSideNavigation;
