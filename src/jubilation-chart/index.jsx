// @flow
import React from 'react';
import JubilationProvider from '../jubilation-provider';
import JubilationContainer from '../jubilation-container';
import { default as JubilationTheme } from '../jubilation-theme';
import { getXRange, getYRange } from '../helpers/chart';

type Props = {
  children?: React.Element<*> | React.Element<*>,
  height: number,
  theme?: Theme,
  title?: string,
  width: number,
}

export default function JubilationChart(
  {
    title = 'JubilationChart',
    height = 100,
    width = 300,
    theme = JubilationTheme,
    children }: Props): React.Element<*> {
  return (
    <JubilationProvider xRange={getXRange(width, theme)} yRange={getYRange(height, theme)}>
      <JubilationContainer height={height} width={width} title={title}>
        {children}
      </JubilationContainer>
    </JubilationProvider>
  );
}
