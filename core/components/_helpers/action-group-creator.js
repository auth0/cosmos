import React from 'react'

import Button from '../atoms/button'
import ButtonGroup from '../molecules/button-group'

const getActionGroup = actions => {
  /* If the first button is an instance of the Button component */
  if (actions[0].$$typeof === 'Button') {
    return (
      <ButtonGroup compressed>
        {actions.map((action, index) => {
          /* add key to each element of array */
          return React.cloneElement(action, { key: index })
        })}
      </ButtonGroup>
    )
  } else {
    /* If the actions are of object shape */
    return (
      <ButtonGroup compressed>
        {actions.map((action, index) => (
          <Button
            appearance="link"
            size="small"
            key={index}
            icon={action.icon}
            onClick={action.handler}
            label={action.label}
          />
        ))}
      </ButtonGroup>
    )
  }
}

export default getActionGroup
