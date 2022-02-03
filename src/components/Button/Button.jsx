const Button = ({ text, onClick, color }) => (
	<button type='button' className={color} onClick={onClick}>
		{text}
	</button>
);

export default Button;
