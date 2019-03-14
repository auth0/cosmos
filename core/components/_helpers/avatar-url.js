const md5 = require('md5')

const initialsAvatar = initials =>
  initials
    ? encodeURIComponent(`https://cdn.auth0.com/avatars/${initials.toLowerCase()}.png`)
    : '404'

const urlTemplate = (hash, initials, size) =>
  `https://s.gravatar.com/avatar/${hash}?s=${size}&r=pg&d=${initialsAvatar(initials)}`

export default function avatarUrl(email, initials, size = 480) {
  if (!email && !initials)
    throw new Error('You need to provide either `email`, `initials` or both to the Avatar.')

  const hash = email ? md5(email.toLowerCase()) : ''
  return urlTemplate(hash, initials, size)
}
