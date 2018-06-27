import React from 'react'
import { withRouter, Route, Link } from 'react-router-dom'

const routeName = {
  '/': 'Home',
  '/docs': 'Documentation',
  '/docs/breadcrumb': 'Breadcrumb'
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
      <li className="active">{routeName}</li>
    ) : (
      <li>
        <Link to={match.url || ''}>{routeName}</Link>
      </li>
    )
  }
  return null
}

const BreadcrumbBase = ({ rest, location: { pathname } }) => {
  const paths = getPaths(pathname)

  return (
    <ol className="breadcrumb page-breadcrumb">
      {paths.map(p => <Route {...rest} key={p} path={p} component={BreadcrumbItem} />)}
    </ol>
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
