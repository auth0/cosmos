if (process.env.NODE_ENV !== 'production') {
  /* Back up regular error */
  const oldError = console.error

  console.error = (err) => {
    /* If it's a prop warning, throw the error to fail loudly */
    if (err.includes('Failed prop type')) {
      setTimeout((_) => {
        throw Error(err)
      })
    } else {
      /* Call regular error */
      oldError(err)
    }
  }
}
