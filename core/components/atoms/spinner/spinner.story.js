import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Spinner } from '@auth0/cosmos'

storiesOf('Spinner').add('default', () => (
	<React.Fragment>
		<Example title="Spinner – small">
			<Spinner size="small" />
		</Example>
		<Example title="Spinner – default">
			<Spinner />
		</Example>
		<Example title="Spinner – large">
			<Spinner size="large" />
		</Example>
	</React.Fragment>
))

storiesOf('Spinner').add('dark background', () => (
	<React.Fragment>
		<Example title="Spinner – small" background="dark">
			<Spinner inverse size="small" />
		</Example>
		<Example title="Spinner – default" background="dark">
			<Spinner inverse />
		</Example>
		<Example title="Spinner – large" background="dark">
			<Spinner inverse size="large" />
		</Example>
	</React.Fragment>
))
