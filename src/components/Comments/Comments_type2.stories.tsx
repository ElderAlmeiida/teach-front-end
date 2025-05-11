// import React from 'react';
// import { Meta, StoryFn } from '@storybook/react';
// import Comments_type2 from './Comments_type2'; // Certifique-se de que o caminho está correto

// // Extraindo as props do componente
// type CommentsType1Props = React.ComponentProps<typeof Comments_type2>;

// // Configuração padrão do Storybook
// export default {
//   title: 'Comments/Comments_type2',
//   component: Comments_type2,
// } as Meta<CommentsType1Props>; // Tipando o Meta

// // Template padrão que será utilizado pelas variações (stories)
// const Template: StoryFn<CommentsType1Props> = (args) => <Comments_type2 {...args} />;

// // Primeira "story" da Comments_type1
// export const Default = Template.bind({});
// Default.args = {
//   // Aqui você pode passar os props caso Comments_type1 tenha props customizáveis.
// };