
import { Meta, StoryFn } from '@storybook/react';
import Section_7 from './Section_7';

export default {
  title: 'Section/Section 7',
  component: Section_7,
} as Meta;

// Template padrão que será utilizado pelas variações (stories)
const Template: StoryFn = (args) => <Section_7 {...args} />;

// Primeira "story" da Section1
export const Default = Template.bind({});
Default.args = {
};
