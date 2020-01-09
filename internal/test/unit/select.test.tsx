import * as React from "react";
import { render } from "enzyme";
import { Select } from "@auth0/cosmos";

describe("Select", () => {
  it("simple variant renders SimpleSelect", () => {
    const select = render(
      <Select
        options={[{ text: "One", value: 1 }, { text: "Two", value: 2 }, { text: "Three", value: 3 }]}
        placeholder="Something"
        onChange={(event) => console.log(event)}
        onFocus={(event) => console.log(event)}
        onBlur={(event) => console.log(event)}
      />
    );

    expect(select).toMatchSnapshot();
  });

  it("multiple variant renders ReactSelect", () => {
    const select = render(
      <Select
        options={[{ text: "One", value: 1 }, { text: "Two", value: 2 }, { text: "Three", value: 3 }]}
        placeholder="Something"
        onChange={(event) => console.log(event)}
        onFocus={(event) => console.log(event)}
        onBlur={(event) => console.log(event)}
        defaultMenuOpen={true}
        multiple={true}
      />
    );

    expect(select).toMatchSnapshot();
  });

  it("searchable variant renders ReactSelect", () => {
    const select = render(
      <Select
        options={[{ text: "One", value: 1 }, { text: "Two", value: 2 }, { text: "Three", value: 3 }]}
        placeholder="Something"
        onChange={(event) => console.log(event)}
        onFocus={(event) => console.log(event)}
        onBlur={(event) => console.log(event)}
        defaultMenuOpen={true}
        searchable={true}
      />
    );

    expect(select).toMatchSnapshot();
  });

  it("customOptionRenderer variant renders ReactSelect", () => {
    const select = render(
      <Select
        options={[{ text: "One", value: 1 }, { text: "Two", value: 2 }, { text: "Three", value: 3 }]}
        placeholder="Something"
        onChange={(event) => console.log(event)}
        onFocus={(event) => console.log(event)}
        onBlur={(event) => console.log(event)}
        defaultMenuOpen={true}
        customOptionRenderer={(option) => <div>{option.label}</div>}
      />
    );

    expect(select).toMatchSnapshot();
  });

  it("async variant renders ReactSelect", () => {
    const select = render(
      <Select
        async={true}
        loadOptions={() => {}}
        placeholder="Something"
        onChange={(event) => console.log(event)}
        onFocus={(event) => console.log(event)}
        onBlur={(event) => console.log(event)}
        defaultMenuOpen={true}
      />
    );

    expect(select).toMatchSnapshot();
  });
});
