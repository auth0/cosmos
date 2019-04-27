import * as React from "react";

import { storiesOf } from "@storybook/react";

import { Pagination } from "../../";
import { Example } from "../../_helpers/story-helpers";

storiesOf('Pagination', module).add('default', () => (
  <Example>
    <Pagination items={20372} perPage={10} page={3} />
  </Example>
))
