const Button = ({ text, onClick, color, type }) => (
	<button type={type || 'button'} className={color} onClick={onClick}>
		{text}
	</button>
);

export default Button;
