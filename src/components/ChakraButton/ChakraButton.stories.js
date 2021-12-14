import React from 'react';
import { Button } from '@chakra-ui/react';

export default {
	title: 'Chakra/Button',
	component: Button,
	// argTypes: {
	// 	colorScheme: {
	// 		control: 'text',
	// 	},
	// },
	argTypes: { onClick: { action: 'clicked' } },
};

// export const Primary = () => <Button colorScheme='teal'>Chakra Button</Button>;

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
