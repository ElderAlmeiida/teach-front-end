import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button_2 from './Button_2'; // Importa o componente Button_2

// Define o tipo das props do Button_2
type ButtonProps = {
  children: React.ReactNode;
};

// Exporta os metadados da história
export default {
  title: 'Components/Button 2', // Atualiza o título para Button_2
  component: Button_2,
} as Meta;

// Define um template para as histórias usando StoryFn
const Template: StoryFn<ButtonProps> = (args) => <Button_2 {...args} />;

// Cria uma variação da história padrão
export const Default = Template.bind({});
Default.args = {
  children: 'Button Text', // Texto padrão do botão
};

