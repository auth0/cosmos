### Goals of the engine

Point engine at a folder with components and it will generate the documentation

### Input:

1. Component files
2. Storybook files

### Output:

1. Pages/Guides
2. Component documentation with knobs
3. Component documentation with examples
4. Overview page
5. Storybook
6. Playground page

### Options/flexibility:

- component folder / pattern
- path to freeform pages
- public/local deployment
- generate examples from markdown / storybook files

(preferably in `engine-config.json`)

### Commands:

- [engine start](https://youtu.be/1F5PUl4j9KY?t=18)

---

### Implementation details

1. Get files
2. Generate metadata (docgen + frontmatter)
3. Get guides
4. Create pages
5. Start server
