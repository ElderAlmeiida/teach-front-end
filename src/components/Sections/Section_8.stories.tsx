
import { Meta, StoryFn } from '@storybook/react';
import Section_8 from './Section_8';

export default {
  title: 'Section/Section 8',
  component: Section_8,
} as Meta;

// Template padrão que será utilizado pelas variações (stories)
const Template: StoryFn = (args) => <Section_8 {...args} />;

// Primeira "story" da Section1
export const Default = Template.bind({});
Default.args = {
};