import { useTheme } from 'src/styles/theme/CustomThemeProvider';

export default function BlockquoteBlock({ node, children, ...props }: any) {
	const style = useTheme();

	return (
		<div className={`blockquote ${style}`} {...props}>
			{children}
		</div>
	);
}
