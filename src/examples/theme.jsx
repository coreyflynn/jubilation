import React from 'react';

const ThemeForm = ({
  theme,
  updateColors,
  updateLabelStyle,
  updateMargin,
  updateTheme,
  }) => {

  const {
    axisColor,
    colors,
    labelStyle: {
      fill,
      fontFamily,
      fontSize,
      stroke,
    },
    margin: {
      left,
      top,
      right,
      bottom,
    },
    name,
    scale,
  } = theme;

  return <form>
    <label htmlFor="axisColor" style={{border: `2px solid ${axisColor}`}} >
      Axis Color
      <input id="axisColor" value={axisColor} onChange={e => updateTheme(e, 'axisColor')} />
    </label>
    <label htmlFor="colors">
      Color Scheme
      <input id="colors" value={colors} onChange={e => updateTheme(e, 'colors')} />
    </label>
    <fieldset style={{border: "none"}} >Label Style
      <label htmlFor="fill">
        Label Fill
        <input id="fill" value={fill} onChange={e => updateLabelStyle(e, 'fill')} />
      </label>
      <label htmlFor="fontFamily">
        Label fontFamily
        <input id="fontFamily" value={fontFamily} onChange={e => updateLabelStyle(e, 'fontFamily')} />
      </label>
      <label htmlFor="fontSize">
        Label fontSize
        <input id="fontSize" type="number" value={fontSize} onChange={e => updateLabelStyle(e, 'fontSize')} />
      </label>
      <label htmlFor="stroke">
        Label stroke
        <input id="stroke" value={stroke} onChange={e => updateLabelStyle(e, 'stroke')} />
      </label>
    </fieldset>
    <fieldset style={{border: "none"}}>Margin
      <label htmlFor="Left">
        Left
        <input id="Left" type="number" value={left} onChange={e=> updateMargin(e, 'left')} />
      </label>
      <label htmlFor="Top">
        Top
        <input id="Top" type="number" value={top} onChange={e => updateMargin(e, "top")} />
      </label>
      <label htmlFor="Right">
        Right
        <input id="Right" type="number" value={right} onChange={e => updateMargin(e, "right")} />
      </label>
      <label htmlFor="Bottom">
        Bottom
        <input id="Bottom" type="number" value={bottom} onChange={e => updateMargin(e, "bottom")} />
      </label>
    </fieldset>
    <label htmlFor="name">
      Name
      <input id="name" value={name} onChange={e => updateTheme(e, 'name')} />
    </label>
    <label htmlFor="scale">
      Scale
      <input id="scale" type="number" value={scale} onChange={e => updateTheme(e, 'scale')} />
    </label>
  </form>
};

export default ThemeForm
