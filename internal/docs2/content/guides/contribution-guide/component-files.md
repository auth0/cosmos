Here are the things that make a component good:
Each component directory has these 5 files:

- `component.js`
  This is where all the component code sits.
  We create a `Element` with `styled-components` and use that in the React component. This is also exported so that compound components can style them if needed.
  `propTypes` and `defaultProps` help us validate props and build the documentation.

  ```jsx
  import React from "react"
  import styled from "styled-components"

  const AvatarElement = styled.div`
    border-radius: 50%;
  `

  const Avatar = props => (
    <AvatarElement size={props.size}>
      <img src={props.image} />
    </AvatarElement>
  )

  Avatar.propTypes = {}
  Avatar.defaultProps = {}

  export default Avatar
  export { AvatarElement }
  ```

- `index.js`
  Documentation is pulled from markdown files, there are a few different sections in the document:

  `````markdown
  # Metadata:

  ```meta
  category: Actions
  description: Displays an image representing a user or resource
  unstable: true
  ```

  # Props table:

  ```jsx
  <Avatar {props} defaults={{size: 'medium'}} />
  ```

  # Description:

  You can use an `Avatar` to display an image that represents a user or a resource.

  # Examples:

  With use case

  ```js
  <Avatar type="user" image="https://cdn.auth0.com/logo.svg" />
  ```
  `````

- `component.story.js`
  Story for visual tests, these are compared for every pull request

  ```jsx
  import React from "react"
  import { storiesOf } from "@storybook/react"
  import { Avatar } from "@auth0/cosmos"

  storiesOf("Avatar").add("with images", () => (
    <div>
      <Avatar size="small" image="https://cdn.auth0.com/logo.svg" />
      <Avatar size="medium" image="https://cdn.auth0.com/logo.svg" />
    </div>
  ))
  ```

- \+ you can add as many files as you need
