import { ComponentType } from 'react';
import { GridCoordinates, ZoneData } from '@/app/types/types';
import styles from './Zone.module.css';

type Props = {
	Planet: ComponentType;
	zoneData: ZoneData;
};

export default function Zone({
	zoneData: {
		zoneCoordinates: { column, row },
	},
	Planet,
}: Props) {
	return (
		<div
			className={styles.Zone}
			style={{
				gridColumn: column,
				gridRow: row,
			}}
		>
			<Planet />
		</div>
	);
}
