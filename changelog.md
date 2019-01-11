# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/). Currently, this project is using an `0.x` versioning system to indicate its preview status. As such, it does _not_ currently adhere to [Semantic Versioning](http://semver.org/spec/v2.0.0.html). Once we reach production readiness, we will follow semver beginning with our `1.0` release. In the meantime, please read this changelog for information on breaking changes!

## 0.12.2 [January 9, 2019]

### Fixed

- Icon: Add “application” icon. [#1401]
- Alternate implementation for uniqueId: This improves snapshot testing experience by removing random hashes from components attributes. [#1374] (Warning: You may need to update some snapshots and remove any uniqueId mock.)
- Breadcrumb: Fix automation attribute naming. [#1309] (Warning: You may need to update some tests.)

**Breadcrumb change**

We have renamed the Breadcrumb.Link automation attribute from this:
`<a data-cosmos-key="link">clicky</a>`
to this:
`<a data-cosmos-key="breadcrumb.link">clicky</a>`

Please update your tests (if any) accordingly.

**UniqueId helper change**

In the past, we used to randomly generate an id for some attributes that were required to link components.
Now we're using a global counter, which will lead to improve snapshot testing since each test is run in an isolated environment, and then each test run will have a fresh and pure start.

If you were using a mock for `uniqueId` as a workaround:

```js
jest.mock('../../../core/components/_helpers/uniqueId', () => () => 'abcdef1234')
```

Please, remove it since is no longer needed.

## 0.12.1 [January 8, 2019]

### Fixed

- Radio: Fixed rendering of label [#1393]

## 0.12.0 [January 7, 2019]

### Added

- Testing: Custom prop tests [#1308][#1312]
- ResourceList: Adds a prop to set the width to the resource list body [#1314]
- Image: Images are now responsive by default [#1244]
- Image: Added fit properties to scale images to a container proportionally [#1244]
- Avatar: Images in avatar fit to cover the container. This allows to display portrait and landscape images inside the avatar. [#1244]
- (Internal) Layouts: Row, Gallery, Columns and Page [#1282]

### Fixed

- Icon: Fixed chevron up not facing up [#1391]
- Tabs: Quick aria labels fix [#1375]
- Tooltip: Adds z-index to tooltips [#1369]
- Security upgrades [#1387]

### Changed

- Move actions API to Input [#1281]

## 0.11.0 [December 18, 2018]

### Added

- Sortable Resource List [#1098]
- Integration tests for Tabs [#1278]

### Fixed

- Implement attrs to styled API [#1263]
- Make Tabs accessible [#1264]
- Examples: react + react-dom should have same version [#1284]
- Tooltip: Fix wrapping for long text [#1262]
- Fix dialog [#1260]
- Fix react router dom dependency [#1300]
- Fix Resource List columns [#1192]
- Fix docs links [#1280]
- Fix version switcher [#1256]
- Fix button action onClick handler not including the item [#1276]

- Internal: Clean up code for masked TextInput [#1283]
- Internal: Add module to all stories [#1288]

### Changed

- Internal: Massive find and replace for styled [#1249]
- Remove line height declaration on tables [#1286]
- Replace extend with styled [#1279]
- Remove pointer events from icon [#1298]
- Changes the Page Header from grid to flex [#1285]

## 0.10.1 [December 11, 2018]

### Fixed

- Fixes dialog not catching pointer events [#1260]

## 0.10.0 [December 11, 2018]

### Added

- Switch: Add support for label position by @m4tr1k + alignment fixes [#1171]
- Styling: Add styled-components-with-helpers [#1208]
- Styling: Add styled-margin [#1248]

### Fixed

- Responsive PageHeader [#1138]
- Fix FormGroup warning when only one child is passed [#1221]
- Select arrow icon color fix [#1220]
- Switch.onToggle stopPropagation of event [#1233]
- Added stories around page header [#1230]
- Updates dropbox icon [#1240]
- Upgrade to latest 3.x styled-components [#1241]
- Removes space when the switch label is empty [#1234]
- Removes pointer events on the overlay component [#1243]
- Fixed accordions in Contribution guide [#1246]
- Manage PoC: Fix Security issue and fix error on example when opening Applications [#1253]

## 0.9.3 [December 4, 2018]

### Fixed

- Fix callHandler is not defined issue in ResourceList [#1210]
- Improved examples in Pagination toolbar docs [#1207]
- Fix appearance of select in Firefox [#1143]

### Changed

- Docs: Make it easier to add a guide [#1201]
- Docs: Hidden placeholder for layout + overriding guides [#1202]

## 0.9.2 [December 3, 2018]

### Fixed

- Form Actions: Change the role of secondary actions to `button` [#1172]
- Button: Fix alignment issues in `Button` with href [#1178]

### Changed

- Resource List: Added support for `Button` as `actions` in items (soft deprecation) [#1133]
- Internal: Migrate components to dotElement syntax [#1080]: What we did was to migrate all internal subcomponent names. The benefit of this is that we don’t have to export multiple components but only the `Component` and you have all internal subcomponents for free. We kept exporting `StyledComponent`s as `Component.Element`'s aliases so we don’t break any of your apps. **These aliases will be supported until Cosmos 1.0.**

## 0.9.1 [November 29, 2018]

### Fixed

- Global styles: Set the global line height to `1.6`. [#1176]

## 0.9.0 [November 29, 2018]

### Added

- Table: Add support for truncating table cell text [#1011]
- Icons: Add social icons [#1146]

### Fixed

- Dialog: Making dialog responsive and accessible [#1102]
- Examples: Fix warnings in Manage POC by @jvelezpo [#1135]
- Remove out of sync prop-types to typescript declarations module [#1136]

## 0.8.1 [November 22, 2018]

### Fixed

- Icons: Fix indexing of names [ae43a6]

## 0.8.0 [November 22, 2018]

Shoutout to all the hacktoberfest contributions we received!

### Fixed

- Accessibility: Fix focus styles for Tabs [#1055]
- Accessibility: Made checkbox, radio and switch accessible with a keyboard via @DCzajkowski [#1029]
- Accessibility: Makes the list HTML semantically correct [#1028]
- Accessibility: Make tabs accessible by @jvelezpo [#1052]
- Alert: Match styles of close button with styleguide by @mrewers [#1031]
- Avatar: Batch of fixes and enhancements! [#985]
- Button: Fix vertical alignment in button and it's uses [#947]
- Button: Fix margins for Safari [#1020]
- Pagination: Fix selected state for pagination button [#1061]
- Pagination toolbar: Hide toolbar if there are zero items by @astanciu [#1051]
- Table: Make the field prop optional [#1088]
- Table: Table columns can not be passed as a variable by @sanketsingh24 [#1035]
- Docs: Fix typo in contribution guide by @Gotham13121997 [#1022]
- Docs: Improve readme with material from docs website by @Tranquilled [#1039]
- Docs: Fix `Form.Radio` example by @jvelezpo [#1032]
- Docs: Make experimental notice permanent via @lopno [#1030]
- Docs: Fix sidebar scrolling in Firefox by @fer22f [#1027]
- Examples: Match names from manage dashboard by @rkhoriander [#1034]
- Examples: Fix typo in webpack-hello example by @radlinskii [#964]

### Added

- Table: Add width prop to Table Header [#1053]
- Select: Add disabled + disabled options + groups by @rakhi2104 [#1067]
- Icons: Improve precision for svg optimisation [#1095]
- Icons: Added UI icons (policy, ip address, email, database, block) [#1122]
- Icons: Added UI icons (add user, usage, search, chevron up, arrow up, arrow down)
- Docs: Adds system guidelines [#1079]

## 0.7.2 [October 24, 2018]

### Fixed

- Fix compatibility issue with `cosmos-fonts` [#1015]

## 0.7.1 [October 23, 2018]

### Added

- Add LICENSE file: MIT [#1011]

## 0.7.0 [October 23, 2018]

### Added

- Component: New `Spinner` variants (small, medium, large) [#939]
- Component: Introduce loading state for `Table` [#978]
- Icons: Added undo icon [#968]
- Icons: Added more icon [#984]
- Docs: Add example for `actions` in `Table` [#982]

### Changed

- (Breaking 💥) Move fonts to a different package [#991]

### Fixed

- Icons: Fixed lock fill icon [#968]

### Added

- Components: Add support for icons in Alerts [#919]
- Components: Add placeholder for `Select` [#934]
- Icons: Add missing icons for manage [#953]
- Documentation: Add option to switch between versions [#945]

## 0.6.0 [September 28, 2018]

### Added

- Components: Add support for icons in Alerts [#919]
- Components: Add placeholder for `Select` [#934]
- Icons: Add missing icons for manage [#953]
- Documentation: Add option to switch between versions [#945]

### Fixed

- `Alert` doesn't break with no children/text [#930]
- Enforced `Icon` size to fix icon vertical alignment [#931]

## 0.5.2 [September 11, 2018]

### Changed

- Make `description` optional in `PageHeader` [#885]
- Support `target` in link for `EmptyState` and `AvatarBlock` [#771]

### Fixed

- Fix vertical alignment of actions inside `Input` [#866]
- Fix selected tab color for `Tabs` [#886]
- Fix margin for single button in `ButtonGroup` [#905]

## 0.5.1 [September 3, 2018]

### Added

- Component: Danger Zone (experimental) [#847]

### Fixed

- Table: Add support for a Table that isn't sortable + improve documentation [#865]
- Docs: Fix production version + implement cache busting [#876]

## 0.5.0 [August 30, 2018]

### Added

- Testing: Adding support for attributes for automation [#850]

### Changed

- Manage Example: Update Page Header usage [#822]
- Pagination toolbar: disable buttons on edge pages & hide on one page [#845]
- Docs: Add deprecated tag in prop table [#852]

### Fixed

- Table: Improve interactivity of rows [#830]
- Website: Fix nav version in navigation [#834]
- Page Header: Fixed learn more arrow icon on hover [#844]

## 0.4.0 [August 17, 2018]

### Added

- Style and documenation improvements for `Pagination` [#750]
- Add automatic sorting for `Table` [#758]
- Support free texts in Page Header, Empty State and Alert [#782]

### Changed

- Primary action handler is now optional in `Form` [#790]

### Fixed

- Fixed styles for `Breadcrumbs` [#773]
- Fixed background color for loading states in `Button` [#777]
- Fixed border color for input to match Manage [#786]
- Fixed alignment for `AvatarBlock` with link [#810]
- Fixed issues with global styles and resets in styleguide [#814]

## 0.3.3 [August 7, 2018]

### Added

- Add support for multiple links in `Breadcrumbs` [#695]
- Added click handler props to ResourceList and Table [#735]
- Add document playground for folks to report issues [#738]
- Add support for `size` prop to `TextInput` [#739]

### Changed

- **Unstable**: Style improvements to `Pagination` [#741]
- Bring manage PoC closer to real manage [#745]

### Fixed

- Pass `Form` actions through to underlying `Button` [#718]
- Fix `Button` appearance with url prop [#728]
- Fix wrapping for long text in Button [#751]
- **BREAKING**: Fix state updates inside `Tabs` (end support for uncontrolled state) [#754]

## 0.3.2 [July 25, 2018]

### Fixed

- Fix deployment tooling [#726]

## 0.3.1 [July 25, 2018]

### Added

- Add `Checkbox` component [#612]
- Add support for disabling actions in `ResourceListItem` [#647]
- `Avatar` now accepts an `<svg>` for its image prop [#650]
- Support `<Button/>` in dialog actions [#660]
- Alerts can now be dismissed [#688]
- Support text in `loading` + `success` state for `Button` [#714]
- Add option to disable global styles [#719]
- Add documentation for using `styled` [#629]
- **Unstable**: Pagination component base [#666]
- Add documentation for contributing components [#638]

### Changed

- **BREAKING**: Use color name instead of hex codes for `Icon` [#684]
- **DEPRECATED**: Replace input `error` prop with `hasError` [#690]
- Rename clients to applications in manage PoC [#636]
- Change `Overlay` to be a hidden component [#693]
- Make the sidebar foldable in documentation [#686]

### Fixed

- Update PoC link in docs [#646]
- Default `<input>` to `type=text` [#691]
- Fix `styled` export [#701]
- Fix form layouts leaking into each other [#716]

## 0.3.0 [June 25, 2018]

### Added

- **Unstable**: Added `Badge` component. [#548]
- **Unstable**: Added `Tag` component. [#549]
- **Unstable**: Added `AvatarBlock` component. [#561]
- `Tooltip` now supports new `left` and `right` values for the `position` prop. [#576]
- `Stack` now supports a `space-between` value for its `align` prop, resulting in behavior similar to the flexbox property of the same name. [#591]
- `Tabs` may now optionally operate as a controlled component via new `selected` and `onSelect` props. [#585]
- Cosmos now exports its copy of [styled-components](https://github.com/styled-components/styled-components) to avoid conflicts where consumers would use their own copy. [#614, #610]
- Added TypeScript definitions for all components. (Thanks @jcenturion!) [#632]

### Changed

- **BREAKING**: Actions have now been standardized across the library. Any actions which previously expected a `text` property now expect a `label` property instead. [#559]
- **BREAKING**: `Thumbnail` has been removed, and its functionality has been merged with `Avatar` for simplicity. [#561]
- **BREAKING**: `Form` now supports only a single destructive action via the `destructiveAction` prop, which replaces the previous `destructiveActions` prop that accepted an array of actions. [#601]
- **BREAKING**: React `16.x` is now referenced as a peer dependency to avoid conflicts. [#604]
- Reorganized code, making docs and examples independent from the core library. [#575, #607]
- `PageHeader` will now render a secondary action even if there is no primary action specified. [#590]
- Switched to [nps](https://github.com/kentcdodds/nps) to manage scripts that had previously been in `package.json`. [#615]
- Replaced placeholder screenshot for `Dialog` with a real working example. [#620]

### Fixed

- Fixed issue with `Radio.Group` resulting from filtering children by type. [#581]
- Fixed various PropTypes validation warnings. [#582]
- Fixed issue where sidebar groups would not display as open even when a child was marked as `selected`. [#583]
- Fixed issue where the search in the documentation sidebar would throw an error in response to certain user input. [#593]
- Fixed issue where form inputs would lose their styling when surrounded by container elements [#619]
- Fixed issue where the preview in the documentation sandbox was not being correctly updated in response to user input in the props table [#637]
- Fixed misalignment of tooltips on `Buttons`. [#617]

## 0.2.3 [May 31, 2018]

### Fixed

- Fixed problem where fonts are not loading [#571]

## 0.2.2 [May 29, 2018]

### Added

- Added `Radio` component to Forms [#511]
- Added `Label` component [#544]
- Added support for custom Form fields [#530]
- Added prop to make tooltips visible by default [#562]

### Changed

- **BREAKING** `method` has been renamed to `handler` for all components that accept actions as a prop [#551]

  ```jsx
  <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
  ```

- Documentation improvements for `EmptyState` and `Alert` [#491] + [#534]

### Fixed

- Added missing id to Switch for accessibility [#558]
- Fixed path for tokens in helpers [#564]

## 0.2.1 [May 8, 2018]

### Changed

- New information on defaults and required fields in docs [#533]

### Fixed

- Fixed persistent warning in `Form.Actions` [#529]

## 0.2.0 [April 26, 2018]

### Added

- **Unstable**: New `ResourceList` component. [#504]
- **Unstable**: New `Table` component. [#519]

### Changed

- Expanded routes in Manage proof of concept to permit additional pages to be added. [#503]

### Fixed

- `Tabs` component now ignores `null` children instead of throwing an error. [#518]
- Fixed incorrect layout of "Learn More" link in `EmptyState`. [#514]

## 0.1.1 [April 12, 2018]

### Changed

- **BREAKING** Make cosmos babel preset an optional dependency [#497]
  The babel preset is no longer available in `@auth0/cosmos/babel`, use `@auth0/babel-preset-cosmos` instead
- An improved client list for manage proof of concept [#441]
- Better naming + urls [#493] and permalinks for docs[#492]

## 0.1.0 [April 4, 2018]

### Added

- New `cta` appearance for `Button`, to be used for primary calls to action. [#425]
- New "link mode" for `Button`. Passing an `href` prop to `Button` will cause it to render as an `<a>` instead of a `<button>`. [#425]
- **Unstable**: New `Avatar` and `Thumbnail` components. [#398]
- **Unstable**: New `Text` component for styled text. [#392]

### Changed

- **BREAKING:** Colliding Boolean props governing appearance of `Button` were replaced with an `appearance` enum. [#400]
- **BREAKING:** `line-height: 1.6` has been moved from global reset to a scope specific to cosmos components
