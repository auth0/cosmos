import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import { Button } from '@auth0/cosmos'

storiesOf('Button', module).add('wrapping', () => (
  <div>
    <Example title="Button Wrapping" align="center">
      <div style={{ width: 150 }}>
        <Button size="large">Large</Button>
        <Button>Default</Button>
        <Button size="compressed">Compressed</Button>
        <Button size="small">Small</Button>
      </div>
    </Example>
    <Example title="Button Wrapping + loading" align="center">
      <div style={{ width: 150 }}>
        <Button loading size="large">
          Large
        </Button>
        <Button loading>Default</Button>
        <Button loading size="compressed">
          Compressed
        </Button>
        <Button loading size="small">
          Small
        </Button>
      </div>
    </Example>
    <Example title="Button Wrapping + success" align="center">
      <div style={{ width: 150 }}>
        <Button success size="large">
          Large
        </Button>
        <Button success>Default</Button>
        <Button success size="compressed">
          Compressed
        </Button>
        <Button success size="small">
          Small
        </Button>
      </div>
    </Example>
  </div>
))
