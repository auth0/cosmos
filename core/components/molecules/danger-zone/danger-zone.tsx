import * as React from "react";

import Automation from "../../_helpers/automation-attribute";
import containerStyles from "../../_helpers/container-styles";
import Button, { ButtonType } from "../../atoms/button";
import Heading from "../../atoms/heading";
import Paragraph from "../../atoms/paragraph";
import RowLayout from "../../layouts/row-layout";
import styled from "../../styled";
import { colors, misc, spacing } from "../../tokens";

const Container = styled.div`
  ${containerStyles};
  margin-top: ${spacing.xlarge}; /* Since separation between components is a layout concern, we should remove this margin */
`;

const DangerZoneCardsContainer = styled.div``;

const DangerZoneCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.medium};
  border-bottom: 1px solid ${colors.text.error};
  border-left: 1px solid ${colors.text.error};
  border-right: 1px solid ${colors.text.error};
  &:first-of-type {
    border-top-left-radius: ${misc.radius};
    border-top-right-radius: ${misc.radius};
    border-top: 1px solid ${colors.text.error};
  }
  &:last-of-type {
    border-bottom-left-radius: ${misc.radius};
    border-bottom-right-radius: ${misc.radius};
  }
`;

const DangerZoneTitle = styled(Heading)`
  font-size: 1.0714285714em; /* WTF */
  color: ${colors.text.error};
`;

const DangerZoneDescription = styled.div`
  margin-right: ${spacing.small};
`;

const DangerZoneAction = styled.div``;

export interface IDangerZoneProps {
  /** HTML ID of the component */
  id?: string;
  items: {
    title: string;
    action?: { loading?: boolean; label?: string; onClick?: Function; type?: ButtonType };
    description?: React.ReactNode;
  }[];
}

const DangerZone = ({ items, ...props }: IDangerZoneProps) => (
  <Container {...Automation("danger-zone")} {...props}>
    <RowLayout gutter="small">
      <Heading size={3}>Danger Zone</Heading>
      <DangerZoneCardsContainer>
        {items.map((item) => (
          <DangerZoneCard key={item.title}>
            <DangerZoneDescription>
              <RowLayout gutter="xsmall">
                <DangerZoneTitle size={4}>{item.title}</DangerZoneTitle>
                {item.description ? <Paragraph>{item.description}</Paragraph> : null}
              </RowLayout>
            </DangerZoneDescription>
            <DangerZoneAction>
              <Button
                type={item.action.type || "button"}
                onClick={(e) => {
                  item.action.onClick(e);
                }}
                appearance="destructive"
                loading={item.action.loading}
                {...Automation("danger-zone.action")}
              >
                {item.action.label}
              </Button>
            </DangerZoneAction>
          </DangerZoneCard>
        ))}
      </DangerZoneCardsContainer>
    </RowLayout>
  </Container>
);

export default DangerZone;
