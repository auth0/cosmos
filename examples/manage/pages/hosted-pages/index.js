import React from 'react'
import styled from 'styled-components'

import { PageHeader, Paragraph, Heading, Form, Link } from '@auth0/cosmos'

import Banner from '../../components/banner'

const Customizer = styled.div`
  display: flex;
  border-radius: 3px;
  border: 1px solid rgb(179, 179, 179);
  margin-top: 32px;
`

const Controls = styled.div`
  padding: 1em 2.5em;
  width: 35%;
`

const Preview = styled.div`
  background-color: rgb(213, 213, 213);
  width: 100%;
  display: flex;
  flex: 1 0 0;
`

class HostedPagesIndex extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Hosted Pages"
          description={{
            text:
              'Create a beautiful hosted login page where you can redirect to authenticate your users.',
            learnMore: '/'
          }}
        />
        <Banner>
          <Paragraph>
            The hosted login page will be served by default at
            <strong> fernandocarrettoni.auth0.com/login</strong>. You can use your own domain by
            configuring it in <Link>Custom Domains</Link>.
          </Paragraph>
        </Banner>

        <section>
          <Heading size="2">General Appearance</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec turpis ante. Aliquam
            pretium, sapien nec consectetur molestie, turpis arcu facilisis lacus, quis faucibus
            odio tellus sed nibh.{' '}
          </Paragraph>

          <Customizer>
            <Controls>
              <Form layout="label-on-top">
                <Form.TextInput label="Logo" type="url" placeholder="http://mylogo.svg" />
                <Form.TextInput
                  label="Accent color"
                  type="text"
                  placeholder=""
                  defaultValue="#0066F9"
                />
                <Form.TextInput
                  label="Login box background color"
                  type="text"
                  placeholder=""
                  defaultValue="#0066F9"
                />
                <Form.TextInput
                  label="Page background color"
                  type="text"
                  placeholder=""
                  error="jsjjs"
                  defaultValue="#0066F9"
                />
                <Form.TextInput
                  label="Success color"
                  type="text"
                  placeholder=""
                  defaultValue="#0066F9"
                />
                <Form.TextInput
                  label="Error color"
                  type="text"
                  placeholder=""
                  defaultValue="#0066F9"
                />
                <Form.TextInput
                  label="Warning color"
                  type="text"
                  placeholder=""
                  defaultValue="#0066F9"
                />
              </Form>
            </Controls>

            <Preview />
          </Customizer>

          <Form layout="label-on-top">
            <Form.Actions
              primaryAction={{ label: 'Save', handler: () => {} }}
              secondaryActions={[{ label: 'Reset to default', handler: () => {} }]}
            />
          </Form>
        </section>
      </div>
    )
  }
}

export default HostedPagesIndex
