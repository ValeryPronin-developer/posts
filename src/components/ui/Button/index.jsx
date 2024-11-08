import React from 'react';
import * as SC from './styles';

export const Button = ({isDelete, children, ...rest}) => <SC.Button {...rest}>{children}</SC.Button>