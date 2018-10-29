
<img src="https://cdn.auth0.com/website/cosmos/github/readme-header.png">

&nbsp;

# [Cosmos](https://auth0-cosmos.now.sh/)

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

> A Design System For Auth0 Products.

## What is a design system?

> “A set of shared and integrated principles and patterns that define the overall design of a product.” — Karri Saarinen @ Airbnb

The aim of Cosmos is to help Auth0 designers and developers deliver work faster and better. It provides teams with a common language and encourages adherence to design guidelines with compliant components right out of the box.

We are currently building our roadmap and initial components inventory to estimate the v1 release date. We are in active development and testing with selected teams, so the components API may change frequently. However, you can play with the alpha version today! Your feedback will help us shape Cosmos.

## Usage

### Getting Started

See the documentation at https://auth0-cosmos.now.sh/docs/ for more information about using Cosmos.

#### Quicklinks:

- [Getting started](https://auth0-cosmos.now.sh/docs/)
- [How to use Cosmos](https://auth0-cosmos.now.sh/docs/#/usage)
- [Sandbox](https://auth0-cosmos.now.sh/sandbox) - Storybook
- [Contribution Guide](https://auth0-cosmos.now.sh/docs/#/contribution-guide)
- [Components Overview](https://auth0-cosmos.now.sh/docs/#/overview)
- [Playground](https://auth0-cosmos.now.sh/docs/#/playground) 

### Installation

To add Cosmos to your React application, run:

```
$ yarn add @auth0/cosmos
```

If you prefer npm, run this command instead:

```
$ npm install --save @auth0/cosmos
```

That's all you need to do: no build required!


### Using Cosmos components in your application

```js
import { Button } from '@auth0/cosmos'
```

and use them along with you React components:

``` js
  const Actions = () => (
    <div>
      	<h1>Hello Word!</h1>
	<Button size="default" appearance="cta" onClick>Cosmos Documentation</Button>
    </div>
  )
```
            
To learn more about the components and the props they offer, check the [Cosmos documentation](https://auth0-cosmos.now.sh/docs/#/). Pick a component from the sidebar to find examples and configuration options. 


## Development

Cosmos uses [styled-components](https://www.styled-components.com) under the hood, so creating a button is as easy as

```js
import styled from '@auth0/cosmos/styled'

const Wrapper = styled.div`
  background-color: grey;
`

const Actions = () => (
  <Wrapper>
    <Button appearance="primary" onClick={this.save}>Save changes</Button>
    <Button onClick={this.clear}>Clear</Button>
  </Wrapper>
)
```

Please check out our [Contribution guidelines](https://auth0-cosmos.now.sh/docs/#/contribution-guide) for detailed information on how to contribute to the project.

## Feedback

Issues or feature requests can be created on our [GitHub page](https://github.com/auth0/cosmos/issues) or on [Slack](https://auth0.slack.com/messages/C5ZK0DD8X). You can use the [playground](https://auth0-cosmos.now.sh/docs/#/playground) to test and share code, report bugs and ask for feedback.
