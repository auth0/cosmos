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
import Input from './atoms/input'
export { Input }

import Select from './atoms/select'
export { Select }

import Button from './atoms/button'
export { Button }

import Textarea from './atoms/textarea'
export { Textarea }

import Logo from './atoms/logo'
export { Logo }

import Icon from './atoms/icon'
export { Icon }

import { Heading1, Heading2, Heading3, Subheader, Text } from './atoms/typography'
export { Heading1, Heading2, Heading3, Subheader, Text }

/* molecules */
import Form from './molecules/form'
export { Form }
