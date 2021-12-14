import { Center } from '../CenterUtil/Center';
import Button from './Button';

export default {
	title: 'Folder/Button',
	component: Button,
	args: {
		children: 'Button name',
	},
	argsTypes: {
		variant: { control: 'text' },
		children: { control: 'text' },
		onClick: { action: 'clicked' },
	},
	// Component level decorator
	// decorators: [(story) => <Center>{story()}</Center>],
};

// Normal approach to pass props
// export const Primary = () => <Button variant='primary'>Primary V6</Button>;
// export const Secondary = () => <Button variant='secondary'>Secondary</Button>;
// export const Success = () => <Button variant='success'>Success</Button>;
// export const Danger = () => <Button variant='danger'>Danger</Button>;

// Renaming Storybook
// Primary.storyName = 'Primary V6';

// By using args approach to pass props
const Template = (args) => <Button {...args} />;

export const PrimaryArg = Template.bind({});
PrimaryArg.args = {
	variant: 'primary',
	// children: 'Primary Arg',
};

export const LongPrimaryArg = Template.bind({});
LongPrimaryArg.args = {
	...PrimaryArg,
	// children: 'Long Primary Arg',
};

export const SecondaryArg = Template.bind({});
SecondaryArg.args = {
	variant: 'secondary',
	// children: 'Secondary Arg',/
};
