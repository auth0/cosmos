# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/). Currently, this project is using an `0.x` versioning system to indicate its preview status. As such, it does _not_ currently adhere to [Semantic Versioning](http://semver.org/spec/v2.0.0.html). Once we reach production readiness, we will follow semver beginning with our `1.0` release. In the meantime, please read this changelog for information on breaking changes!

## 0.3.0 [June 25, 2018]

### Added

* _Unstable_: Added `Badge` component. [#548]
* _Unstable_: Added `Tag` component. [#549]
* _Unstable_: Added `AvatarBlock` component. [#561]
* `Tooltip` now supports new `left` and `right` values for the `position` prop. [#576]
* `Stack` now supports a `space-between` value for its `align` prop, resulting in behavior similar to the flexbox property of the same name. [#591]
* `Tabs` may now optionally operate as a controlled component via new `selected` and `onSelect` props. [#585]
* Cosmos now exports its copy of [styled-components](https://github.com/styled-components/styled-components) to avoid conflicts where consumers would use their own copy. [#614, #610]
* Added TypeScript definitions for all components. (Thanks @jcenturion!) [#632]

### Changed

* **BREAKING**: Actions have now been standardized across the library. Any actions which previously expected a `text` property now expect a `label` property instead. [#559]
* **BREAKING**: `Thumbnail` has been removed, and its functionality has been merged with `Avatar` for simplicity. [#561]
* **BREAKING**: `Form` now supports only a single destructive action via the `destructiveAction` prop, which replaces the previous `destructiveActions` prop that accepted an array of actions. [#601]
* **BREAKING**: React `16.x` is now referenced as a peer dependency to avoid conflicts. [#604]
* Reorganized code, making docs and examples independent from the core library. [#575, #607]
* `PageHeader` will now render a secondary action even if there is no primary action specified. [#590]
* Switched to [nps](https://github.com/kentcdodds/nps) to manage scripts that had previously been in `package.json`. [#615]
* Replaced placeholder screenshot for `Dialog` with a real working example. [#620]

### Fixed

* Fixed issue with `Radio.Group` resulting from filtering children by type. [#581]
* Fixed various PropTypes validation warnings. [#582]
* Fixed issue where sidebar groups would not display as open even when a child was marked as `selected`. [#583]
* Fixed issue where the search in the documentation sidebar would throw an error in response to certain user input. [#593]
* Fixed issue where form inputs would lose their styling when surrounded by container elements [#619]
* Fixed issue where the preview in the documentation sandbox was not being correctly updated in response to user input in the props table [#637]
* Fixed misalignment of tooltips on `Buttons`. [#617]

## 0.2.3 [May 31, 2018]

### Fixed

* Fixed problem where fonts are not loading [#571]

## 0.2.2 [May 29, 2018]

### Added

* Added `Radio` component to Forms [#511]
* Added `Label` component [#544]
* Added support for custom Form fields [#530]
* Added prop to make tooltips visible by default [#562]

### Changed

* **BREAKING** `method` has been renamed to `handler` for all components that accept actions as a prop [#551]

  ```jsx
  <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
  ```

* Documentation improvements for `EmptyState` and `Alert` [#491] + [#534]

### Fixed

* Added missing id to Switch for accessibility [#558]
* Fixed path for tokens in helpers [#564]

## 0.2.1 [May 8, 2018]

### Changed

* New information on defaults and required fields in docs [#533]

### Fixed

* Fixed persistent warning in `Form.Actions` [#529]

## 0.2.0 [April 26, 2018]

### Added

* _Unstable:_ New `ResourceList` component. [#504]
* _Unstable:_ New `Table` component. [#519]

### Changed

* Expanded routes in Manage proof of concept to permit additional pages to be added. [#503]

### Fixed

* `Tabs` component now ignores `null` children instead of throwing an error. [#518]
* Fixed incorrect layout of "Learn More" link in `EmptyState`. [#514]

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
