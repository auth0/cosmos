import React from 'react'
import { Avatar, Tabs, Breadcrumb, PageLayout, RowLayout } from '@auth0/cosmos'

import Settings from './settings'
import Advanced from './advanced'
import Connections from './connections'
import ApplicationPageHeader from '../../components/application-page-header'
import ApplicationTypeImages from '../../components/application-types-images'

class ApplicationDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedTab: 1 }
  }

  handleSelected(selectedTab) {
    this.setState({ selectedTab })
  }

  render() {
    return (
      <PageLayout>
        <PageLayout.Header>
          <RowLayout gutter="condensed">
            <Breadcrumb>
              <Breadcrumb.Link href="#/applications" icon="arrow-left-fill">
                Back to Applications
              </Breadcrumb.Link>
            </Breadcrumb>
            <ApplicationPageHeader
              title="API Explorer Application"
              type={{
                name: 'Non Interactive',
                applicationId: this.props.match.params.applicationId
              }}
              logo={
                <Avatar
                  type="resource"
                  size="xlarge"
                  image={ApplicationTypeImages.non_interactive}
                />
              }
              breadcrumb={{
                content: 'Applications',
                link: '/#/applications'
              }}
            />
          </RowLayout>
        </PageLayout.Header>
        <PageLayout.Content>
          <Tabs selected={this.state.selectedTab} onSelect={this.handleSelected.bind(this)}>
            <Tabs.Tab label="Quick Start">Quickstart</Tabs.Tab>
            <Tabs.Tab label="Settings" selected>
              <Settings applicationId={this.props.match.params.applicationId} />
            </Tabs.Tab>
            <Tabs.Tab label="Connections">
              <Connections />
            </Tabs.Tab>
            <Tabs.Tab label="Advanced">
              <Advanced applicationId={this.props.match.params.applicationId} />
            </Tabs.Tab>
          </Tabs>
        </PageLayout.Content>
      </PageLayout>
    )
  }
}

export default ApplicationDetail
