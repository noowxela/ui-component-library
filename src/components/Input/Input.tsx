import React, { FC, Fragment } from 'react';
// import { ChangeEventHandler } from "react";
// import styled from "styled-components";
import InputProps from './Input.types';
import './input.css';

// interface InputProps {
//   id?: string;
//   label?: string;
//   error?: boolean;
//   message?: string;
//   success?: boolean;
//   disabled?: boolean;
//   placeholder?: string;
//   onChange?: ChangeEventHandler<HTMLInputElement>;
// }

// const StyledInput = styled.input<InputProps>`
//   height: 40px;
//   width: 300px;
//   border-radius: 3px;
//   border: solid 2px
//     ${(props) =>
//       props.disabled
//         ? "#e4e3ea"
//         : props.error
//         ? "#a9150b"
//         : props.success
//         ? "#067d68"
//         : "#353637"};
//   background-color: #fff;
//   &:focus {
//     border: solid 2px #1b116e;
//   }
// `;

// const StyledLabel = styled.div<InputProps>`
//   font-size: 14px;
//   color: ${(props) => (props.disabled ? "#e4e3ea" : "#080808")};
//   padding-bottom: 6px;
// `;

// const StyledMessage = styled.div<InputProps>`
//   font-size: 14px;
//   color: #a9150b8;
//   padding-top: 4px;
// `;

// const StyledText = styled.p<InputProps>`
//   margin: 0px;
//   color: ${(props) =>
//     props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : "#080808"};
// `;

const Input: FC<InputProps> = ({ id, disabled, label, message, error, success, onChange, placeholder, ...props }) => {
    return (
        <Fragment>
            <div className="label">
                <p className="text" data-disabled={disabled} data-error={error}>
                    {label}
                </p>
            </div>
            <input id={id} type="text" onChange={onChange} disabled={disabled} data-error={error} data-success={success} placeholder={placeholder} {...props} />
            <div className="message">
                <p className="text" data-error={error}>
                    {message}
                </p>
            </div>
        </Fragment>
    );
};

export default Input;
