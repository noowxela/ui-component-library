import type { Meta, StoryObj } from '@storybook/react';

import ArticleCard from './ArticleCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ArticleCard>  = {
    title: 'Example/ArticleCard',
    component: ArticleCard,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DqjCard: Story = {
    args: {
        matchType: true,
        type: "dqj",
        title: 'Mbemba faces online abuse following Congo-Morocco tie',
        description: `In a dominant French Cup performance, Paris Saint-Germain, led by Kylian Mbappé's hat trick, crushed sixth-tier Revel 9-0. The win propelled PSG into the round of 32, with Marco Asensio, Goncalo Ramos, Randal Kolo Muani, and Cher Ndour also contributing to the scoresheet. Despite Revel's initial enthusiasm, they were clearly outmatched, and their sporting director conceded the impending defeat. PSG now gears up for a Ligue 1 clash against Lens on January 14.`,
        league_name: 'National Basketball Association',
        teamAName: 'Boston Celtics',
        teamBName: 'Utah Jazz',
        authorName: '大球街',
        date: 'Monday , 2024-01-22',
        imgPath: 'https://cataas.com/cat',
    }
};

export const epCard: Story = {
    args: {
        matchType: true,
        type: "ep",
        title: 'Mbappe scores three goals as PSG easily defeats 6th-tier Revel in the Cup.',
        description: `In a dominant French Cup performance, Paris Saint-Germain, led by Kylian Mbappé's hat trick, crushed sixth-tier Revel 9-0. The win propelled PSG into the round of 32, with Marco Asensio, Goncalo Ramos, Randal Kolo Muani, and Cher Ndour also contributing to the scoresheet. Despite Revel's initial enthusiasm, they were clearly outmatched, and their sporting director conceded the impending defeat. PSG now gears up for a Ligue 1 clash against Lens on January 14.`,
        league_name: 'National Basketball Association',
        teamAName: 'Boston Celtics',
        teamBName: 'Utah Jazz',
        authorName: 'Julia',
        date: 'Monday , 2024-01-22',
        imgPath: 'https://cataas.com/cat',
    }
};
