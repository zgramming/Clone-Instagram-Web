import { Button } from '@mantine/core';
import { IconChevronCompactDown } from '@tabler/icons-react';

export default function Home() {
  return (
    <>
      <Button variant="filled" leftIcon={<IconChevronCompactDown color="white" />}>
        Hello
      </Button>
    </>
  );
}
