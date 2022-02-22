import * as React from "react";
import { fireEvent, render } from "react-testing-library";

import customIdTest from "../helpers/custom-id";
import Fixture from "./pagination.fixture";

test("Accepts custom id prop", () => {
  customIdTest(Fixture, "pagination");
});

test("Calls page change event handler", () => {
  const body = render(<Fixture />);

  const nextButton = body.getByLabelText("Next page") as HTMLElement;
  fireEvent.click(nextButton, {});

  expect(Fixture.onPageChanged).toHaveBeenCalled();

  const lastButton = body.getByText("Last") as HTMLElement;
  fireEvent.click(lastButton, {});

  expect(Fixture.onPageChanged).toHaveBeenCalled();
});
