import { createContext, useCallback, useMemo, useState } from 'react';

export type StoryContentType = {
  id: number;
  url: string;
  duration: number;
  type: 'image' | 'video';
};
export type Story = {
  id: number;
  username: string;
  avatar: string;
  contents: StoryContentType[];
};

// eslint-disable-next-line import/prefer-default-export
export const dummyStories: Story[] = [
  {
    id: 1,
    username: 'zeffry.reynando',
    avatar: 'https://picsum.photos/seed/1/200',
    contents: [
      {
        id: 1,
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        duration: 5,
        type: 'video',
      },
    ],
  },
  {
    id: 2,
    username: 'annisa.nakia',
    avatar: 'https://picsum.photos/seed/2/200',
    contents: [
      {
        id: 4,
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        duration: 5,
        type: 'video',
      },
      {
        id: 5,
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        duration: 10,
        type: 'video',
      },
    ],
  },
  {
    id: 3,
    username: 'daffa.alfariz',
    avatar: 'https://picsum.photos/seed/3/200',
    contents: [
      {
        id: 7,
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        duration: 5,
        type: 'video',
      },
      {
        id: 8,
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        duration: 10,
        type: 'video',
      },
      {
        id: 9,
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        duration: 15,
        type: 'video',
      },
    ],
  },
];

type ContextType = {
  stories: Story[];
  viewedStoryContentIds: number[];

  reset: () => void;
  setStories: (stories: Story[]) => void;
  addViewedStoryContent: (id: number) => void;
  removeCurrentViewedStoryContent: () => void;
};

const defaultValue: ContextType = {
  stories: dummyStories,
  viewedStoryContentIds: [],

  reset: () => {},
  setStories: () => {},
  addViewedStoryContent: () => {},
  removeCurrentViewedStoryContent: () => {},
};

export const StoryContext = createContext<ContextType>(defaultValue);

function StoryProvider({ children }: { children: React.ReactNode }) {
  const [stories, setStories] = useState<Story[]>(dummyStories);
  const [viewedStoryContentIds, setViewedStoryContentIds] = useState<number[]>([]);

  const onReset = () => {
    setStories(dummyStories);
    setViewedStoryContentIds([]);
  };
  const onSetStories = (newStories: Story[]) => {
    setStories(newStories);
  };

  const addViewedStoryContent = useCallback((id: number) => {
    setViewedStoryContentIds((prevIds) => {
      const isExists = prevIds.includes(id);
      if (isExists) return prevIds;

      return [...prevIds, id];
    });
  }, []);

  const removeCurrentViewedStoryContent = useCallback(() => {
    const temp = [...viewedStoryContentIds];
    temp.pop();
    setViewedStoryContentIds(temp);
  }, [viewedStoryContentIds]);

  const value: ContextType = useMemo(
    () => ({
      stories,
      viewedStoryContentIds,

      reset: onReset,
      setStories: onSetStories,
      addViewedStoryContent,
      removeCurrentViewedStoryContent,
    }),
    [stories, viewedStoryContentIds, removeCurrentViewedStoryContent, addViewedStoryContent],
  );

  return <StoryContext.Provider value={value}>{children}</StoryContext.Provider>;
}

export default StoryProvider;
