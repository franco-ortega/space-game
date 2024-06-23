import { ZoneData } from '@/app/types/types';
import styles from './ZoneTemplate.module.css';

type Props = {
	children?: React.ReactNode;
	zoneData: ZoneData;
};

export default function ZoneTemplate({
	children,
}: // zoneData: { column, row },
Props) {
	return (
		<div
			className={styles.ZoneTemplate}
			// style={{
			// 	gridColumn: column,
			// 	gridRow: row,
			// }}
		>
			{children}
		</div>
	);
}
