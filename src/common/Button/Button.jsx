const Button = ({ text, onClick, color }) => (
	<button type='submit' className={color} onClick={onClick}>
		{text}
	</button>
);

export default Button;
