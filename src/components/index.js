/*
  This file is an aggregator, to make it easier for folks to import components that they need

  example: `import {Input} from 'components'`
  instead of  `import Input from 'components/input'`
*/

/* eslint-disable import/first */

/* demo */
import Box from './atoms/_box'
export { Box }

/* atoms */
import TextInput from './atoms/text-input'
export { TextInput }

import Select from './atoms/select'
export { Select }

import Switch from './atoms/switch'
export { Switch }

import Button from './atoms/button'
export { Button }

import TextArea from './atoms/textarea'
export { TextArea }

import Logo from './atoms/logo'
export { Logo }

import Icon from './atoms/icon'
export { Icon }

import Code from './atoms/code'
export { Code }

import Link from './atoms/link'
export { Link }

import Spinner from './atoms/spinner'
export { Spinner }

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Subheader,
  Text
} from './atoms/typography'
export { Heading1, Heading2, Heading3, Heading4, Heading5, Subheader, Text }

/* molecules */
import EmptyState from './molecules/empty-state'
export { EmptyState }

import Form from './molecules/form'
export { Form }

import Tabs from './molecules/tabs'
export { Tabs }
