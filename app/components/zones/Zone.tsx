import { ComponentType } from 'react';
import { GridCoordinates } from '@/app/types/types';
import styles from './Zone.module.css';

type Props = {
	Planet?: ComponentType;
	zoneData: GridCoordinates;
};

export default function Zone({ zoneData: { column, row }, Planet }: Props) {
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
