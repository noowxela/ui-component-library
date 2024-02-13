import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import InputProps from './Input.types';

const meta: Meta<typeof Input> = {
    title: 'Marbella/InputField',
    component: Input,
    argTypes: {}
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = (args: InputProps) => <Input data-test-id="InputField-id" {...args} />;
Primary.args = {
    error: false,
    disabled: false,
    label: 'Primary'
};

export const Success: Story = (args: InputProps) => <Input data-test-id="InputField-id" {...args} />;
Success.args = {
    error: false,
    success: true,
    disabled: false,
    label: 'Success'
};

export const Error: Story = (args: InputProps) => <Input data-test-id="InputField-id" {...args} />;
Error.args = {
    error: true,
    disabled: false,
    message: 'Error'
};

export const Disabled: Story = (args: InputProps) => <Input data-test-id="InputField-id" {...args} />;
Disabled.args = {
    disabled: true,
    label: 'Disabled'
};
