import * as React from "react";

import { StoryDecorator } from "@storybook/react";

import CssBaseline from "../atoms/css-baseline";

export const CssBaselineDecorator: StoryDecorator = (story) => {
  return (
    <>
      <CssBaseline />
      {story()}
    </>
  );
};
