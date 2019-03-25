- Create a new file under `docs/pages/`. Example: `docs/pages/new-guide.js`
- Export a React component from this file. You can import `docs-components` and cosmos components to make authoring easier.
- Import this component and add it to `docs/guides.js`

```js
import GuidingPrinciples from "./pages/guiding-principles"
import NewGuide from "./pages/new-guide"
// this is the order in which they are displayed in the sidebar //
const guides = [
  {
    path: "/guiding-principles",
    title: "Guiding Principles",
    component: GuidingPrinciples,
  },
  { path: "/new-guide", title: "New Guide", component: NewGuide },
]
```

- That's it, you should see your new guided in the sidebar.
