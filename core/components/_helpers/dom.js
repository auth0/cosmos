const insertAtHeadStart = styles => {
  let tag = document.getElementById('cosmos-globals')

  if (tag) {
    tag.innerHTML = styles
  } else {
    tag = document.createElement('style')
    tag.type = 'text/css'
    tag.id = 'cosmos-globals'
    tag.innerHTML = styles

    // Register the resets before anything else
    const head = document.getElementsByTagName('head')[0]
    head.insertBefore(tag, head.firstChild)
  }
}

export { insertAtHeadStart }
