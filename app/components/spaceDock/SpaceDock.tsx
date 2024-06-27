import { Dispatch, SetStateAction } from 'react';
import styles from './SpaceDock.module.css';

type Props = {
	setShipLocation: Dispatch<SetStateAction<{ column: string; row: string }>>;
	zoneData: { column: string; row: string };
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
