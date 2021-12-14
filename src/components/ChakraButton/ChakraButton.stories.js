import React from 'react';
import { Button } from '@chakra-ui/react';

export default {
	title: 'Chakra/Button',
	component: Button,
	// Component level actions
	argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <Button {...args} />;

export const ChakaraSuccess = Template.bind({});
ChakaraSuccess.args = {
	colorScheme: 'teal',
	children: 'Success',
};

export const ChakaraDanger = Template.bind({});
ChakaraDanger.args = {
	colorScheme: 'teal',
	children: 'Danger',
};
