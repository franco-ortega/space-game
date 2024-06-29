import { Dispatch, SetStateAction } from 'react';
import { GridCoordinates } from '@/app/types/types';
import styles from './SpaceDock.module.css';

type Props = {
	setShipLocation: Dispatch<SetStateAction<GridCoordinates>>;
	zoneData: GridCoordinates;
};

export default function SpaceDock({ setShipLocation, zoneData }: Props) {
	function onSpaceDockClick() {
		console.log(`space dock clicked`);
		setShipLocation((prev) => {
			console.log(prev);
			return zoneData;
		});
	}
	return (
		<button className={styles.SpaceDock} onClick={onSpaceDockClick}></button>
	);
}
