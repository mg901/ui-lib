import { configure } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';


const req = require.context('../src/components', true, /.stories.tsx$/);
const loadStories = () => {
  req.keys().forEach(req);
}

configure(loadStories, module);
addDecorator(checkA11y);