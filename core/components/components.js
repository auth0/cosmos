/*
  This file is an aggregator, to make it easier for folks to import components that they need

  example: `import { Input } from 'components'`
  instead of  `import Input from 'components/input'`
*/

/* eslint-disable import/first */

/* resets for font */
import './_helpers/globals'

/* internal */
import Box from './atoms/_box'
import Well from './atoms/_well'

/* atoms */
import Avatar from './atoms/avatar'
import Badge from './atoms/badge'
import Breadcrumb from './atoms/breadcrumb'
import Button from './atoms/button'
import Checkbox from './atoms/checkbox'
import Code from './atoms/code'
import Heading from './atoms/heading'
import Icon from './atoms/icon'
import Image from './atoms/image'
import Label from './atoms/label'
import Link from './atoms/link'
import Logo from './atoms/logo'
import Paragraph from './atoms/paragraph'
import Radio from './atoms/radio'
import Select from './atoms/select'
import Spinner from './atoms/spinner'
import Switch from './atoms/switch'
import Tag from './atoms/tag'
import Text from './atoms/text'
import TextArea from './atoms/textarea'
import TextInput from './atoms/text-input'
import Tooltip from './atoms/tooltip'

/* molecules */
import Alert from './atoms/alert'
import AvatarBlock from './molecules/avatar-block'
import ButtonGroup from './molecules/button-group'
import DangerZone from './molecules/danger-zone'
import Dialog from './molecules/dialog'
import EmptyState from './molecules/empty-state'
import Form from './molecules/form'
import FormGroup from './molecules/form-group'
import List from './molecules/list'
import PageHeader from './molecules/page-header'
import Pagination from './molecules/pagination'
import PaginationToolbar from './molecules/pagination-toolbar'
import Pager from './molecules/pager'
import ResourceList from './molecules/resource-list'
import Sidebar from './molecules/sidebar'
import Stack from './molecules/stack'
import Table from './molecules/table'
import Tabs from './molecules/tabs'

/* layouts (internal) */
import AppLayout from './molecules/_app-layout'
import ColumnLayout from './molecules/_column-layout'
import RowLayout from './molecules/_row-layout'
import GalleryLayout from './molecules/_gallery-layout'
import PageLayout from './molecules/_page-layout'
import StackLayout from './molecules/_stack-layout'

export {
  Alert,
  AppLayout,
  Avatar,
  AvatarBlock,
  Badge,
  Box,
  Breadcrumb,
  Button,
  ButtonGroup,
  Checkbox,
  Code,
  ColumnLayout,
  DangerZone,
  Dialog,
  EmptyState,
  Form,
  FormGroup,
  GalleryLayout,
  Heading,
  Icon,
  Image,
  Label,
  Link,
  List,
  Logo,
  PageHeader,
  PageLayout,
  Pagination,
  PaginationToolbar,
  Pager,
  Paragraph,
  Radio,
  ResourceList,
  RowLayout,
  Select,
  Sidebar,
  Spinner,
  Stack,
  StackLayout,
  Switch,
  Table,
  Tabs,
  Tag,
  Text,
  TextArea,
  TextInput,
  Tooltip,
  Well
}
