import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';

// Component
import { Center } from '../src/components/CenterUtil/Center';

// Console addon
import '@storybook/addon-console';

// To console root component
import { withConsole } from '@storybook/addon-console';

// #Global level decarator

// Created Css file to center
// addDecorator((story) => <Center>{story()}</Center>);

// Theming V5.3
// addDecorator((story) => (
// 	<ChakraProvider>
// 		<Box m='4'>{story()}</Box>
// 	</ChakraProvider>
// ));

// Theming V6
export const decarators = [
	(Story) => (
		<ChakraProvider theme={theme}>
			<Box m='4'>
				<Story />
			</Box>
		</ChakraProvider>
	),
];

//  To log - from which component info function
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addDecorator(withKnobs);
addDecorator(withA11y);

// Use a detailed set of devices
addParameters({
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
});

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },

	// Sorting stories
	options: {
		storySort: (a, b) =>
			a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
	},

	// default set of viewports
	// viewport: {
	// 	viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
	// 	defaultViewport: 'someDefault',
	// },

	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
