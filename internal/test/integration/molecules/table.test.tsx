import * as React from "react";
import { fireEvent, render } from "react-testing-library";

import customIdTest from "../helpers/custom-id";
import Fixture from "./table.fixture";

test("Accepts custom id prop", () => {
  customIdTest(Fixture, "table");
});

test("Calls on sort event handler", () => {
  const body = render(<Fixture />);

  const nextButton = body.getByText("Goals") as HTMLElement;
  fireEvent.click(nextButton);

  expect(Fixture.onSort).toHaveBeenCalled();
});

test("Calls on row click event handler", () => {
  const body = render(<Fixture />);

  const row = body.getByTestId("table.row") as HTMLElement;
  fireEvent.click(row);

  expect(Fixture.onRowClick).toHaveBeenCalled();
});
