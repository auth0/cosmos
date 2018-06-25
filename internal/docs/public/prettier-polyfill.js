// "Polyfills" in order for all the code to run
window.global = self
window.Buffer = {
  isBuffer: function() {
    return false
  }
}
// eslint-disable-next-line
fs = module$1 = module = path = os = crypto = {}
// eslint-disable-next-line no-undef
os.homedir = function() {
  return '/home/prettier'
}
window.process = { argv: [], env: { PRETTIER_DEBUG: true }, version: 'v8.5.0' }
window.assert = { ok: function() {}, strictEqual: function() {} }
window.require = function require(path) {
  return window[path.replace(/.+-/, '')]
}
