import { Group } from '@mantine/core';

function HighlightProfile() {
  const dummy = Array.from({ length: 10 });
  return (
    <div className="overflow-x-auto mx-5">
      <Group spacing="md" noWrap>
        {dummy.map((_, index) => (
          <div className="flex flex-col gap-2">
            <div className="h-16 w-16 rounded-full shadow-sm bg-red-400">
              <img
                alt="profile"
                src={`https://picsum.photos/seed/${index}/200`}
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <div className="text-center text-xs line-clamp-1 text-ellipsis">{`Highlight ${index}`}</div>
          </div>
        ))}
      </Group>
    </div>
  );
}
export default HighlightProfile;
