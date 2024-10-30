
import { Meta, StoryFn } from '@storybook/react';
import Section_4 from './Section_4';

export default {
  title: 'Section/Section 4',
  component: Section_4,
} as Meta;

// Template padrão que será utilizado pelas variações (stories)
const Template: StoryFn = (args) => <Section_4 {...args} />;

// Primeira "story" da Section1
export const Default = Template.bind({});
Default.args = {
};
