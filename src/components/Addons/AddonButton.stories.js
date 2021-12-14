// Component
import Button from '../Button/Button';

import { action, actions } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';

export default {
	title: 'Addons',
	component: Button,
};

export const ActionAddon = () => (
	<Button onClick={action('button-click')} variant='primary'>
		Primary
	</Button>
);

export const MultipleAddon = () => (
	<Button {...actions('onClick', 'onMouseOver')} variant='primary'>
		Primary
	</Button>
);

export const Log = () => (
	<Button
		// Logging Environment Variable - passed form the package.json
		onClick={() => console.log('Button Clicked', process.env.STORYBOOK_THEME)}
		variant='success'
	>
		Log
	</Button>
);

export const Knobs = () => (
	<Button
		{...actions('onClick', 'onMouseOver')}
		variant='success'
		disabled={boolean('Disabled', false)}
	>
		{text('Label', 'Button Label')}
	</Button>
);
