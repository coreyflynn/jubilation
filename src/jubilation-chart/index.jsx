// @flow
import React from 'react';
import JubilationProvider from '../jubilation-provider';
import JubilationContainer from '../jubilation-container';

type Props = {
  title: string,
  height: number,
  width: number,
  data: Object[],
  children: React.Element<*> | React.Element<*>,
}

export default function JubilationChart(
  { title, height, width, data, children }: Props): React.Element<*> {
  return (
    <JubilationProvider>
      <JubilationContainer height={height} width={width} title={title}>
        {children}
      </JubilationContainer>
    </JubilationProvider>
  );
}
