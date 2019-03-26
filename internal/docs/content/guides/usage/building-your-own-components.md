Cosmos uses `styled-components` under the hood. We recommend using it to create presentational components.

You can import it from cosmos to make sure you use the same version:

```js
import styled from "@auth0/cosmos/styled"
```

and use them to create new components:

```js
import styled from "@auth0/cosmos/styled"

const Wrapper = styled.div`
  background-color: grey;
`

const Actions = () => (
  <Wrapper>
    <Button appearance="primary" onClick={this.save}>
      Save changes
    </Button>
    <Button onClick={this.clear}>Clear</Button>
  </Wrapper>
)
```

`styled-components` has very good [documentation](https://www.styled-components.com/) where you can learn how to use it.
