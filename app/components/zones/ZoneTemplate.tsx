import { ZoneData } from '@/app/types/types';
import styles from './ZoneTemplate.module.css';

type Props = {
	children?: React.ReactNode;
	zoneData: ZoneData;
};

export default function ZoneTemplate({ children, zoneData }: Props) {
	const { zoneCoordinates } = zoneData;

	return (
		<div
			className={styles.ZoneTemplate}
			style={{
				gridColumn: zoneCoordinates.column,
				gridRow: zoneCoordinates.row,
			}}
		>
			{children}
		</div>
	);
}
