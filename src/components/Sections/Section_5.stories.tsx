import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Section_5 from './Section_5';

export default {
  title: 'Section/Section 5',
  component: Section_5,
} as Meta;

// Template padrão que será utilizado pelas variações (stories)
const Template: StoryFn = (args) => <Section_5 {...args} />;

// Primeira "story" da Section1
export const Default = Template.bind({});
Default.args = {
};