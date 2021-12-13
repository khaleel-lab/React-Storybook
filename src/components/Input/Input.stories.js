import Input from './Input';

export default {
	title: 'Folder/Input',
	component: Input,
};

export const Small = () => <Input size='sm' placeholder='Small Size' />;
export const Medium = () => <Input size='md' placeholder='Mediul Size' />;
export const Large = () => <Input size='lg' placeholder='Large Size' />;
