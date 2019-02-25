---
title: Using Cosmos
template: page
---

## Installation

To add Cosmos to your React application, run:

```
$ yarn add @auth0/cosmos
```

If you prefer npm, run this command instead:

```
$ npm install --save @auth0/cosmos
```

That is all you need to do, you are now ready to use it in your app, no build step needed.

### Fonts

Cosmos assumes you have licensed fonts available on your app: Fakt-web and Roboto Mono. Auth0 employees can grab these from the [cosmos-fonts repository](https://github.com/auth0/cosmos-fonts).

---

## Using components

Import components that you want from the library:

```
import {Button} from '@auth0/cosmos'
```

Use them along with you React components:

```
const Actions = () => (
  <div>
    <Button appearance="primary" onClick={this.save}>Save changes</Button>
    <Button onClick={this.clear}>Clear</Button>
  </div>
)
```

To learn more about the components and the props they offer, pick a component from the sidebar on the left. You can also look at example code from our Manage Clients proof of concept repo.
