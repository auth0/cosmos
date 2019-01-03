import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@auth0/cosmos/styled'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Image, Paragraph, Avatar, StyledAvatar } from '@auth0/cosmos'

storiesOf('Image', module).add('Image svg', () => (
  <Example title="Image SVG">
    <Image
      source="https://cdn.auth0.com/website/press/resources/webtask-logo.svg"
      alt="webtask logo"
    />
  </Example>
))

storiesOf('Image', module).add('Image data:url', () => (
  <Example title="Image from data:url source">
    <Image
      alt="Webtask logo"
      source="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY1IiBoZWlnaHQ9Ijg3IiB2aWV3Qm94PSIwIDAgMjY1IDg3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT53ZWJ0YXNrXzAxPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik04Ni4xMDYgODYuMjg4SC4yNTNWLjU0MWg4NS44NTN2ODUuNzQ3eiIgZmlsbD0iIzVGMzIzNyIvPjxwYXRoIGQ9Ik04Ni4xMDYgODYuMjg4SDE3LjQyNFYxNy42OWg2OC42ODJ2NjguNTk4eiIgZmlsbD0iI0U1NkU2MiIvPjxwYXRoIGQ9Ik02OC45MzUgNjkuMTM5SDE3LjQyNFYxNy42OWg1MS41MTF2NTEuNDV6IiBmaWxsPSIjRUQ5NTVCIi8+PHBhdGggZD0iTTY4LjkzNSA2OS4xMzloLTM0LjM0di0zNC4zaDM0LjM0djM0LjN6IiBmaWxsPSIjRjlFODYyIi8+PHBhdGggZD0iTTUxLjc2NSA1MS45OWgtMTcuMTdWMzQuODRoMTcuMTd2MTcuMTV6IiBmaWxsPSIjRkZGIi8+PHBhdGggZD0iTTEyOS4wNDYgNDMuNTQxaC0uMTI4Yy0uMjk2IDEuMzU0LTMuNTU3IDE0LjMzOC0zLjk4IDE2LjAzaC01LjA0YTIzNzEuMTM2IDIzNzEuMTM2IDAgMCAwLTUuMjA4LTIyLjI0N2g0LjQwNGMuNTA4IDIuMjg1IDMuMjE4IDE1LjY1IDMuNjQyIDE4LjE0NGguMTI3Yy0uMDQyLS4wNDIgMi43NTItMTEuNzU3IDQuMzE5LTE4LjE0NGgzLjk4Yy41OTQgMi4yODUgMy44OTcgMTUuNjA3IDQuMzYzIDE4LjE0NGguMTI3Yy0uMDQzIDAgMi4zNy0xMS43NTcgMy42ODMtMTguMTQ0aDMuOTM5Yy0xLjY5NCA3LjQ0NC0zLjM0NiAxNC44NDUtNS4wODIgMjIuMjQ3aC01LjI1MWMtLjM4LTEuNjA3LTMuNDcyLTEzLjcwMy0zLjg5NS0xNi4wM20yOS45ODEgMy4xNzJ2LTEuNDM3YzAtMy4xNzItMS4xMDEtNS4xNi00LjAyMy01LjE2LTIuNTgzIDAtNC4xMDggMS45ODgtNC4xMDggNi41OTdoOC4xM3ptNC41NzMgMi44MzRoLTEyLjc0NmMwIDQuNDQxIDEuNDgyIDYuODEgNS4yOTMgNi44MWg2LjUyMnYyLjU4Yy0xLjk0OC41MDctNC40NDcuOTcyLTYuOTQ1Ljk3Mi01LjU5IDAtOS40ODUtMy41OTUtOS40ODUtMTEuNTg4IDAtOC4xNjMgMy45MzctMTEuMzM1IDguOTM1LTExLjMzNSA1LjIwOCAwIDguNDI2IDIuOTYgOC40MjYgMTEuMjkzdjEuMjY4em0xMy41MDktOS4wMDhoLTMuNjg1djE1LjgxOGgzLjcyN2MzLjUxNSAwIDUuMTI0LTIuNTM4IDUuMTI0LTguMDM2IDAtNS4zMy0xLjY1Mi03Ljc4Mi01LjE2Ni03Ljc4MnptLTMuNjg1LTYuODUyYzAgMS4yMjcgMCAyLjUzNy0uMDQxIDMuNzY0aC4wODRjLjk3NC0uMjExIDIuODM3LS40NjUgNC4yMzUtLjQ2NSA0LjU3MyAwIDkuMzE2IDIuNzA3IDkuMzE2IDExLjMzNSAwIDcuOTA5LTMuOTM5IDExLjU4OC0xMC4yOSAxMS41ODgtMi43NTMgMC01LjEyNC0uNDY1LTcuNzA3LS45NzJWMjYuOTJoNC40MDN2Ni43Njd6bTIxLjQ3MS0zLjM0MWgyLjYyNXY2Ljk3OGg1LjUwNXYzLjIxNWgtNS41MDV2MTIuODU3YzAgMS42NS43NjIgMi45NiAyLjc5NSAyLjk2aDIuODM3djIuNThjLTEuNjUxLjU5My0zLjMwMi45NzMtNS4xNjYuOTczLTIuMzcxIDAtNC44Ny0xLjE4NC00Ljg3LTUuMzI5VjQwLjU0aC0yLjk2NHYtMy4yMTVoMy4zNDZsMS4zOTctNi45Nzh6bTIzLjQ2IDE4LjM1NWwtNC41MzIuODA0Yy0yLjI0My4zOC0yLjk2NCAxLjQ4LTIuOTY0IDMuNzY0IDAgMi4xNTcgMS4xODYgMy40MjYgMy4xMzQgMy40MjYgMS4zNTUgMCAyLjU4My0uMjUzIDQuMzYyLS44MDN2LTcuMTl6bS0xMS45ODQgNC42MWMwLTMuODQ4IDIuNDE0LTUuOTYzIDYuOTg3LTYuNTk4bDQuOTk3LS42NzZ2LTIuNDk1YzAtMi4xNTgtMS4wNTktMy4wMDMtMy42LTMuMDAzaC02Ljc3NXYtMi42NjVjMi4wNzUtLjUwNyA0Ljc4NS0uODg4IDcuMTU2LS44ODggNC45OTcgMCA3LjYyMyAyLjYyMiA3LjYyMyA3LjE5VjU5LjU3aC0zLjQ3M2wtLjM4LTEuNTIzaC0uMDg1Yy0uODkuNTkzLTMuMzg4IDEuODE5LTYuMjI1IDEuODE5LTQuMTA4IDAtNi4yMjUtMi41OC02LjIyNS02LjU1NXptMzUuNjU1LS4yMTFjMCAzLjc2NC0yLjcxIDYuODEtNy42MjMgNi44MS0yLjIwMiAwLTQuMzE5LS4zMzktNi4wMTItLjg0NnYtMi43MDdoNi4yMjRjMS44NjQgMCAzLjE3Ni0xLjAxNSAzLjE3Ni0yLjUzOCAwLTQuMTAyLTkuOTA5LTMuNTEtOS45MDktMTAuNzQzIDAtMy4zNDEgMi40MTQtNi4wOSA3LjMyNi02LjA5IDEuOTA1IDAgNC4wMjMuMzggNS40Mi44MDR2Mi43NDloLTUuODQ0Yy0xLjgyIDAtMi43OTQuNzYtMi43OTQgMi4wNzIgMCAzLjkzMyAxMC4wMzYgMy41OTUgMTAuMDM2IDEwLjQ5bTkuNTI4LTUuMzcybDguMDQ1LTEwLjQwNWg1LjA4MmwtOC4wNDYgMTAuNDA1IDguMDQ2IDExLjg0MmgtNS4yNTFsLTcuODc2LTExLjg0MnptLS4yOTcgMTEuODQyaC00LjQwNHYtMzIuNjVoNC40MDR2MzIuNjV6IiBmaWxsPSIjNUYzMjM3Ii8+PC9nPjwvc3ZnPg=="
    />
  </Example>
))

storiesOf('Image', module).add('Image bitmap', () => (
  <Example title="Image Bitmap">
    <Image
      source="https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80"
      alt="webtask logo"
    />
  </Example>
))

storiesOf('Image', module).add('Image large and text', () => (
  <Example title="Image (large) and text">
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique nec sapien eget
      vestibulum. Donec tincidunt vel felis eget vestibulum. Aliquam viverra magna elit, nec
      hendrerit lorem rhoncus nec. Nam fringilla elit a maximus faucibus. Nullam porttitor purus non
      sapien dictum, faucibus viverra arcu malesuada. Nunc sagittis eget elit sit amet tempor. Sed
      at ultricies orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eget
      nibh cursus, sollicitudin tellus vel, mollis justo. Integer efficitur metus nisi, eu maximus
      velit pellentesque at. Pellentesque magna risus, facilisis ac odio quis, accumsan egestas
      tortor. Aliquam commodo scelerisque justo, et feugiat libero ullamcorper eget. Nulla
      consectetur mollis elit sit amet auctor.{' '}
    </Paragraph>
    <Image
      alt=""
      source="https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2257&h=1200&q=80"
    />
    <Paragraph>
      Phasellus pharetra mattis lacus, vitae ultrices nisl interdum eu. Nulla facilisi. Donec et
      faucibus lorem. Quisque sit amet tortor consectetur, volutpat neque non, congue justo. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim egestas, rhoncus arcu nec,
      fringilla lacus. In dictum orci risus, nec malesuada tellus tristique volutpat. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </Paragraph>
  </Example>
))

storiesOf('Image', module).add('Image small and text', () => (
  <Example title="Image (large) and text">
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique nec sapien eget
      vestibulum. Donec tincidunt vel felis eget vestibulum. Aliquam viverra magna elit, nec
      hendrerit lorem rhoncus nec. Nam fringilla elit a maximus faucibus. Nullam porttitor purus non
      sapien dictum, faucibus viverra arcu malesuada. Nunc sagittis eget elit sit amet tempor. Sed
      at ultricies orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eget
      nibh cursus, sollicitudin tellus vel, mollis justo. Integer efficitur metus nisi, eu maximus
      velit pellentesque at. Pellentesque magna risus, facilisis ac odio quis, accumsan egestas
      tortor. Aliquam commodo scelerisque justo, et feugiat libero ullamcorper eget. Nulla
      consectetur mollis elit sit amet auctor.{' '}
    </Paragraph>
    <Image
      alt=""
      source="https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=300&q=80"
    />
    <Paragraph>
      Phasellus pharetra mattis lacus, vitae ultrices nisl interdum eu. Nulla facilisi. Donec et
      faucibus lorem. Quisque sit amet tortor consectetur, volutpat neque non, congue justo. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim egestas, rhoncus arcu nec,
      fringilla lacus. In dictum orci risus, nec malesuada tellus tristique volutpat. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </Paragraph>
  </Example>
))

const Box = styled.div`
  width: 250px;
  outline: 1px solid black;
`

const BoxSmall = styled(Box)`
  width: 100px;
`
const BoxLarge = styled(Box)`
  width: 100%;
  outline: none;
`

storiesOf('Image', module).add('responsive image', () => (
  <Example title="Responsive image">
    <Stack>
      <Box>
        <Image
          alt="Autho logo"
          source="https://cdn.auth0.com/website/assets/pages/press/img/resources/auth0-logo-monotone-black-f9bf0aaf29.svg"
        />
      </Box>
      <BoxSmall>
        <Image
          alt="Auth0 logo"
          source="https://cdn.auth0.com/website/assets/pages/press/img/resources/auth0-logo-monotone-black-f9bf0aaf29.svg"
        />
      </BoxSmall>
    </Stack>
    <br />
    <br />
    <BoxLarge>
      <Image
        alt="Autho logo"
        width="100%"
        source="https://cdn.auth0.com/website/assets/pages/press/img/resources/auth0-logo-monotone-black-f9bf0aaf29.svg"
      />
    </BoxLarge>
  </Example>
))

const FittedBox = styled.div`
  width: 150px;
  height: 150px;
  outline: 1px solid black;
`

const FittedBoxRect = styled.div`
  width: 200px;
  height: 70px;
  outline: 1px solid black;
`

const FittedBoxSmall = styled(FittedBox)`
  width: 100px;
  height: 70px;
`

const FittedBoxPortrait = styled.div`
  width: 160px;
  height: 214px;
  outline: 1px solid black;
`
const FittedBoxLandscape = styled.div`
  width: 214px;
  height: 160px;
  outline: 1px solid black;
`

const FittedBoxCover = styled(FittedBox)``

storiesOf('Image', module).add('fitted images', () => (
  <Example title="Fitted image">
    <Stack align="space-between">
      <FittedBoxSmall>
        <Image
          height="100%"
          width="100%"
          fit="contain"
          alt="Autho logo"
          source="https://cdn.auth0.com/website/assets/pages/press/img/resources/auth0-logo-monotone-black-f9bf0aaf29.svg"
        />
      </FittedBoxSmall>

      <FittedBoxSmall>
        <Image
          fit="contain"
          height="70px"
          alt="Auth0 logo"
          source="https://auth0-manhattan.herokuapp.com/microsoft-logo.png"
        />
      </FittedBoxSmall>
      <FittedBoxSmall>
        <Image
          fit="contain"
          height="70px"
          alt="Auth0 logo"
          source="https://cdn.auth0.com/manage/v1.3103.0/logos/logo2-vkontakte/images/logo.svg"
        />
      </FittedBoxSmall>
      <FittedBoxSmall>
        <Image
          fit="contain"
          height="70px"
          alt="Auth0 logo"
          source="https://cdn.auth0.com/manage/v1.3103.0/logos/logo2-box/images/logo.svg"
        />
      </FittedBoxSmall>
    </Stack>
    <br />
    <br />
    <Stack align="space-between">
      <FittedBox>
        <Image
          width="150px"
          height="150px"
          fit="contain"
          alt=""
          source="https://images.unsplash.com/photo-1545006398-2cf47cd87b90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=915&q=80"
        />
      </FittedBox>

      <FittedBox>
        <Image
          alt=""
          width="150px"
          height="150px"
          fit="contain"
          source="https://images.unsplash.com/photo-1542838687-d214d04db0aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
        />
      </FittedBox>
      <FittedBoxCover>
        <Image
          alt="Auth0 logo"
          fit="cover"
          width="150px"
          height="150px"
          source="https://images.unsplash.com/photo-1545006398-2cf47cd87b90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=915&q=80"
        />
      </FittedBoxCover>
      <FittedBoxCover>
        <Image
          alt="Auth0 logo"
          fit="cover"
          width="150px"
          height="150px"
          source="https://images.unsplash.com/photo-1542838687-d214d04db0aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
        />
      </FittedBoxCover>
    </Stack>
    <br />
    <br />
    <Stack align="space-between">
      <FittedBoxPortrait>
        <Image
          fit="contain"
          width="100%"
          alt="Auth0 logo"
          source="https://cdn.auth0.com/manage/v1.3103.0/logos/logo2-twitter/images/logo.svg"
        />
      </FittedBoxPortrait>
      <FittedBoxPortrait>
        <Image
          fit="contain"
          height="100%"
          width="100%"
          alt="Auth0 logo"
          source="https://cdn.auth0.com/manage/v1.3103.0/logos/logo2-twitter/images/logo.svg"
        />
      </FittedBoxPortrait>
      <FittedBoxLandscape>
        <Image
          fit="contain"
          height="100%"
          alt="Auth0 logo"
          source="https://cdn.auth0.com/manage/v1.3103.0/logos/logo2-twitter/images/logo.svg"
        />
      </FittedBoxLandscape>
      <FittedBoxLandscape>
        <Image
          fit="contain"
          width="100%"
          height="100%"
          alt="Auth0 logo"
          source="https://cdn.auth0.com/manage/v1.3103.0/logos/logo2-twitter/images/logo.svg"
        />
      </FittedBoxLandscape>
    </Stack>
  </Example>
))
