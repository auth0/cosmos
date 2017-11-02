<p align="center">
  <img src="/assets/cosmos.png">
  <br><br>
  <b>auth0 design systems</b>
  <br>
</p>

&nbsp;

> “Set of shared and integrated principles and patterns that define the overall design of a product.” — Karri Saarinen @ Airbnb

&nbsp;

There are 4 big parts of cosmos:

- Tokens: _configs_ that can be shared imported into projects
- Components: React component library
- Overview: Bird's eye view of components
- Styleguide: Documentation of the design system

&nbsp;

In it's current shape, this repository is a create-react-app project.

The `src` folder has all of the code, while `assets` has our design files.

If you peak under `src`, you will find 3 big folders. As we build our library, these folders can directly import code from each other. However, in the final structure, `tokens` and `components` will be consumable as npm packages.

&nbsp;
