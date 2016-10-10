// @flow

// theme type declaration
type Theme = {
  colors: string[],
  axisColor: string,
};

// base colors
const colors: string[] = [
  '#0A2F61',
  '#B8D5E5',
  '#708090',
  '#CCC8C5',
];

// axis and label colors
const axisColor: string = '#393F46';

const theme: Theme = {
  colors,
  axisColor,
};

export default theme;
