import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { Heading1, Heading2, Heading3, Subheader, Text, Link } from '../docs-components/typography'

import Tag from '../docs-components/tag'
import CodeBlock from '../docs-components/code-block'

class MigrationGuide extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Migration guide &ndash; Cosmos" />
        <Heading1>
          Migrating to 1.0.0 <Tag text="Work in progress" />
        </Heading1>
        <Subheader>This is a work in progress to help migrate to 1.0.0</Subheader>
        <Heading2>API Changes</Heading2>

        <div>
          <Heading3>Alert</Heading3>

          <Link href="#/component/alert">Open docs</Link>

          <CodeBlock language="jsx">
            {`
// replace text:string
<Alert text="This is important" />

// with children:string
<Alert>This is important</Alert>
        `}
          </CodeBlock>
        </div>

        <div>
          <Heading3>TextInput</Heading3>

          <Link href="#/component/text-input">Open docs</Link>

          <CodeBlock language="jsx">
            {`
// replace error:string
<TextInput error="Please enter name" />

// with hasError:boolean
<TextInput hasError={true} />
        `}
          </CodeBlock>
        </div>

        <div>
          <Heading3>TextArea</Heading3>

          <Link href="#/component/text-area">Open docs</Link>

          <CodeBlock language="jsx">
            {`
// replace error:string
<TextInput error="Please enter name" />

// with hasError:boolean
<TextInput hasError={true} />
        `}
          </CodeBlock>
        </div>

        <div>
          <Heading3>Switch</Heading3>

          <Link href="#/component/switch">Open docs</Link>

          <CodeBlock language="jsx">
            {`
// replace onToggle:function
<Switch onToggle={value => console.log(value)} />

// with onChange:function
<Switch onChange={value => console.log(value)} />
        `}
          </CodeBlock>
        </div>

        <div>
          <Heading3>AvatarBlock</Heading3>

          <Link href="#/component/avatar-block">Open docs</Link>

          <CodeBlock language="jsx">
            {`
// replace href:string
<AvatarBlock href="https://auth0.com" title="Title with link"/>

// with link:shape
<AvatarBlock link={{ href: 'https://auth0.com', target:'_blank' }} title="Title with link"/>
        `}
          </CodeBlock>
        </div>

        <div>
          <Heading3>EmptyState</Heading3>

          <Link href="#/component/empty-state">Open docs</Link>

          <CodeBlock language="jsx">
            {`
// replace text:string
<EmptyState text="No items have been added to this section." />

// with children:element
<EmptyState>No items have been added to this section</EmptyState>
        `}
          </CodeBlock>
        </div>

        <div>
          <Heading3>ResourceList</Heading3>

          <Link href="#/component/resource-list">Open docs</Link>

          <CodeBlock language="jsx">
            {`
// replace actions:[shape]
<ResourceList
  actions={[
    { icon:"settings", label: "Settings", onClick={fn} },
    { icon:"delete",   label: "Delete", onClick={fn} }
  ]}
/>

// with actions:[elements]
<ResourceList
  actions={[
    <Button icon="settings" onClick={fn}>Settings</Button>,
    <Button icon="delete"   onClick={fn}>Delete</Button>
  ]}
/>
        `}
          </CodeBlock>
        </div>

        <br />
        <br />
        <Heading2>Layout changes</Heading2>
        <Text>Coming soon - margins</Text>
      </div>
    )
  }
}

export default MigrationGuide
