import { Meta, StoryFn } from '@storybook/react';
import Section1 from './Section_1'; // O caminho para seu componente Section1

export default {
  title: 'Section/Section 1',
  component: Section1,
} as Meta;

// Template padrão que será utilizado pelas variações (stories)
const Template: StoryFn = (args) => <Section1 {...args} />;

// Primeira "story" da Section1
export const Default = Template.bind({});
Default.args = {
  // Aqui você pode passar os props caso Section1 tenha props customizáveis.
};
