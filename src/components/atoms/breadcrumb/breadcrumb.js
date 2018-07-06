import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link, { StyledLink } from '../link'
import Icon from '../icon'

import { withRouter, Route } from 'react-router-dom'

import { fonts, spacing } from '@auth0/cosmos-tokens'

const StyledBreadcrumb = styled.ol`
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.medium};

  ${Icon.Element} {
    position: relative;
    top: -2px;
    margin-right: ${spacing.xsmall};
  }
`

const StyledBreadcrumbBase = styled.ol`
  display: inline-block;

  li {
    display: inline-block;
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

  ${Icon.Element} {
    top: -1px;
    margin: 0 ${spacing.xsmall};
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
        <Icon name="chevron-right-fill" size={12} color="#9B9B9B" />
      </PathAction>
    )
  }
  return null
}

const BreadcrumbBase = ({ rest, location: { pathname } }) => {
  const paths = getPaths(pathname)

  return (
    <StyledBreadcrumbBase>
      {paths.map(p => <Route {...rest} key={p} path={p} component={BreadcrumbItem} />)}
    </StyledBreadcrumbBase>
  )
}

const Breadcrumb = props => {
  return (
    <StyledBreadcrumb>
      {props.homeIcon ? <Icon name="home-fill" size={12} color="#212121" /> : null}
      <Route path="/:path" component={BreadcrumbBase} {...props} />
    </StyledBreadcrumb>
  )
}

Breadcrumb.propTypes = {
  /** Show/Hide home icon at the beginning */
  homeIcon: PropTypes.bool
}

Breadcrumb.defaultProps = {
  homeIcon: true
}

export default withRouter(Breadcrumb)
