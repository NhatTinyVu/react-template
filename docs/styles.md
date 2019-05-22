#### JSON: `must be sorted`.
  Should use plugin `sort JSON`

#### Naming

##### Folder: kebab-case

    src/component/button-navigation

##### Class File: PascalCase and jsx or tsx

    src/component/login/index.ts
    src/component/login/LoginForm.tsx
    src/component/login/LoginForm.test.tsx
    src/component/login/LoginForm.scss

#### Handle event

When defining props, should name as `onEvent`, when implementing, should name as `handleEvent`

    <Button onClick={handleClick} />
    handleClick = () => {}

#### Components
must have the `propTypes` and `defaultProps` for using props
