import { Grid, AspectRatio } from '@mantine/core';
import { IconLayersSubtract, IconDeviceTv } from '@tabler/icons-react';

const ExploreFeeds = () => {
  const dummy = Array.from({ length: 100 }).map((_, i) => i);

  return (
    <Grid gutter={2}>
      {dummy.map((_, i) => {
        const randomColorByIndex = Math.floor(Math.random() * 16777215).toString(16);

        const typeFeed = i % 2 === 0 ? 'image' : ('video' as 'image' | 'video');

        const randomImage = `https://picsum.photos/seed/${i}/200/300`;

        return (
          <Grid.Col key={i} span={4}>
            <div className="relative">
              <AspectRatio ratio={1 / 1}>
                <div
                  style={{
                    backgroundColor: `#${randomColorByIndex}`,
                  }}
                >
                  <img src={randomImage} alt="random" className="object-cover w-full h-full" />
                </div>
              </AspectRatio>
              <div className="absolute top-0 right-0 p-2">
                {typeFeed === 'image' && <IconLayersSubtract color="white" />}
                {typeFeed === 'video' && <IconDeviceTv color="white" />}
              </div>
            </div>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default ExploreFeeds;
