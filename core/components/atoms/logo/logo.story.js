import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Logo } from '@auth0/cosmos'

/**
<div> elements has been added to each <Logo /> instance to make them "display: block;"
  */

storiesOf('Logo').add('default', () => (
	<React.Fragment>
		<Example title="Logo – tiny">
			<div>
				<Logo size="tiny" />
			</div>
			<div>
				<Logo size="tiny" color="dark" />
			</div>
		</Example>
		<Example title="Logo – small">
			<div>
				<Logo size="small" />
			</div>
			<div>
				<Logo size="small" color="dark" />
			</div>
		</Example>
		<Example title="Logo – default">
			<div>
				<Logo size="default" />
			</div>
			<div>
				<Logo size="default" color="dark" />
			</div>
		</Example>
	</React.Fragment>
))

storiesOf('Logo').add('dark background', () => (
	<React.Fragment>
		<Example title="Logo – tiny" background="dark">
			<div>
				<Logo size="tiny" />
			</div>
			<div>
				<Logo size="tiny" color="light" />
			</div>
		</Example>
		<Example title="Logo – small" background="dark">
			<div>
				<Logo size="small" />
			</div>
			<div>
				<Logo size="small" color="light" />
			</div>
		</Example>
		<Example title="Logo – default" background="dark">
			<div>
				<Logo size="default" />
			</div>
			<div>
				<Logo size="default" color="light" />
			</div>
		</Example>
	</React.Fragment>
))
