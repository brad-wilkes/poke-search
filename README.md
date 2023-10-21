# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If we are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


Filter functionality (in the context of useState and useEffect). The following does not apply when implementing state management with Jotai:

Input.tsx (this is how we capture input)
1. useState is used to create a local state variable called filter to hold the filter value entered by the user.
2. handleChange is a function that's called when the user changes the input value. It updates the filter state with the current value from the input field.
3. The Input component accepts a prop called setFilter from its parent component. setFilter is a function that will be used to update the filter value in the parent component.
4. In the handleChange function, the local filter state is updated with the new input value.
5. After updating the local state, the setFilter function is called with the new value, which effectively passes the filter value up to the parent component (e.g., App.js).

App.tsx (the parent component)
In the parent component (e.g., App.js), we use the Input component and pass a function (setFilter) that allows we to receive and update the filter value.
Here's how it works:

1. In the parent component, we define a state variable filter and a function setFilter using useState. This state will hold the filter value.
2. we use the Input component and pass the setFilter function as a prop (setFilter={setFilter}). This allows the Input component to call setFilter and update the filter state in the parent component.
3. The PokemonList component is also used with the filter prop. The filter value is passed to the PokemonList component, which can then use it to filter the list of Pokémon based on the user's input.

Project Summary
In summary, the Input component maintains a local state for the filter value, and when the user types in the input field, it updates the local state and also passes the filter value to the parent component (App.js) through the setFilter function. The PokemonList component receives this filter value as a prop and uses it to filter the list of Pokémon.

