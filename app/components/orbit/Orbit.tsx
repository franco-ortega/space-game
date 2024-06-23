import styles from './Orbit.module.css';

type Props = {
	children: React.ReactNode;
};

export default function Orbit({ children }: Props) {
	return <div className={styles.Orbit}>{children}</div>;
}
