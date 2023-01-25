<p align="center">
  <a href="https://npmjs.com/package/vue-typed-props"><img src="https://img.shields.io/npm/v/vue-typed-props.svg" alt="npm package"></a>
  <img src="https://img.shields.io/npm/dw/vue-typed-props" >
  <img alt="GitHub" src="https://img.shields.io/github/license/web-ts/vue-typed-props">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/web-ts/vue-typed-props">
  <a href="https://gitmoji.dev"><img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg" alt="Gitmoji"></a>
</p>
<br/>

# Vue Typed Props

> For a more elegant way of typing props in tsx/render function components.

This library provides a more elegant and efficient way to define props, making it easier to manage your components and improve the overall quality of your code.

As every Vue developer knows if we want to use `tsx` or the `h` render function we are stuck with declaring props and adding type declarations via the `as PropType<T>` workaround.

This library aims at providing a more elegant solution to the problem.

## Example usage:

```ts
// Default way:
export default defineComponent({
  props: {
    id: { type: Number as PropType<number>, required: true, default: 100 },
    title: { type: String as PropType<string>, required: true },
    description: { type: String as PropType<string | undefined> },
    isLive: { type: Boolean as PropType<boolean | undefined> },
    author: { type: Object as PropType<Author | null | undefined> },
    comments: { type: Array as PropType<Array<Comment> | undefined>, default: () => [] },
    action: { type: Function as PropType<(v: string) => 0>, required: true },
    position: { type: [String, Number] as PropType<string | number>, required: true }
  }
});

// Will become:

import prop from "vue-typed-props";

export default defineComponent({
  props: {
    id: prop.required.number(100),
    title: prop.required.string(),
    description: prop.string(),
    isLive: prop.boolean(),
    author: prop.object<Author | null>(),
    comments: prop.array<Comment>([]),
    action: prop.required.func<(v: string) => 0>(),
    position: prop.required.generic<number | string>() // this does not do runtime type checking
  }
});
```

## Available Functions

This library covers the following types:

- numbers with the `number` function
- strings with the `string` function
- booleans with the `boolean` function
- objects with the `object` function
- arrays with the `array` function
- functions with the `func` function

All the above functions accept a default value as a parameter.

For required props use `prop.required.` instead of `prop.`

## Generics

For generic types use the `generic` and `required.generic` functions.

> Note: The `generic` function does not do runtime type checking. and essentially just casts the value to the type you specify.

```ts
import prop from "vue-typed-props";

const sample = prop.required.generic<number | string>();

console.log(sample); // { type: undefined, required: true, default: undefined }

const withDefault = prop.generic<number | string>("hello");

console.log(withDefault); // { type: undefined, default: "hello" }

const withObject = prop.generic<{ name: string; age: number } | number>({ name: "John", age: 20 });

console.log(withObject); // { type: undefined, default: ()=> ({name: "John", age: 20}) }
```
