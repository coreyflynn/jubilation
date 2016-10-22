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

// modular scale ratio
const scale = 1.5;

// label styles
const labelStyle = {
  fill: axisColor,
  fontSize: 14,
  fontFamily: "'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif",
  stroke: 'transparent',
};

const margin = {
  left: labelStyle.fontSize * 3,
  right: labelStyle.fontSize * 3,
  top: labelStyle.fontSize * 3,
  bottom: labelStyle.fontSize * 3,
};

const theme: Theme = {
  axisColor,
  colors,
  labelStyle,
  margin,
  name: 'JubilationTheme',
  scale,
};

export default theme;
