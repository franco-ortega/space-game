import Link from 'next/link';

type Props = { src: string };

function LinkButton({ src }: Props) {
	return <Link href={src}>Link</Link>;
}

export default Link;
