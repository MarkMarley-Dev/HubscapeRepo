import React from 'react';
import { ButtonProps } from './types';



export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

