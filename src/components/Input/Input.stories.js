import Input from './Input';

export default {
	title: 'Folder/Input',
	component: Input,
};

export const Small = () => <Input size='sm' placeholder='Small Size' />;
export const Medium = () => <Input size='md' placeholder='Mediul Size' />;
export const Large = () => <Input size='lg' placeholder='Large Size' />;

const Template = (args) => <Input {...args} />;

export const SmallArg = Template.bind({});
SmallArg.args = {
	size: 'sm',
	placeholder: 'SmallArg Placeholder',
};
