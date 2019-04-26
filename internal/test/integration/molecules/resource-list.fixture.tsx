import * as React from 'react'
import { ResourceList, Button } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Default extends React.Component {
  render() {
    return (
      <ResourceList
        id="custom-id"
        items={[
          {
            title: 'Billie Joe Armstrong',
            subtitle: 'Lead Guitar',
            image: 'https://twitter-avatar.now.sh/billiejoe'
          },
          {
            title: 'Mike Dirnt',
            subtitle: 'Bass Guitar',
            image: 'https://twitter-avatar.now.sh/MikeDirnt'
          },
          {
            title: 'Tré Cool',
            subtitle: 'Drummer',
            image: 'https://twitter-avatar.now.sh/trecool'
          }
        ]}
        actions={[
          <Button icon="warning" onClick={() => {}} label="Warning live without warning" />
        ]}
        onItemClick={mockFn}
      />
    )
  }
}

class Custom extends React.Component {
  render() {
    return (
      <ResourceList
        id="custom-id"
        items={[
          {
            title: 'Billie Joe Armstrong',
            subtitle: 'Lead Guitar',
            image: 'https://twitter-avatar.now.sh/billiejoe',
            joined: 1986
          },
          {
            title: 'Mike Dirnt',
            subtitle: 'Bass Guitar',
            image: 'https://twitter-avatar.now.sh/MikeDirnt',
            joined: 1986
          },
          {
            title: 'Tré Cool',
            subtitle: 'Drummer',
            image: 'https://twitter-avatar.now.sh/trecool',
            joined: 1990
          }
        ]}
        renderItem={(item) => (
          <ResourceList.Item {...item} id="custom-id">
            Joined: {item.joined}
          </ResourceList.Item>
        )}
        onItemClick={(evt, item) => alert(`${item.title} (${item.subtitle}) was clicked!`)}
      />
    )
  }
}

const Fixture = { Default, Custom }

export default Fixture
