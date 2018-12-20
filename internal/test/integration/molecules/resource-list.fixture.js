import React from 'react'
import { ResourceList, Button } from '@auth0/cosmos'

class Fixture extends React.Component {
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
        onItemClick={(evt, item) => alert(`${item.title} (${item.subtitle}) was clicked!`)}
      />
    )
  }
}

export default Fixture
