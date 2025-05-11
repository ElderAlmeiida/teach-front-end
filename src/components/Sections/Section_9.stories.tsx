import { Meta, StoryFn } from '@storybook/react';
import Section_9 from './Section_9';

export default {
  title: 'Section/Section 9',
  component: Section_9,
} as Meta;

// Template padrão que será utilizado pelas variações (stories)
const Template: StoryFn = (args) => <Section_9 {...args} />;

// Primeira "story" da Section1
export const Default = Template.bind({});
Default.args = {
};