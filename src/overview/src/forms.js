import React from 'react'

import Container from './container'
import { Input, Form, FormField, FormLabel, HelperText, Error } from '../../components'

const Forms = () => (
  <Container title="Forms">
    <Form>
      <FormField>
        <FormLabel>Field label</FormLabel>
        <Input placeholder="Placeholder text" />
      </FormField>

      <FormField>
        <FormLabel>This field has text</FormLabel>
        <Input defaultValue="This is the field value" />
      </FormField>

      <FormField>
        <FormLabel>Readonly field</FormLabel>
        <Input readOnly placeholder="Placeholder text" />
      </FormField>

      <FormField>
        <FormLabel>Field with helper text</FormLabel>
        <Input placeholder="Placeholder text" />
        <HelperText>
          Name of the connection to be use for Password Grant exchanges. The default_directory value
          should be the exact name of an existing connections of one of the following.
        </HelperText>
      </FormField>

      <FormField>
        <FormLabel>Text input with error</FormLabel>
        <Input error />
        <Error>The field name is required</Error>
      </FormField>
    </Form>
  </Container>
)

export default Forms
