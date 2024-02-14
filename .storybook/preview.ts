import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        backgrounds: {
            default: 'ep_Dark',
            values: [
                {
                    name: 'twitter',
                    value: '#00aced',
                },
                {
                    name: 'facebook',
                    value: '#3b5998',
                },
                {
                    name: 'dqj_Light',
                    value: '#e9e9e9',
                },
                {
                    name: 'dqj_Dark',
                    value: '#1c2838',
                },
                {
                    name: 'ep_Light',
                    value: '#eeeeee',
                },
                {
                    name: 'ep_Dark',
                    value: '#1e1e1e',
                },
            ],
        },
    }
};

export default preview;
