import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Section2 from './Section_2'; // O caminho para seu componente Section1

export default {
  title: 'Section/Section 2',
  component: Section2,
} as Meta;

// Template padrão que será utilizado pelas variações (stories)
const Template: StoryFn = (args) => <Section2 {...args} />;

// Primeira "story" da Section1
export const Default = Template.bind({});
Default.args = {
  // Aqui você pode passar os props caso Section1 tenha props customizáveis.
};