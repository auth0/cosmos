import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { Heading1, Heading2, Text, Link, List, ListItem } from './docs-components/typography'
import { Code } from '@auth0/cosmos'

const Container = styled.div``

class FAQs extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Documentation &mdash; Cosmos" />
        <Container>
          <Heading1>FAQs</Heading1>
          <Heading2>When will Cosmos be ready?</Heading2>
          <Text>
            We are currently building our roadmap and initial components inventory to estimate the
            v1 release date. It is being tested with selected teams to get early feedback.
          </Text>
          <Text>
            However, you can play with it with <Link href="/docs"> the alpha version</Link> today!
            We are in active development, so the component API might change frequently. Your
            feedback will help us shape Cosmos better.
          </Text>
          <Text>We’ll publish the complete roadmap in this website soon.</Text>
          {/*  */}
          <Heading2>
            The component I need doesn't exist in Cosmos, how do I request for a component?
          </Heading2>
          <Text>
            The easiest way to ask to request a new component or customization to an existing one is
            to <Link href="https://github.com/auth0/Cosmos/issues">create an issue</Link> on GitHub
            or <Link href="https://auth0.slack.com/messages/C5ZK0DD8X">talk to us on Slack.</Link>
          </Text>
          {/*  */}
          <Heading2>How does versioning happen? How do I get updates?</Heading2>
          <Text>
            Cosmos is distributed via <Code>npm</Code>, you can update the version and get the
            latest features.
          </Text>
          <Text>
            Once Cosmos comes out of it's alpha status, It will follow <Code>semver</Code> which
            means we will introduce breaking changes only in major versions (= major redesign, so
            not anytime soon). If you use a component from Cosmos, you can be sure that it will not
            break when you update Cosmos version.
          </Text>
          <Text>
            As a team not directly working on the product, we are also aware that we will not always
            be aware (we try) of the needs. For this reason, some components will be released in an
            experimental mode first before they make it into stable. You can join the discussion
            about the{' '}
            <Link href="https://github.com/auth0/cosmos/issues/3">
              component release cycle here.
            </Link>
          </Text>
          {/*  */}
          <Heading2>
            Why is Cosmos built from scratch instead of using an existing library?
          </Heading2>
          <Text>
            This is a question we asked ourselves early on: Can we adopt an existing component
            library and build on top of it? (like blueprint or even a smaller bare bones library
            like skeleton)
          </Text>
          <Text>
            It makes more sense to build out our component library from scratch because of the
            following reasons:
          </Text>
          <List>
            <ListItem>
              We can reach the same visual result by adopting a component library and customising
              it, but the underlying architecture would not be as good as we want it to be. This is
              not to say that we are smarter than the creators of these component libraries{' '}
              <span role="img" aria-label="sweat-smile">
                😅
              </span>, only that the end result will be an amalgam of the decisions taken by the
              original authors and the decisions taken by our team in the context of auth0. (This is
              different than adapting a library like hapi.js or react, because we **use** the public
              APIs that are made available by these libraries, we don't have to customise the inner
              parts)
            </ListItem>
            <ListItem>
              Building it from scratch will give us a greater level of understanding and control to
              **craft** a better system. And we can implement smart optimisations for reducing
              bundle sizes/improving performance and improving developer experience because we
              control the core.
            </ListItem>
            <ListItem>
              The component library is just one of the pieces of the component library, our brand's
              design philosophy and tokens are more significant -{' '}
              <Link href="https://paper.dropbox.com/doc/Introduction-to-Design-Systems-QfcpzS4woLRnxL0nhAjyQ#:uid=265215018043384192160227&h2=%F0%9F%98%AB-But%2C-isn%E2%80%99t-it-a-Styleguide">
                Read more on this
              </Link>. It will be very tricky to adopt a component library and make it work with our
              lower level of abstractions.
            </ListItem>
            <ListItem>
              Because of the above reasons, It will be easier + faster to implement new components
              or modifications to existing components when a product team needs them. In the long
              run, we wish that product teams are able to contribute to the design system, and
              having an in-house expertise will help*
            </ListItem>
            <ListItem>
              This isn't to say that we will develop our design systems in a cave. We will actively
              ~steal~ take inspiration from other design systems for patterns and architecture. In
              addition to that, we will adapt complex components from the community and build thin
              abstractions over them.
            </ListItem>
          </List>
          It's useful to state the cons of this approach, so that we make sure we are making a
          conscious decision:
          <List>
            <ListItem>
              It will take more time and humans to build out the design system in the short term.
              It's an investment which will reap its rewards over time.
            </ListItem>
            <ListItem>
              Even though we'll try to do our best, our implementation will not be battle tested by
              the wider web community that same open source frameworks have access to.
            </ListItem>
            <ListItem>
              This is a comment on reason number 4, even though we will have in-house expertise and
              support for teams wanting to contribute to the design system, the benefit of having
              blog posts and stack overflow questions for an established library are unmatched.
            </ListItem>
          </List>
        </Container>
      </div>
    )
  }
}

export default FAQs
