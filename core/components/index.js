/* resets for font */
import { resets, apply } from './_helpers/globals'

import {
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
  DangerZone,
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
  PageHeader,
  Pagination,
  PaginationToolbar,
  Pager,
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
  Tag,
  Text,
  TextArea,
  TextInput,
  Tooltip,
  Well,
  ColumnLayout,
  GalleryLayout,
  RowLayout,
  PageLayout,
  StackLayout
} from './components'

const manualResets = process && process.env && process.env.COSMOS_MANUAL_RESETS

if (!manualResets) {
  apply()
}

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
  DangerZone,
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
  PageHeader,
  Pagination,
  PaginationToolbar,
  Pager,
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
  Tag,
  Text,
  TextArea,
  TextInput,
  Tooltip,
  Well,
  ColumnLayout,
  GalleryLayout,
  RowLayout,
  PageLayout,
  StackLayout,
  resets
}
