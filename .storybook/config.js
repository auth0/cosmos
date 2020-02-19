import "ts-polyfill/lib/es2015-promise";
import { configure, addDecorator } from "@storybook/react";
import { getStorybook } from "@storybook/react";
import { CssBaselineDecorator } from "../core/components/_helpers/story-decorators";
import "storybook-chromatic";

/* This line loads all the .story files from the components */
const components = require.context("../core/components/", true, /story\.(js|tsx)$/);
const examples = require.context("../examples/", true, /story\.(js|tsx)$/);

addDecorator(CssBaselineDecorator);

function loadStories() {
  components.keys().forEach(components);
  examples.keys().forEach(examples);
}

configure(loadStories, module);

export { getStorybook };
