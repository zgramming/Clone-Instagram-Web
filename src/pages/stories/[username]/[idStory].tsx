/* eslint-disable jsx-a11y/media-has-caption */
import { ActionIcon, Avatar, Stack, TextInput } from '@mantine/core';
import { IconHeart, IconMessageCircle, IconSend, IconVolume3, IconX } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import routes from '@/utils/routes';
import { StoryContentType, StoryContext } from '@/contexts/StoryContext';

function StoryFooter() {
  return (
    <div className="flex flex-row items-center gap-5 py-3 px-5">
      <div className="grow">
        <TextInput placeholder="Send Message" icon={<IconMessageCircle size="0.8rem" />} radius="xl" />
      </div>
      <ActionIcon>
        <IconHeart color="white" />
      </ActionIcon>
      <ActionIcon>
        <IconSend color="white" />
      </ActionIcon>
    </div>
  );
}

type StoryContentProps = {
  contents: StoryContentType[];
  onFinishedContent: () => void;
  onBackContent: () => void;
};
function StoryContent({ contents = [], onFinishedContent, onBackContent }: StoryContentProps) {
  const { push } = useRouter();
  const { removeCurrentViewedStoryContent, addViewedStoryContent, viewedStoryContentIds } = useContext(StoryContext);
  const parentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentContentIndex, setCurrentContentIndex] = useState<number>(0);
  const currentContent = contents[currentContentIndex];

  const [size, setSize] = useState({
    widthO: 0,
    heightO: 0,
  });

  // When video is clicked, play next content if exist
  // If not exist then play next story
  const onVideoClick = () => {
    setCurrentContentIndex((currIndex) => {
      const content = contents[currIndex];
      addViewedStoryContent(content.id);

      const nextIndex = currIndex + 1;
      const isHaveNextStory = contents[nextIndex] !== undefined;
      if (isHaveNextStory) {
        return nextIndex;
      }

      onFinishedContent();
      return 0;
    });
  };

  const onClickLeftEdge = () => {
    setCurrentContentIndex((currIndex) => {
      removeCurrentViewedStoryContent();

      const prevIndex = currIndex - 1;
      const isHavePrevStory = contents[prevIndex] !== undefined;
      if (isHavePrevStory) {
        setCurrentContentIndex(prevIndex);

        return prevIndex;
      }
      setCurrentContentIndex(0);
      onBackContent();

      return 0;
    });
  };

  const onClickRightEdge = () => {
    onVideoClick();
  };

  const onClose = () => {
    push(routes.home);
  };

  // Get size of parent element to set video size to cover parent element
  useEffect(() => {
    if (parentRef.current) {
      const { width, height } = parentRef.current.getBoundingClientRect();
      setSize({
        widthO: width,
        heightO: height,
      });
    }
  }, []);

  // Detect if video is ended then play next story video if exist
  // If not exist then play another username story
  useEffect(() => {
    const refCurrent = videoRef.current;
    if (refCurrent) {
      const endedListener = () => {
        // Play it again
        refCurrent.play();
      };

      refCurrent.addEventListener('ended', endedListener);

      // Cleanup event listener when component unmount
      return () => {
        refCurrent.removeEventListener('ended', endedListener);
      };
    }
    return () => {};
  }, []);

  return (
    <div ref={parentRef} className="grow flex flex-col gap-3 text-white">
      <div className="flex flex-row items-center gap-1">
        {contents.map((content) => {
          const isViewed = viewedStoryContentIds.includes(content.id);
          return (
            <div
              className="h-[0.2rem] w-full rounded-lg"
              style={{
                backgroundColor: isViewed ? 'white' : 'rgba(255,255,255,0.5)',
              }}
            />
          );
        })}
      </div>
      <h6 className="text-white">
        {currentContentIndex}
        <br />
        {JSON.stringify(viewedStoryContentIds)}
      </h6>
      <div className="flex flex-row items-center text-white px-5">
        <div className="grow flex flex-row items-center gap-2">
          <Avatar src="https://picsum.photos/seed/1/200" size="sm" radius="xl" />
          <div className="font-medium text-sm">Zeffry Reynando</div>
          <div className="text-xs font-light text-white/50">1 hour ago</div>
        </div>
        <div className="flex flex-row items-center">
          <ActionIcon>
            <IconVolume3 color="white" />
          </ActionIcon>
          <ActionIcon onClick={onClose}>
            <IconX color="white" />
          </ActionIcon>
        </div>
      </div>
      <div
        className="relative"
        style={{
          width: size.widthO,
          height: size.heightO,
        }}
      >
        <video
          ref={videoRef}
          src={currentContent.url}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          onClick={onVideoClick}
        />
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/10" role="presentation" onClick={onClickLeftEdge} />
        <div
          className="absolute right-0 top-0 bottom-0 w-8 bg-black/10"
          role="presentation"
          onClick={onClickRightEdge}
        />
      </div>
    </div>
  );
}

export default function Page() {
  const { push } = useRouter();
  const { stories } = useContext(StoryContext);

  const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(0);

  const onFinishedContent = () => {
    const nextIndex = currentStoryIndex + 1;
    const isHaveNextStory = stories[nextIndex] !== undefined;
    if (isHaveNextStory) {
      setCurrentStoryIndex(nextIndex);
    } else {
      push(routes.home);
    }
  };

  const onBackContent = () => {
    const previousIndex = currentStoryIndex - 1;
    const isHavePrevStory = stories[previousIndex] !== undefined;
    if (isHavePrevStory) {
      setCurrentStoryIndex(previousIndex);
    } else {
      push(routes.home);
    }
  };

  const onSlideChange = (index: number) => {
    setCurrentStoryIndex(index);
  };

  return (
    <Carousel
      withControls={false}
      withIndicators={false}
      initialSlide={currentStoryIndex}
      align="start"
      onSlideChange={onSlideChange}
    >
      {stories.map((story) => (
        <Carousel.Slide>
          <Stack
            spacing="sm"
            style={{
              height: '100vh',
              backgroundColor: 'black',
            }}
          >
            <StoryContent
              contents={story.contents}
              onFinishedContent={onFinishedContent}
              onBackContent={onBackContent}
            />
            <StoryFooter />
          </Stack>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
