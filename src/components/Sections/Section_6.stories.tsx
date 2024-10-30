import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Section_6 from './Section_6';

export default {
  title: 'Section/Section 6',
  component: Section_6,
} as Meta;

// Template padrão que será utilizado pelas variações (stories)
const Template: StoryFn = (args) => <Section_6 {...args} />;

// Primeira "story" da Section1
export const Default = Template.bind({});
Default.args = {
};