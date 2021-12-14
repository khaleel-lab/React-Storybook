import React from 'react';
import { addDecorator } from '@storybook/react';
import { Center } from '../src/components/CenterUtil/Center';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// #Global level decarator

// Created Css file to center
// addDecorator((story) => <Center>{story()}</Center>);

// Theming V5.3
// addDecorator((story) => (
// 	<ChakraProvider>
// 		<Box m='4'>{story()}</Box>
// 	</ChakraProvider>
// ));

export const decarators = [
	(Story) => (
		<ChakraProvider theme={theme}>
			<Box m='4'>
				<Story />
			</Box>
		</ChakraProvider>
	),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },

	// Sorting stories
	options: {
		storySort: (a, b) =>
			a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
	},

	// ViewPort Config
	viewport: {
		viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
		defaultViewport: 'someDefault',
	},

	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
