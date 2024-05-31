import Link from 'next/link';

type Props = { src: string; text: string };

export default function LinkButton({ src, text }: Props) {
	return (
		<Link href={src}>
			<span>{text}</span>
		</Link>
	);
}
