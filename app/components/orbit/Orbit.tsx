import styles from './Orbit.module.css';

type Props = {
	children: React.ReactNode;
	planetPosition: {
		alignItems: string;
		justifyContent: string;
	};
};

export default function Orbit({
	children,
	planetPosition: { alignItems, justifyContent },
}: Props) {
	return (
		<div className={styles.Orbit} style={{ alignItems, justifyContent }}>
			{children}
		</div>
	);
}
