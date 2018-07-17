import React from 'react'

import Example from '../components/example'
import { AvatarBlock, Stack } from '@auth0/cosmos'

const AvatarBlocks = () => (
  <Example title="Avatar Blocks">
    <Stack>
      <AvatarBlock
        type="user"
        size="compact"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
      />
      <AvatarBlock
        type="user"
        size="compact"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
        subtitle="Subtitle"
      />
    </Stack>
    <br />
    <Stack>
      <AvatarBlock
        size="default"
        type="user"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
      />
      <AvatarBlock
        size="default"
        type="user"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
        subtitle="Subtitle"
      />
    </Stack>
    <br />
    <Stack>
      <AvatarBlock
        size="large"
        type="resource"
        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjcuMjQ2IDM5SDEwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSA5IDM3LjI0NlYyMC43NTRDOSAxOS43ODUgOS43ODUgMTkgMTAuNzU0IDE5aDE2LjQ5MmMuOTY5IDAgMS43NTQuNzg1IDEuNzU0IDEuNzU0djE2LjQ5MmMwIC45NjktLjc4NSAxLjc1NC0xLjc1NCAxLjc1NCIgZmlsbD0iIzE2MjE0RCIvPjxwYXRoIGQ9Ik0zMi4yNDYgMzRIMTUuNzU0QTEuNzU0IDEuNzU0IDAgMCAxIDE0IDMyLjI0NlYxNS43NTRjMC0uOTY5Ljc4NS0xLjc1NCAxLjc1NC0xLjc1NGgxNi40OTJjLjk2OSAwIDEuNzU0Ljc4NSAxLjc1NCAxLjc1NHYxNi40OTJjMCAuOTY5LS43ODUgMS43NTQtMS43NTQgMS43NTQiIGZpbGw9IiNFQzU0MjQiLz48cGF0aCBkPSJNMzcuMjQ2IDI5SDIwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSAxOSAyNy4yNDZWMTAuNzU0QzE5IDkuNzg1IDE5Ljc4NSA5IDIwLjc1NCA5aDE2LjQ5MkMzOC4yMTUgOSAzOSA5Ljc4NSAzOSAxMC43NTR2MTYuNDkyYzAgLjk2OS0uNzg1IDEuNzU0LTEuNzU0IDEuNzU0IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4="
        title="Title"
      />
      <AvatarBlock
        size="large"
        type="resource"
        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjcuMjQ2IDM5SDEwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSA5IDM3LjI0NlYyMC43NTRDOSAxOS43ODUgOS43ODUgMTkgMTAuNzU0IDE5aDE2LjQ5MmMuOTY5IDAgMS43NTQuNzg1IDEuNzU0IDEuNzU0djE2LjQ5MmMwIC45NjktLjc4NSAxLjc1NC0xLjc1NCAxLjc1NCIgZmlsbD0iIzE2MjE0RCIvPjxwYXRoIGQ9Ik0zMi4yNDYgMzRIMTUuNzU0QTEuNzU0IDEuNzU0IDAgMCAxIDE0IDMyLjI0NlYxNS43NTRjMC0uOTY5Ljc4NS0xLjc1NCAxLjc1NC0xLjc1NGgxNi40OTJjLjk2OSAwIDEuNzU0Ljc4NSAxLjc1NCAxLjc1NHYxNi40OTJjMCAuOTY5LS43ODUgMS43NTQtMS43NTQgMS43NTQiIGZpbGw9IiNFQzU0MjQiLz48cGF0aCBkPSJNMzcuMjQ2IDI5SDIwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSAxOSAyNy4yNDZWMTAuNzU0QzE5IDkuNzg1IDE5Ljc4NSA5IDIwLjc1NCA5aDE2LjQ5MkMzOC4yMTUgOSAzOSA5Ljc4NSAzOSAxMC43NTR2MTYuNDkyYzAgLjk2OS0uNzg1IDEuNzU0LTEuNzU0IDEuNzU0IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4="
        title="Title"
        subtitle="Subtitle"
      />
    </Stack>
  </Example>
)

export default AvatarBlocks
