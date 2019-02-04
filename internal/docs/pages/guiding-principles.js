import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { Heading1, Heading2, Subheader, Text } from '../docs-components/typography'

const Container = styled.div``

class GuidingPrinciples extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Guiding Principles &ndash; Cosmos" />
        <Container>
          <Heading1>Guiding principles</Heading1>
          <Subheader>
            The aim of Cosmos is to help <strong>designers</strong> and <strong>developers</strong>{' '}
            deliver work faster and better.
          </Subheader>

          <Heading2>Common language for all teams</Heading2>
          <Text>
            Code (components, tokens, etc.) and design assets (icons, etc.) should always have the
            same naming convention/API and be kept in sync. The documentation is the tool to help
            bridge the gap between design, engineering and product.
          </Text>

          <Heading2>Encourage the best UX/UI practices</Heading2>
          <Text>
            We should provide guidelines on when to use components and patterns (or not) to ensure
            consistency throughout our products (and within).
          </Text>

          <Heading2>Have meaningful defaults, bake convention in the components</Heading2>
          <Text>
            Developers should be able to pick a component create the recommended design guideline
            out of the box. Optimise for ease of implementation. Bonus: Challenge conventions all
            the time.
          </Text>

          <Heading2>
            Provide powerful abstractions while exposing the inner components at the same time
          </Heading2>
          <Text>
            It should be easy + fast to build entire pages with cosmos, but at no point should the
            developer feel limited by the system. If there's a need to go out of the recommended
            way, they should be able to compose it with the inner/base components.
          </Text>

          <Heading2>Be open about progress, direction, intentions</Heading2>
          <Text />
        </Container>
      </div>
    )
  }
}

export default GuidingPrinciples
