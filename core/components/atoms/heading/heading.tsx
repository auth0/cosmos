import * as React from "react";

import Automation from "../../_helpers/automation-attribute";
import styled from "../../styled";
import { colors, fonts } from "../../tokens";

const BaseHeading = styled.h1`
  margin: 1em 0;
  color: ${colors.text.default};
  font-weight: ${fonts.weight.normal};
  line-height: 1.3;
`;

export interface IHeadingProps {
  /** HTML ID of the component */
  id?: string;
  size?: 1 | 2 | 3 | 4;
  children?: React.ReactNode;
  onClick?: Function;
}

const Heading = (props: IHeadingProps) => {
  const Component = Heading.Element[props.size];
  return (
    <Component {...Automation("heading")} {...props}>
      {props.children}
    </Component>
  );
};

Heading.Element = [];

Heading.Element[1] = styled(BaseHeading).attrs({ as: "h1" })`
  font-size: 36px;
`;

Heading.Element[2] = styled(BaseHeading).attrs({ as: "h2" })`
  font-size: 24px;
  font-weight: ${fonts.weight.medium};
`;

Heading.Element[3] = styled(BaseHeading).attrs({ as: "h3" })`
  font-size: 18px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.bold};
`;

Heading.Element[4] = styled(BaseHeading).attrs({ as: "h4" })`
  font-size: 14px;
  font-weight: ${fonts.weight.medium};
`;

const StyledHeading = Heading.Element;

Heading.defaultProps = {
  size: 1,
  children: null
};

export default Heading;
export { StyledHeading, BaseHeading };
