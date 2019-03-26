Import components that you want from the library

```js
import { Button } from "@auth0/cosmos"
```

and use them along with you React components:

```js
const Actions = () => (
  <div>
    <Button appearance="primary" onClick={this.save}>
      Save changes
    </Button>
    <Button onClick={this.clear}>Clear</Button>
  </div>
)
```

To learn more about the components and the `props` they offer, pick a component from the sidebar on the left.

You can also look at example code from our Manage Clients [proof of concept repo](https://github.com/auth0/cosmos/tree/master/src/manage).
