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
            default: 'twitter',
            values: [
                {
                    name: 'dqj_Dark',
                    value: '#1c2838',
                },
                {
                    name: 'dqj_Light',
                    value: '#e9e9e9',
                },
                {
                    name: 'ep_Dark',
                    value: '#1e1e1e',
                },
                {
                    name: 'ep_Light',
                    value: '#eeeeee',
                },
                {
                    name: 'twitter',
                    value: '#00aced',
                },
                {
                    name: 'facebook',
                    value: '#3b5998',
                },
            ],
        },
    }
};

export default preview;
