// @flow
// axis and label colors
const axisColor: string = '#393F46';

// base colors
const colors: string[] = [
  '#0A2F61',
  '#B8D5E5',
  '#708090',
  '#CCC8C5',
];

// label styles
const labelStyle = {
  fill: axisColor,
  fontSize: 14,
  fontFamily: "'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif",
  stroke: 'transparent',
};

const theme: Theme = {
  axisColor,
  colors,
  name: 'JubilationTheme',
  labelStyle,
};

export default theme;
