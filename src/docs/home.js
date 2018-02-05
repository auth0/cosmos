import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { Heading1, Heading2, Subheader, Text } from './docs-components/typography'
import Pre from './docs-components/pre'
import Code from '../components'

const Container = styled.div`
  height: 100vh;
`

class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Documentation &mdash; Cosmos" />
        <Container>
          <Heading1>Getting Started</Heading1>
          <Text>Cosmos is a Design System to build Auth0 products.</Text>
          <Heading2>Install Cosmos in your application</Heading2>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum nisi non
            augue laoreet maximus. Sed placerat justo vitae metus rhoncus, vel eleifend neque
            rhoncus.
          </Text>

          <Pre>npm install auth0/cosmos</Pre>

          <Text>
            Proin a mauris semper, volutpat magna nec, mattis mi. Duis vitae tortor neque.
            Suspendisse ultricies varius varius. Nunc ornare nulla nec erat pharetra feugiat. In hac
            habitasse platea dictumst. Vivamus lacinia faucibus consequat. Cras sed purus congue,
            porta neque nec, faucibus diam.
          </Text>

          <Heading2>How to contribute</Heading2>
          <Text>
            Aenean eu <a href="">ipsum ligula</a>. Duis fringilla nec nisi id bibendum. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Quisque libero lacus, mattis at
            interdum sit amet, varius eu nisl. Donec viverra hendrerit cursus. Nam risus odio,
            facilisis vitae tortor non, cursus sollicitudin arcu.
          </Text>

          <Text>
            Morbi posuere finibus velit, sed iaculis dui egestas at. Quisque a molestie mauris, at
            mollis nunc. Proin faucibus odio eu orci luctus, vel viverra dui dignissim. Aenean
            tellus felis, aliquet at nisl a, pretium venenatis magna. Praesent sit amet orci felis.
            Nulla rutrum mauris erat, in vestibulum augue pretium in. Proin viverra augue vitae
            accumsan bibendum. Duis quis ante facilisis enim convallis pellentesque.
          </Text>
        </Container>
      </div>
    )
  }
}

export default Home
