import styles from './ZoneTemplate.module.css';

type Props = {
	children: React.ReactNode;
};

export default function ZoneTemplate({ children }: Props) {
	return <div className={styles.ZoneTemplate}>{children}</div>;
}
