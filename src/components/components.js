/*
  This file is an aggregator, to make it easier for folks to import components that they need

  example: `import { Input } from 'components'`
  instead of  `import Input from 'components/input'`
*/

/* eslint-disable import/first */

/* resets for font */
import './_helpers/globals'

/* demo */
import Box from './atoms/_box'

/* atoms */
import Avatar from './atoms/avatar'
import Badge from './atoms/badge'
import Breadcrumb from './atoms/breadcrumb'
import Button from './atoms/button'
import Code from './atoms/code'
import Heading from './atoms/heading'
import Icon from './atoms/icon'
import Image from './atoms/image'
import Label from './atoms/label'
import Link from './atoms/link'
import Logo from './atoms/logo'
import Overlay from './atoms/overlay'
import Paragraph from './atoms/paragraph'
import Radio from './atoms/radio'
import Select from './atoms/select'
import Spinner from './atoms/spinner'
import Switch from './atoms/switch'
import Text from './atoms/text'
import TextArea from './atoms/textarea'
import TextInput from './atoms/text-input'
import Thumbnail from './atoms/thumbnail'
import Tooltip from './atoms/tooltip'

/* molecules */
import Alert from './atoms/alert'
import ButtonGroup from './molecules/button-group'
import Dialog from './molecules/dialog'
import EmptyState from './molecules/empty-state'
import Form from './molecules/form'
import FormGroup from './molecules/form-group'
import List from './molecules/list'
import PageHeader from './molecules/page-header'
import ResourceList from './molecules/resource-list'
import Sidebar from './molecules/sidebar'
import Stack from './molecules/stack'
import Table from './molecules/table'
import Tabs from './molecules/tabs'

export {
  Alert,
  Avatar,
  Badge,
  Box,
  Breadcrumb,
  Button,
  ButtonGroup,
  Code,
  Dialog,
  EmptyState,
  Form,
  FormGroup,
  Heading,
  Icon,
  Image,
  Label,
  Link,
  List,
  Logo,
  Overlay,
  PageHeader,
  Paragraph,
  Radio,
  ResourceList,
  Select,
  Sidebar,
  Spinner,
  Stack,
  Switch,
  Table,
  Tabs,
  Text,
  TextArea,
  TextInput,
  Thumbnail,
  Tooltip
}
