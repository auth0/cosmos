import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'
import FileInput from '.'

storiesOf('FileInput', module).add('simple', () => (
  <Example title="simple">
    <FileInput items={[{ file: { name: 'file1.txt', size: 3579 } }]} />
  </Example>
))

storiesOf('FileInput', module).add('multiple files', () => (
  <Example title="simple">
    <FileInput
      items={[
        { file: { name: 'file1.txt', size: 3579 } },
        { file: { name: 'file2.txt', size: 12356 } }
      ]}
      multiple
    />
  </Example>
))

storiesOf('FileInput', module).add('loading state', () => (
  <Example title="simple">
    <FileInput
      items={[
        { file: { name: 'file1.txt', size: 3579 }, loading: true },
        { file: { name: 'file2.txt', size: 12356 } }
      ]}
      multiple
    />
  </Example>
))

storiesOf('FileInput', module).add('file truncation', () => (
  <Example title="simple">
    <FileInput
      items={[
        {
          file: {
            name: 'this-file-is-more-than-50-characters-long-so-we-need-to-truncate.txt',
            size: 99887
          }
        }
      ]}
    />
  </Example>
))
