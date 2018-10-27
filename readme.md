<img src="https://raw.githubusercontent.com/auth0/cosmos/master/assets/cosmos.png">

&nbsp;&nbsp;

### A Design System For Auth0 Products

#### [👉 Start here 👈](https://auth0-cosmos.now.sh/docs)

### What is a design system?

> “A set of shared and integrated principles and patterns that define the overall design of a product.” — Karri Saarinen @ Airbnb

The aim of the Cosmos project is to help designers and developers deliver work faster and better.
It provides teams with a [common language](https://auth0-cosmos.now.sh/docs/#/automation) and encourages adherence to design guidelines with compliant components right out of the box.

We are currently building our roadmap and initial components inventory to estimate the v1 release date.
We are in active development and testing with selected teams, so the components API may change frequently.
However, you can play with the alpha version today!
Your feedback helps us shape Cosmos.

### Quickstart

#### Installation
To add Cosmos to your React application, run

    $ yarn add @auth0/cosmos

If you prefer npm, run this command instead:

    $ npm install --save @auth0/cosmos

That's all you need to do: no build required.

#### Usage
Cosmos uses [styled-components](https://www.styled-components.com) under the hood, so creating a button is as easy as

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

Check out more examples in the [sandbox](https://auth0-cosmos.now.sh/sandbox).
