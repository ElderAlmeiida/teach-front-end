import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

// Define o tipo das props do Button
type ButtonProps = {
  children: React.ReactNode;
};

// Exporta os metadados da história
export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

// Define um template para as histórias usando StoryFn
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Cria uma variação da história padrão
export const Default = Template.bind({});
Default.args = {
  children: 'Button Text',
};

