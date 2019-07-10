import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'
import FileInput from '.';


storiesOf('FileInput', module).add('simple', () => (
  <Example title="simple">
    <FileInput files={[{ name: 'file1.txt', size: 3579 }]} />
  </Example>
))

storiesOf('FileInput', module).add('multiple files', () => (
  <Example title="simple">
    <FileInput files={[{ name: 'file1.txt', size: 3579 }, { name: 'file2.txt', size: 12356 }]} multiple />
  </Example>
))

storiesOf('FileInput', module).add('file truncation', () => (
  <Example title="simple">
    <FileInput files={[{ name: 'this-file-is-more-than-50-characters-long-so-we-need-to-truncate.txt', size: 99887 }]} />
  </Example>
))