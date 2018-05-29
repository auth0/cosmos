import React from 'react'

import Example from '../ov-components/example'
import Section from '../ov-components/section'
import { ResourceList, Image } from '@auth0/cosmos'

import ClientList from '../../manage/components/client-list'

const clickHandler = name => (evt, item) => {
  evt.preventDefault()
  alert(`You triggered the ${name} action for ${item.title}`)
}

const ResourceLists = () => (
  <Section>
    <Example title="Resource List">
      <ResourceList
        items={[
          {
            title: 'Item 1',
            subtitle: 'Native',
            thumbnail: (
              <Image source="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+CiAgICA8cGF0aAogICAgICBkPSJNMjcuMzY4IDQ1SDIuNjMyQTIuNjMyIDIuNjMyIDAgMCAxIDAgNDIuMzY4VjE3LjYzMkEyLjYzMiAyLjYzMiAwIDAgMSAyLjYzMiAxNWgyNC43MzZBMi42MzIgMi42MzIgMCAwIDEgMzAgMTcuNjMydjI0LjczNkEyLjYzMiAyLjYzMiAwIDAgMSAyNy4zNjggNDUiCiAgICAgIGZpbGw9IiMxNjIxNEQiCiAgICAvPgogICAgPHBhdGgKICAgICAgZD0iTTM0Ljg2OCAzNy41SDEwLjEzMkEyLjYzMiAyLjYzMiAwIDAgMSA3LjUgMzQuODY4VjEwLjEzMkEyLjYzMiAyLjYzMiAwIDAgMSAxMC4xMzIgNy41aDI0LjczNmEyLjYzMiAyLjYzMiAwIDAgMSAyLjYzMiAyLjYzMnYyNC43MzZhMi42MzIgMi42MzIgMCAwIDEtMi42MzIgMi42MzIiCiAgICAgIGZpbGw9IiNFQzU0MjQiCiAgICAvPgogICAgPHBhdGgKICAgICAgZD0iTTQyLjM2OCAzMEgxNy42MzJBMi42MzIgMi42MzIgMCAwIDEgMTUgMjcuMzY4VjIuNjMyQTIuNjMyIDIuNjMyIDAgMCAxIDE3LjYzMiAwaDI0LjczNkEyLjYzMiAyLjYzMiAwIDAgMSA0NSAyLjYzMnYyNC43MzZBMi42MzIgMi42MzIgMCAwIDEgNDIuMzY4IDMwIgogICAgICBmaWxsPSIjNDRDN0Y0IgogICAgLz4KICA8L2c+Cjwvc3ZnPg==" />
            )
          },
          {
            title: 'Item 2',
            subtitle: 'Non Interactive',
            thumbnail: (
              <Image source="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzYgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ij4gIDx0aXRsZT5Hcm91cCAyPC90aXRsZT4gIDxnIGZpbGw9Im5vbmUiIGZpbGxSdWxlPSJldmVub2RkIj4gICAgPHBhdGggZmlsbD0iIzQ0QzdGNCIgZD0iTTguNDQ2IDI2LjMzN2wtMy40ODctMkwxNS44MSA1LjY2N2wzLjQ4OCAyeiIgLz4gICAgPHBhdGggZmlsbD0iI0VDNTQyNCIgZD0iTTI2LjY2IDI2LjMzN0wxNS44MSA3LjY2N2wzLjQ4Ny0yIDEwLjg1MSAxOC42N3oiIC8+ICAgIDxwYXRoICAgICAgZD0iTTI0LjI3MiA2LjY2N2MwIDMuNjgyLTMuMDA1IDYuNjY2LTYuNzExIDYuNjY2LTMuNzA3IDAtNi43MTEtMi45ODQtNi43MTEtNi42NjZDMTAuODUgMi45ODUgMTMuODU0IDAgMTcuNTYgMGMzLjcwNiAwIDYuNzExIDIuOTg1IDYuNzExIDYuNjY3IiAgICAgIGZpbGw9IiMxNjIxNEQiICAgIC8+ICAgIDxwYXRoICAgICAgZD0iTTEzLjQyMiAyNS4zMzNjMCAzLjY4Mi0zLjAwNCA2LjY2Ny02LjcxIDYuNjY3QzMuMDA0IDMyIDAgMjkuMDE1IDAgMjUuMzMzczMuMDA1LTYuNjY2IDYuNzExLTYuNjY2YzMuNzA3IDAgNi43MTEgMi45ODQgNi43MTEgNi42NjYiICAgICAgZmlsbD0iI0VDNTQyNCIgICAgLz4gICAgPHBhdGggICAgICBkPSJNMzUuMTIyIDI1LjMzM2MwLTMuNjgyLTMuMDA1LTYuNjY2LTYuNzExLTYuNjY2LTMuNzA3IDAtNi43MTEgMi45ODQtNi43MTEgNi42NjYgMCAzLjY4MiAzLjAwNCA2LjY2NyA2LjcxIDYuNjY3IDMuNzA3IDAgNi43MTItMi45ODUgNi43MTItNi42NjciICAgICAgZmlsbD0iIzQ0QzdGNCIgICAgLz4gIDwvZz48L3N2Zz4=" />
            )
          },
          {
            title: 'Item 3',
            subtitle: 'Regular Web App',
            thumbnail: (
              <Image source="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGxSdWxlPSJldmVub2RkIj4gICAgPHBhdGggICAgICBkPSJNMzMuNDk4IDMuMDRBMjMuMTQ5IDIzLjE0OSAwIDAgMCAyMiAwdjE1LjExMmE3LjcxNiA3LjcxNiAwIDAgMSAzLjgzMyAxLjAxM2MzLjY2NiAyLjA4NiA0LjkyMiA2LjcwNyAyLjgwNSAxMC4zMkw0MS45MTUgMzRjNi4zNS0xMC44NCAyLjU4Mi0yNC43MDEtOC40MTctMzAuOTYiICAgICAgZmlsbD0iIzE2MjE0RCIgICAgLz4gICAgPHBhdGggICAgICBkPSJNMjIuNSAwQzEwLjA3NCAwIDAgMTAuMTQ4IDAgMjIuNjY2YzAgNC4xMjkgMS4wOTYgOCAzLjAxMSAxMS4zMzRsMTIuOTkzLTcuNTU2QTcuNTYzIDcuNTYzIDAgMCAxIDE1IDIyLjY2NmMwLTQuMTczIDMuMzU4LTcuNTU2IDcuNS03LjU1NiA0LjE0MiAwIDcuNS0zLjM4MiA3LjUtNy41NTVDMzAgMy4zODMgMjYuNjQyIDAgMjIuNSAwIiAgICAgIGZpbGw9IiNFQzU0MjQiICAgIC8+ICAgIDxwYXRoICAgICAgZD0iTTI5LjAwMSAyNS44MzRhNy41NTIgNy41NTIgMCAwIDEtMi43NDcgMi44MDVjLTMuNTkgMi4xMTctOC4xNzkuODYtMTAuMjUtMi44MDUtMi4wNzMtMy42NjYtNi42NjItNC45MjItMTAuMjUtMi44MDYtMy41OSAyLjExNy00LjgyIDYuODA1LTIuNzQ3IDEwLjQ3IDYuMjE2IDEwLjk5OSAxOS45ODMgMTQuNzY3IDMwLjc1IDguNDE3QTIyLjY1NSAyMi42NTUgMCAwIDAgNDIgMzMuNWwtMTIuOTk5LTcuNjY2eiIgICAgICBmaWxsPSIjNDRDN0Y0IiAgICAvPiAgICA8cGF0aCAgICAgIGQ9Ik0zMS43NSAzNS45OTRhNy40OTkgNy40OTkgMCAxIDEgNy41LTEyLjk4OCA3LjQ5OSA3LjQ5OSAwIDAgMS03LjUgMTIuOTg4IiAgICAgIGZpbGw9IiMxNjIxNEQiICAgIC8+ICA8L2c+PC9zdmc+" />
            )
          }
        ]}
        actions={[
          {
            icon: 'settings',
            label: 'Settings',
            handler: clickHandler('Settings')
          },
          { icon: 'delete', label: 'Delete', handler: clickHandler('Delete') }
        ]}
      />
    </Example>
    <Example title="Resource List: Clients">
      <ClientList />
    </Example>
  </Section>
)

export default ResourceLists
