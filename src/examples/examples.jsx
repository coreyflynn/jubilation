import React, { Component } from 'react';
import AxisExample from './axis';
import BarPlotExample from './barplot';
import ScatterPlotExample from './scatterplot';
import ThemeForm from './theme';
import theme from '../jubilation-theme';


class Examples extends Component {
  constructor(props: Object) {
    super(props);
    this.updateTheme = this.updateTheme.bind(this);
    this.updateLabelStyle = this.updateLabelStyle.bind(this);
    this.updateMargin = this.updateMargin.bind(this);
    
    this.state = {
      theme,
    };
  }

  updateTheme(event: FormEvent, attr: string) {
    const newAttrValue = event.target.value;
    this.setState((oldState) => ({
      theme: {
        ...oldState.theme,
        [attr]: newAttrValue
      }
    }))
  }

  updateLabelStyle(event: FormEvent, type: string) {
    const newAttrValue = Number(event.target.value) || event.target.value;
    this.setState((oldState) => ({
      theme: {
        ...oldState.theme,
        labelStyle: {
          ...oldState.theme.labelStyle,
          [type]: newAttrValue
        }
      }
    }))
  }

  updateMargin(event: FormEvent, type: string) {
    const newAttrValue = Number(event.target.value) || event.target.value;
    this.setState((oldState) => ({
      theme: {
        ...oldState.theme,
        margin: {
          ...oldState.theme.margin,
          [type]: newAttrValue
        }
      }
    }))
  }

  render() {
    const handlers = {
      updateLabelStyle: this.updateLabelStyle,
      updateMargin: this.updateMargin,
      updateTheme: this.updateTheme,
    };
    const { theme } = this.state;

    return (
      <div>
        <ThemeForm theme={theme} {...handlers} />
        <h1>Axis Examples</h1>
        <AxisExample theme={theme} />
        <h1>Bar Plot Examples</h1>
        <BarPlotExample theme={theme} />
        <h1>Scatter Plot Examples</h1>
        <ScatterPlotExample theme={theme} />
      </div>
      );
  }
};

export default Examples;
