// @flow

// theme type declaration
type Theme = {
  axisColor: string,
  colors: string[],
  name: string,
};

// axis and label colors
const axisColor: string = '#393F46';

// base colors
const colors: string[] = [
  '#0A2F61',
  '#B8D5E5',
  '#708090',
  '#CCC8C5',
];

const theme: Theme = {
  axisColor,
  colors,
  name: 'JubilationTheme',
};

export default theme;
