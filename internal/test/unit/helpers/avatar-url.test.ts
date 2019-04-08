import avatarUrl from '@auth0/cosmos/_helpers/avatar-url'

describe('Avatar URL', () => {
  it('to return an initials URL if only initials is provided', () => {
    const url = avatarUrl(null, 'AB')
    expect(url).toEqual(
      'https://s.gravatar.com/avatar/?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fab.png'
    )
  })

  it('to return an email URL if only email is provided', () => {
    const url = avatarUrl('example@example.com')
    expect(url).toEqual(
      'https://s.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8?s=480&r=pg&d=404'
    )
  })

  it('to return a complete URL if initials and email are provided', () => {
    const url = avatarUrl('example@example.com', 'FC')
    expect(url).toEqual(
      'https://s.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Ffc.png'
    )
  })

  it('to return a custom size URL if size is provided', () => {
    const url = avatarUrl('example@example.com', 'FC', null, 368)
    expect(url).toEqual(
      'https://s.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8?s=368&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Ffc.png'
    )
  })

  it('to return a placeholder URL if no data is provided', () => {
    const url = avatarUrl()
    expect(url).toEqual('https://cdn.auth0.com/website/cosmos/avatar-user-default.svg')
  })

  it('to return a placeholder URL if no data but type (user) is provided', () => {
    const url = avatarUrl(null, null, 'user')
    expect(url).toEqual('https://cdn.auth0.com/website/cosmos/avatar-user-default.svg')
  })

  it('to return a placeholder URL if no data but type (resource) is provided', () => {
    const url = avatarUrl(null, null, 'resource')
    expect(url).toEqual('https://cdn.auth0.com/website/cosmos/avatar-resource-default.svg')
  })

  it('to return a placeholder URL if email is not a string', () => {
    // @ts-ignore
    const url = avatarUrl(true)
    expect(url).toEqual('https://cdn.auth0.com/website/cosmos/avatar-user-default.svg')
  })

  it('to return a placeholder URL if initials is not a string', () => {
    // @ts-ignore
    const url = avatarUrl(null, true)
    expect(url).toEqual('https://cdn.auth0.com/website/cosmos/avatar-user-default.svg')
  })
})
