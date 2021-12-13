import './Input.css';

const Input = (props) => {
	const { size = 'md', children, ...rest } = props;
	return <input className={`input ${size}`} {...rest} />;
};

export default Input;
