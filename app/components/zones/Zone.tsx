import { GridCoordinates } from '@/app/types/types';
import styles from './Zone.module.css';

type Props = {
	children?: React.ReactNode;
	zoneData: GridCoordinates;
};

export default function Zone({ children, zoneData: { column, row } }: Props) {
	console.log({ row });
	return (
		<div
			className={styles.Zone}
			style={{
				gridColumn: column,
				gridRow: row,
			}}
		>
			{children}
		</div>
	);
}
