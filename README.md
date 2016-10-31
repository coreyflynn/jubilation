[ ![Codeship Status for coreyflynn/jubilation](https://app.codeship.com/projects/f26958d0-70ad-0134-5cb5-4adf8fbeb56c/status?branch=master)](https://app.codeship.com/projects/178203)
# jubilation
Extensible React charting components

## Background
### Goals
React provides a clean approach to building declaritive and composable user interfaces. SVG provides a robust set of data visualization primitives. Jubilation provides a high level React wrapper around SVG for building composable charts and other types of data visualizations. The aim of Jubilation is to create an abstraction layer around SVG and eventually WebGL primitives for 2D and 3D charting applications, respectively.

### Prior art
The beginnings and approach of Jubilation are heavily inspired by [Victory](https://formidable.com/open-source/victory/docs). Many of the use cases originally solved by [Barista](http://cmap.github.io/barista/) provide the inspiration for Jubilation. Data visualization tend to outlive frontend frameworks and Jubilation attempts to breath new life into concepts from Barista in a more general and flexible way using React.


## Roadmap
### Initial efforts
The first phase of Jubilation development is focused on building out a minimal charting library that will serve basic needs using SVG primitives including
- scatter plots
- bar charts
- line plots
- combinations of the above

### WebGl
With basic plotting types established in SVG Jubilation development will focus on feature parity in WebGl to allow performant rendering of charts containing data that needs to scale beyong what is feasable in the DOM.

### Automatic switching
Once both SVG and WebGL charting is in place Jubilation will become smart enough to switch between SVG and WebGL rendering on the fly if you would like it two. The end goal is to provide an API that does not force developers to choose between DOM and Canvas implementations for their charting needs. Instead, authors should just focus on the data and let Jubilation decide how to handle it. By abstracting low level details Jubilation will provide a more composable and performant charting solution for data visualization authors
