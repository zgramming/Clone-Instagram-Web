import { TextInput, ActionIcon } from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';
import { useRef, useState } from 'react';

type ExploreSearchProps = {
  currentState: (state: 'blur' | 'focus') => void;
};
function ExploreSearch({ currentState }: ExploreSearchProps) {
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const [stateSearch, setStateSearch] = useState<'blur' | 'focus'>('blur');

  const onBlurSearch = () => {
    setStateSearch('blur');
    currentState('blur');
    if (inputSearchRef.current) {
      inputSearchRef.current.blur();
    }
  };

  const onFocusSearch = () => {
    setStateSearch('focus');
    currentState('focus');
    if (inputSearchRef.current) {
      inputSearchRef.current.focus();
    }
  };

  return (
    <div className="px-5">
      <div className="flex flex-row items-center gap-3">
        <div className="grow">
          <TextInput
            ref={inputSearchRef}
            placeholder="Search"
            icon={<IconSearch size="0.8rem" />}
            onFocus={onFocusSearch}
          />
        </div>
        {stateSearch === 'focus' && (
          <ActionIcon onClick={onBlurSearch}>
            <IconX size="1.2rem" />
          </ActionIcon>
        )}
      </div>
    </div>
  );
}

export default ExploreSearch;
