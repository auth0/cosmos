# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 0.1.0 [April 4, 2018]

### Added

* New `cta` appearance for `Button`, to be used for primary calls to action. [#425]
* New "link mode" for `Button`. Passing an `href` prop to `Button` will cause it to render as an `<a>` instead of a `<button>`. [#425]
* _Unstable:_ New `Avatar` and `Thumbnail` components. [#398]
* _Unstable:_ New `Text` component for styled text. [#392]

### Changed

* **BREAKING:** Colliding Boolean props governing appearance of `Button` were replaced with an `appearance` enum. [#400]
* **BREAKING:** `line-height: 1.6` has been moved from global reset to a scope specific to cosmos components
