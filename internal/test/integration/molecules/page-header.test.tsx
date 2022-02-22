import * as React from "react";
import { fireEvent, render } from "react-testing-library";

import customIdTest from "../helpers/custom-id";
import eventHandlerTest from "../helpers/event-handler";
import Fixture from "./page-header.fixture";

test("Accepts custom id prop", () => {
  customIdTest(Fixture, "page-header");
});

test("Calls custom event handler", () => {
  const body = render(<Fixture />);

  const primaryAction = body.getByText("Create Client") as HTMLElement;
  fireEvent.click(primaryAction, {});

  expect(Fixture.onPrimaryClick).toHaveBeenCalled();
});
