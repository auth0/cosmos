<img src="https://cdn.auth0.com/website/cosmos/github/readme-header.png">

&nbsp;

# [Cosmos](https://auth0-cosmos.now.sh/)

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components) [![npm version](https://img.shields.io/npm/v/@auth0/cosmos.svg)](https://npmjs.com/@auth0/cosmos)

> A Design System For Auth0 Products.

### What is a design system?

> “A set of shared and integrated principles and patterns that define the overall design of a product.” — Karri Saarinen @ Airbnb

The aim of Cosmos is to help Auth0 designers and developers deliver work faster and better. It provides teams with a common language and encourages adherence to design guidelines with compliant components right out of the box.

We are currently building our roadmap and initial components inventory to estimate the v1 release date. We are in active development and testing with selected teams, so the components API may change frequently. However, you can play with the alpha version today! Your feedback will help us shape Cosmos.

See the documentation at https://auth0-cosmos.now.sh/docs

&nbsp;
&nbsp;

#### Quicklinks:

- [Getting started](https://auth0-cosmos.now.sh/docs/)
- [How to use Cosmos](https://auth0-cosmos.now.sh/docs/#/usage)
- [Components Overview](https://auth0-cosmos.now.sh/docs/#/overview)
- [Playground](https://auth0-cosmos.now.sh/docs/#/playground)
- [Sandbox](https://auth0-cosmos.now.sh/sandbox) - Storybook
- [Contribution Guide](https://auth0-cosmos.now.sh/docs/#/contribution-guide)

&nbsp;
&nbsp;

### Installation

To add Cosmos to your React application, run:

```
$ yarn add @auth0/cosmos
```

If you prefer npm, run this command instead:

```
$ npm install --save @auth0/cosmos
```

That's all you need to do: no config changes required!

&nbsp;
&nbsp;

### Using Cosmos components in your application

1. Include any of available components:

```js
import { Button } from '@auth0/cosmos'
```

2. Use them along your React components:

```js
const Actions = () => (
  <div>
    <h1>Hello Word!</h1>
    <Button size="default" appearance="cta" onClick>
      Cosmos Documentation
    </Button>
  </div>
)
```

To learn more about the components and the props they offer, check the [Cosmos documentation](https://auth0-cosmos.now.sh/docs/#/). Pick a component from the sidebar to find examples and configuration options.

&nbsp;
&nbsp;

## Contribute

There's a lot to write here, we maintain it in our docs: [Contribution guidelines](https://auth0-cosmos.now.sh/docs/#/contribution-guide)

&nbsp;
&nbsp;

## Feedback

Issues or feature requests can be created on our [GitHub page](https://github.com/auth0/cosmos/issues) or on [Slack](https://auth0.slack.com/messages/C5ZK0DD8X) (internal). You can use the [playground](https://auth0-cosmos.now.sh/docs/#/playground) to test and share code, report bugs and ask for feedback.

## Thanks

<a href="https://www.browserstack.com/">
  <img src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" alt="BrowserStack Logo" width="490" height="106">
</a>

Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!
