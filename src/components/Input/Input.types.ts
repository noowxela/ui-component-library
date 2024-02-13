import { ChangeEventHandler } from 'react';

export default interface InputProps {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
