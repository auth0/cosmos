# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 0.2.0 [April 26, 2018]

* `Tabs` component now ignores `null` children instead of throwing an error. [#518]
* Fixed incorrect layout of "Learn More" link in `EmptyState`. [#514]
* Expanded routes in Manage proof of concept to permit additional pages to be added. [#503]
* _Unstable:_ New `ResourceList` component. [#504]
* _Unstable:_ New `Table` component. [#519]

## 0.1.1 [April 12, 2018]

### Changed

* **BREAKING** Make cosmos babel preset an optional dependency [#497]
  The babel preset is no longer available in `@auth0/cosmos/babel`, use `@auth0/babel-preset-cosmos` instead
* An improved client list for manage proof of concept [#441]
* Better naming + urls [#493] and permalinks for docs[#492]

## 0.1.0 [April 4, 2018]

### Added

* New `cta` appearance for `Button`, to be used for primary calls to action. [#425]
* New "link mode" for `Button`. Passing an `href` prop to `Button` will cause it to render as an `<a>` instead of a `<button>`. [#425]
* _Unstable:_ New `Avatar` and `Thumbnail` components. [#398]
* _Unstable:_ New `Text` component for styled text. [#392]

### Changed

* **BREAKING:** Colliding Boolean props governing appearance of `Button` were replaced with an `appearance` enum. [#400]
* **BREAKING:** `line-height: 1.6` has been moved from global reset to a scope specific to cosmos components
