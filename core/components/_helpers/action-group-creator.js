import React from 'react'

import Button from '../atoms/button'
import ButtonGroup from '../molecules/button-group'

const getActionGroup = (actions = [], actionOverrides = {}) => {
  /* If the first button is a React element */
  if (React.isValidElement(actions[0])) {
    return (
      <ButtonGroup compressed>
        {actions.map((action, index) => {
          /* add key to each element of array */
          return React.cloneElement(action, { key: index, ...actionOverrides })
        })}
      </ButtonGroup>
    )
  } else {
    /* If the actions are of object shape */
    return (
      <ButtonGroup compressed>
        {actions.map((action, index) => (
          <Button key={index} onClick={action.handler} {...action} {...actionOverrides} />
        ))}
      </ButtonGroup>
    )
  }
}

export default getActionGroup
