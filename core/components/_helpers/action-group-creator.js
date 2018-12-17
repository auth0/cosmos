import React from 'react'

import Button from '../atoms/button'
import ButtonGroup from '../molecules/button-group'

const getActionGroup = actions => {
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

export default getActionGroup
