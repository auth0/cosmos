import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Button, ButtonGroup } from '@auth0/cosmos'

storiesOf('Button').add('size', () => (
  <div>
    <Example title="Button Sizes" align="center">
      <Stack>
        <Button size="large">Large</Button>
        <Button>Default</Button>
        <Button size="compressed">Compressed</Button>
        <Button size="small">Small</Button>
      </Stack>
    </Example>
    <Example title="Button Sizes + loading" align="center">
      <Stack>
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
      </Stack>
    </Example>
    <Example title="Button Sizes + success" align="center">
      <Stack>
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
      </Stack>
    </Example>
  </div>
))
