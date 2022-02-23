import * as React from "react";
import { fireEvent, render } from "react-testing-library";

import customIdTest from "../helpers/custom-id";
import Fixture from "./form.fixture";

test("Accepts custom id prop", () => {
  customIdTest(Fixture, "form");
  customIdTest(Fixture, "text-input");
});

test("Primary action calls submit and click handler", () => {
  const form = render(<Fixture />);

  const primaryButton = form.getByText("Save Changes") as HTMLElement;
  fireEvent.click(primaryButton);

  expect(Fixture.onPrimaryClick).toHaveBeenCalled();
});

test("Secondary action calls handler", () => {
  const form = render(<Fixture />);

  const secondaryAction = form.getByText("Reset") as HTMLElement;
  fireEvent.click(secondaryAction);

  expect(Fixture.onSecondaryAction).toHaveBeenCalled();
});
