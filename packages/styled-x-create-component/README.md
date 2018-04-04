# styled-x-create-component

[![npm](https://img.shields.io/npm/v/styled-x-create-component.svg)](https://www.npmjs.com/package/styled-x-create-component)
[![npm](https://img.shields.io/npm/dt/styled-x-create-component.svg)](https://www.npmjs.com/package/styled-x-create-component)
[![npm](https://img.shields.io/npm/l/styled-x-create-component.svg)](https://github.com/negativetwelve/styled-x/blob/master/LICENSE)

Easily create cross-platform `styled-x` components which can be extended to create design systems. Compatible with React DOM and React Native for truly cross-platform libraries.

## Getting Started

Install `styled-x-create-component` using `yarn`:

```shell
yarn add styled-x-create-component
```

## Usage

Here's an example of how we wrap a `react-x` TextInput component into a `styled-x` TextInput so it can be extended.

```javascript
// Libraries
import createComponent from 'styled-x-create-component';
import TextInput from 'react-x-text-input';

export default createComponent(TextInput);
```

## Contributing

If you have any ideas on how this module could be better, [create an Issue](https://github.com/negativetwelve/styled-x/issues) or [submit a PR](https://github.com/negativetwelve/styled-x/pulls).
