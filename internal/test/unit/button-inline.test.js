import React from 'react'
import { shallow } from 'enzyme'
import styled from 'styled-components'
import { spacing } from '@auth0/cosmos-tokens'

import Form from '../../../core/components/molecules/form/form';
import Actions from '../../../core/components/molecules/form/actions/actions';
import TextInput from '../../../core/components/atoms/text-input/text-input';
import Stack from '../../../core/components/molecules/stack/stack';

const form_example = ({
    error = 'whats up'
} = {}) => (
        < Form layout="label-on-top" >
            <Stack widths={[45, 45, 10]}>
                <Form.TextInput
                    label="Name"
                    type="text"
                    name="name"
                    placeholder="read:appointment"
                    error={error}
                />
                <Form.TextInput
                    label="Description"
                    type="text"
                    name="description"
                    placeholder="Read your appointments"
                    error={error}
                />
                <Form.Actions
                    primaryAction={{ label: "Save Changes", handler: () => { } }}
                />
            </Stack>
        </Form >
    )


describe('Button inline with(out) error message', () => {
    it('should be inline with error', () => {
        const wrapper = shallow(form_example());
        expect(wrapper).toMatchSnapshot();
    })
    it('should be inline without error', () => {
        const wrapper = shallow(form_example({ error: null }));
        expect(wrapper).toMatchSnapshot();
    })
})