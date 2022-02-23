import * as React from "react";
import { fireEvent, render } from "react-testing-library";

import customIdTest from "../helpers/custom-id";
import Fixture from "./pager.fixture";

test("Accepts custom id prop", () => {
  customIdTest(Fixture, "pager");
});

test("Calls page change event handler", () => {
  const body = render(<Fixture />);

  const nextButton = body.getByText("Older") as HTMLElement;
  fireEvent.click(nextButton, {});

  expect(Fixture.onPageChanged).toHaveBeenCalled();
});
