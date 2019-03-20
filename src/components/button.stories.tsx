import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import * as React from 'react';
import { Button } from './button';

storiesOf('Button', module)
  .addDecorator(checkA11y)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button>
      <span role="img" aria-label="faces">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
