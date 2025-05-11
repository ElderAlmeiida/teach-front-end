
import { Meta, StoryFn } from '@storybook/react';
import Section_3 from './Section_3'; // O caminho para seu componente Section1

export default {
  title: 'Section/Section 3',
  component: Section_3,
} as Meta;

// Template padrão que será utilizado pelas variações (stories)
const Template: StoryFn = (args) => <Section_3 {...args} />;

// Primeira "story" da Section1
export const Default = Template.bind({});
Default.args = {
  // Aqui você pode passar os props caso Section1 tenha props customizáveis.
};