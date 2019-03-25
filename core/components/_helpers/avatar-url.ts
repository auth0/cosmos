const md5 = require('md5')

const PLACEHOLDERS = {
  user: 'https://cdn.auth0.com/website/cosmos/avatar-user-default.svg',
  resource: 'https://cdn.auth0.com/website/cosmos/avatar-resource-default.svg'
}

const initialsAvatar = initials =>
  initials
    ? encodeURIComponent(`https://cdn.auth0.com/avatars/${initials.toLowerCase()}.png`)
    : '404'

const urlTemplate = (hash, initials, size) =>
  `https://s.gravatar.com/avatar/${hash}?s=${size}&r=pg&d=${initialsAvatar(initials)}`

export default function avatarUrl(email, initials, type = 'user', size = 480) {
  if (typeof email !== 'string' && typeof initials !== 'string') return PLACEHOLDERS[type]

  const hash = email ? md5(email.toLowerCase()) : ''
  return urlTemplate(hash, initials, size)
}
