# Svelte + TS

## Installed with

```shell
npm init vite
```

=> selecting the `svelte` option


## Run in dev mode

```shell
yarn dev
```

## Run in usage mode

```shell
npm run usage --package base/social-button
```

## Motivation

1/ Plug and play components

The aim is to to create a library of svelte ui components that can be used through simple plug and play. The only dependency is on design tokens that can be injected in the root. 

2/ Test driven development kind of approach with unit tests but for the UI

When it has become common to rely on storybook to provide an interactive preview of each component, this approach is most useful with an already established design system, with small number of updates. 

We adopt a different approach, that we call usage based, by which we define use scenarios covering both default and edge cases at the time of development.
## Credits

Based on the css variables listed in:

https://github.com/heybokeh/pollen

and the components listed in: 

https://github.com/heybokeh/design
