import { ComponentType, Dispatch, SetStateAction } from 'react';
import { GridCoordinates, ZoneData } from '@/app/types/types';
import styles from './Zone.module.css';

type Props = {
	Planet: ComponentType;
	zoneData: ZoneData;
	setShipLocation: Dispatch<SetStateAction<GridCoordinates>>;
};

export default function Zone({
	zoneData: {
		zoneCoordinates: { column, row },
	},
	Planet,
	setShipLocation,
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
