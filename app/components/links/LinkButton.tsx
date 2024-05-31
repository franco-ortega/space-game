import Link from 'next/link';
import styles from './LinkButton.module.css';

type Props = { src: string; text: string };

export default function LinkButton({ src, text }: Props) {
	return (
		<Link href={src} className={styles.LinkButton}>
			<span>{text}</span>
		</Link>
	);
}
