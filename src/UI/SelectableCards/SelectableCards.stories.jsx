import React from 'react';

import { SelectableCards } from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'UI/SelectableCards',
  component: SelectableCards,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => (
  <SelectableCards choices={['FIRST QUESTION', 'SECOND QUESTION', 'THIRD QUESTION', 'FORTH QUESTION']} />
);

export const Primary = Template.bind({});
