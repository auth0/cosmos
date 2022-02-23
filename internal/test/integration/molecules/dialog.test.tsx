import * as React from "react";
import { render } from "react-testing-library";

import customIdTest from "../helpers/custom-id";
import Fixture from "./dialog.fixture";

test("Accepts custom id prop", () => {
  customIdTest(Fixture, "dialog");
});

test("Calls actions handler", () => {
  const dialog = render(<Fixture />);

  const dialogAction = dialog.getAllByTestId("dialog.action")[0] as HTMLElement;
  dialogAction.click();

  expect(Fixture.actionOnClick).toHaveBeenCalled();
});

test("Calls onClose handler", () => {
  const dialog = render(<Fixture />);

  const closeAction = dialog.getByTestId("dialog.close") as HTMLElement;
  closeAction.click();

  expect(Fixture.onClose).toHaveBeenCalled();
});
