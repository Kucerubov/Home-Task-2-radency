import React from 'react';
import { Story, Meta } from '@storybook/react';
import NoteList from '../NoteList';
import { Provider } from 'react-redux';
import { store } from '../../store';
import '../../styles.css';

export default {
    title: 'Components/NoteList',
    component: NoteList,
} as Meta;

const generateRandomNotes = (count: number) => {
    const notes = [];
    const categories = ['Task', 'Idea', 'Random Thought'];
    for (let i = 1; i <= count; i++) {
        notes.push({
            id: `${i}`,
            name: `Note ${i}`,
            created: "July 28, 2023",
            category: categories[Math.floor(Math.random() * categories.length)],
            content: `Post content ${i}`,
            dates: "",
            archived: Math.random() < 0.5
        });
    }
    return notes;
};

const Template: Story = (args: any) =>
    <Provider store={store}>
        <NoteList {...args} />
    </Provider>;

export const Default = Template.bind({});
Default.args = {
    data: generateRandomNotes(5),
    isNotesTable: true,
};

export const Combined = Template.bind({});
Combined.args = {
    data: generateRandomNotes(3),
    isNotesTable: false,
};
