type SocialStatsItemProfileProps = {
  name: string;
  value: number;
};
function SocialStatsItemProfile({ name, value }: SocialStatsItemProfileProps) {
  return (
    <div className="flex flex-col text-center">
      <div className="font-medium">{value}</div>
      <div className="font-medium text-gray-500 text-sm">{name}</div>
    </div>
  );
}

function SocialStatsProfile() {
  return (
    <div
      className={`
      flex flex-row items-center justify-between 
      border-solid  border-0 border-t-2 border-gray-300 rounded-md
      gap-3 py-2 px-12
      `}
    >
      <SocialStatsItemProfile name="posts" value={5} />
      <SocialStatsItemProfile name="followers" value={1063} />
      <SocialStatsItemProfile name="following" value={1051} />
    </div>
  );
}

export default SocialStatsProfile;
