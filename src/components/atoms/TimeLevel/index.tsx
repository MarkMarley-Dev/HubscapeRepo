import React from 'react';
import { TimeLabelProps } from './types';

export const TimeLabel: React.FC<TimeLabelProps> = ({ time }) => (
  <time dateTime={time}>{time}</time>
);