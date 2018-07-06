import React from 'react'
import styled from 'styled-components'
import Link, { StyledLink } from '../link'
import Icon from '../icon'

import { withRouter, Route } from 'react-router-dom'

import { fonts } from '@auth0/cosmos-tokens'

const StyledBreadcrumb = styled.ol`
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.medium};

  li {
    display: inline-block;
    vertical-align: middle;
  }
`

const PathActive = styled.li`
  color: #707070;
`

const PathAction = styled.li`
  ${StyledLink} {
    color: #707070;
    &:hover {
      color: #212121;
    }
  }
`

//hardcode path to show. Should add this on docs
const routeName = {
  '/': 'Home',
  '/component': 'Documentation',
  '/component/breadcrumb': 'Breadcrumb'
}

const findRouteName = url => routeName[url]

const getPaths = pathname => {
  const paths = ['/']

  if (pathname === '/') return paths

  pathname.split('/').reduce((prev, curr, index) => {
    const currPath = `${prev}/${curr}`
    paths.push(currPath)
    return currPath
  })

  return paths
}

const BreadcrumbItem = ({ match }) => {
  const routeName = findRouteName(match.url)

  if (routeName) {
    return match.isExact ? (
      <PathActive>{routeName}</PathActive>
    ) : (
      <PathAction>
        <Link href={match.url || ''}>{routeName}</Link>
        <Icon name="chevron-right-fill" size={12} color="#707070" />
      </PathAction>
    )
  }
  return null
}

const BreadcrumbBase = ({ rest, location: { pathname } }) => {
  const paths = getPaths(pathname)

  return (
    <StyledBreadcrumb>
      {paths.map(p => <Route {...rest} key={p} path={p} component={BreadcrumbItem} />)}
    </StyledBreadcrumb>
  )
}

const Breadcrumb = props => {
  return (
    <div>
      <Route path="/:path" component={BreadcrumbBase} {...props} />
    </div>
  )
}

export default withRouter(Breadcrumb)
