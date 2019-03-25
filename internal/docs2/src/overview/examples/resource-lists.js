import React from 'react'

import Example from '../components/example'
import Section from '../components/section'
import { ResourceList, Image } from '@auth0/cosmos'

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
              <Image source="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjcuMjQ2IDM5SDEwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSA5IDM3LjI0NlYyMC43NTRDOSAxOS43ODUgOS43ODUgMTkgMTAuNzU0IDE5aDE2LjQ5MmMuOTY5IDAgMS43NTQuNzg1IDEuNzU0IDEuNzU0djE2LjQ5MmMwIC45NjktLjc4NSAxLjc1NC0xLjc1NCAxLjc1NCIgZmlsbD0iIzE2MjE0RCIvPjxwYXRoIGQ9Ik0zMi4yNDYgMzRIMTUuNzU0QTEuNzU0IDEuNzU0IDAgMCAxIDE0IDMyLjI0NlYxNS43NTRjMC0uOTY5Ljc4NS0xLjc1NCAxLjc1NC0xLjc1NGgxNi40OTJjLjk2OSAwIDEuNzU0Ljc4NSAxLjc1NCAxLjc1NHYxNi40OTJjMCAuOTY5LS43ODUgMS43NTQtMS43NTQgMS43NTQiIGZpbGw9IiNFQzU0MjQiLz48cGF0aCBkPSJNMzcuMjQ2IDI5SDIwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSAxOSAyNy4yNDZWMTAuNzU0QzE5IDkuNzg1IDE5Ljc4NSA5IDIwLjc1NCA5aDE2LjQ5MkMzOC4yMTUgOSAzOSA5Ljc4NSAzOSAxMC43NTR2MTYuNDkyYzAgLjk2OS0uNzg1IDEuNzU0LTEuNzU0IDEuNzU0IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4=" />
            )
          },
          {
            title: 'Item 2',
            subtitle: 'Non Interactive',
            thumbnail: (
              <Image source="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBmaWxsPSIjNDRDN0Y0IiBkPSJNMTYuODA0IDMyLjM5OWwtMi44MS0xLjYyNSA4Ljc0Mi0xNS4xNyAyLjgxIDEuNjI1eiIvPjxwYXRoIGZpbGw9IiNFQzU0MjQiIGQ9Ik0zMS40NzYgMzIuMzk5bC04Ljc0MS0xNS4xNyAyLjgwOS0xLjYyNSA4Ljc0MSAxNS4xN3oiLz48cGF0aCBkPSJNMjkuNTUzIDE2LjQxN2E1LjQxMSA1LjQxMSAwIDAgMS01LjQwNyA1LjQxNiA1LjQxMSA1LjQxMSAwIDAgMS01LjQwNi01LjQxNkE1LjQxMSA1LjQxMSAwIDAgMSAyNC4xNDYgMTFhNS40MTEgNS40MTEgMCAwIDEgNS40MDcgNS40MTciIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjAuODEyIDMxLjU4M0E1LjQxMSA1LjQxMSAwIDAgMSAxNS40MDYgMzcgNS40MTEgNS40MTEgMCAwIDEgMTAgMzEuNTgzYTUuNDExIDUuNDExIDAgMCAxIDUuNDA2LTUuNDE2IDUuNDExIDUuNDExIDAgMCAxIDUuNDA2IDUuNDE2IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTM4LjI5MyAzMS41ODNhNS40MTEgNS40MTEgMCAwIDAtNS40MDctNS40MTYgNS40MTEgNS40MTEgMCAwIDAtNS40MDYgNS40MTZBNS40MTEgNS40MTEgMCAwIDAgMzIuODg2IDM3YTUuNDExIDUuNDExIDAgMCAwIDUuNDA3LTUuNDE3IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4=" />
            )
          },
          {
            title: 'Item 3',
            subtitle: 'Regular Web App',
            thumbnail: (
              <Image source="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzEuMzMyIDExLjAyN0ExNS40MzMgMTUuNDMzIDAgMCAwIDIzLjY2NyA5djEwLjA3NWMuODY4LS4wMDEgMS43NDkuMjE2IDIuNTU1LjY3NSAyLjQ0NCAxLjM5IDMuMjgxIDQuNDcxIDEuODcgNi44OGw4Ljg1MSA1LjAzN2M0LjIzNC03LjIyNyAxLjcyMi0xNi40NjgtNS42MTEtMjAuNjQiIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjQgOUMxNS43MTYgOSA5IDE1Ljc2NSA5IDI0LjExYzAgMi43NTMuNzMgNS4zMzQgMi4wMDggNy41NTdsOC42NjEtNS4wMzhBNS4wNDIgNS4wNDIgMCAwIDEgMTkgMjQuMTFjMC0yLjc4MSAyLjIzOS01LjAzNiA1LTUuMDM2czUtMi4yNTUgNS01LjAzN1MyNi43NjEgOSAyNCA5IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTI4LjMzNCAyNi4yMjNhNS4wMzUgNS4wMzUgMCAwIDEtMS44MzIgMS44N2MtMi4zOTIgMS40MTEtNS40NTIuNTc0LTYuODMzLTEuODctMS4zODEtMi40NDUtNC40NDEtMy4yODItNi44MzQtMS44Ny0yLjM5MiAxLjQxLTMuMjEyIDQuNTM1LTEuODMgNi45OCA0LjE0NCA3LjMzMiAxMy4zMjIgOS44NDQgMjAuNSA1LjYxQTE1LjEwNCAxNS4xMDQgMCAwIDAgMzcgMzEuMzM0bC04LjY2Ni01LjExeiIgZmlsbD0iIzQ0QzdGNCIvPjxwYXRoIGQ9Ik0zMC4xNjcgMzIuOTk2YTUgNSAwIDEgMSA1LTguNjU5IDUgNSAwIDAgMS01IDguNjYiIGZpbGw9IiMxNjIxNEQiLz48L2c+PC9nPjwvc3ZnPg==" />
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
  </Section>
)

export default ResourceLists
