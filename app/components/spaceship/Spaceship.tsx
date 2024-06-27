import Image, { StaticImageData } from 'next/image';
import { ShipData } from '@/app/types/types';
import styles from './Spaceship.module.css';

type Props = {
	ship: StaticImageData;
	shipData: ShipData;
};

export default function Spaceship({
	ship,
	shipData: {
		shipCoordinates: { column, row },
	},
}: Props) {
	return (
		<div
			className={styles.Spaceship}
			style={{
				gridColumn: column,
				gridRow: row,
			}}
		>
			<Image alt='spaceship' src={ship} />
		</div>
	);
}
