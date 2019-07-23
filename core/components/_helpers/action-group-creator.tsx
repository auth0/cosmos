import * as React from "react";

import Button, { ButtonAppearance, ButtonSize } from "../atoms/button";
import ButtonGroup from "../molecules/button-group";

export interface IObjectAction {
  label: string
  icon?: string
  handler?: Function
  appearance?: ButtonAppearance
  size?: ButtonSize
}

export type IAction = IObjectAction | JSX.Element

const getActionGroup = (actions: IAction[] = [], actionOverrides: Partial<IObjectAction> = {}) => {
  /* If the first button is a React element */
  if (React.isValidElement(actions[0])) {
    return (
      <ButtonGroup compressed={true}>
        {actions.map((action, index) => {
          /* add key to each element of array */
          if (!action) {
            return null
          }
          return React.cloneElement(action as JSX.Element, {
            key: index,
            ...actionOverrides
          })
        })}
      </ButtonGroup>
    )
  } else {
    /* If the actions are of object shape */
    return (
      <ButtonGroup compressed={true}>
        {actions.map((action: IObjectAction, index) => {
          return <Button key={index} onClick={action.handler} {...action} {...actionOverrides} />
        })}
      </ButtonGroup>
    )
  }
}

export default getActionGroup
