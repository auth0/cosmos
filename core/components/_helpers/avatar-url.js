const md5 = require('md5')

const initialsAvatar = initials =>
  encodeURIComponent(`https://cdn.auth0.com/avatars/${initials}.png`)

const urlTemplate = (hash, initials, size) =>
  `https://s.gravatar.com/avatar/${hash}?s=${size}&r=pg&d=${initialsAvatar(initials)}`

export default function avatarUrl(image, email, initials, size = 480) {
  if (image) return image

  const hash = md5(email.toLowerCase())
  return urlTemplate(hash, initials.toLowerCase(), size)
}
