// ShipMover.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import './styles.css';

interface Position {
	x: number;
	y: number;
}

const ShipMover: React.FC = () => {
	const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
	const shipRef = useRef<HTMLDivElement | null>(null);

	const moveShip = (x: number, y: number) => {
		const shipElement = shipRef.current;
		if (shipElement) {
			const rect = shipElement.getBoundingClientRect();
			const gridContainerRect =
				shipElement.parentElement!.getBoundingClientRect();
			const startX = rect.left - gridContainerRect.left;
			const startY = rect.top - gridContainerRect.top;

			setPosition({ x, y });

			const endX = x * (gridContainerRect.width / 5);
			const endY = y * (gridContainerRect.height / 5);

			shipElement.style.transform = `translate(${startX}px, ${startY}px)`;
			requestAnimationFrame(() => {
				shipElement.style.transition = 'transform 2s ease-in-out';
				shipElement.style.transform = `translate(${endX}px, ${endY}px)`;
			});
		}
	};

	useEffect(() => {
		const shipElement = shipRef.current;
		if (shipElement) {
			const handleTransitionEnd = () => {
				shipElement.style.transition = 'none';
				shipElement.style.transform = 'none';
				shipElement.style.gridColumnStart = (position.x + 1).toString();
				shipElement.style.gridRowStart = (position.y + 1).toString();
			};

			shipElement.addEventListener('transitionend', handleTransitionEnd);
			return () => {
				shipElement.removeEventListener('transitionend', handleTransitionEnd);
			};
		}
	}, [position]);

	console.log({ position });

	return (
		<div className='grid-container'>
			{[...Array(25)].map((_, index) => (
				<div
					key={index}
					className='grid-item'
					onClick={() => moveShip(index % 5, Math.floor(index / 5))}
				>
					Planet {index + 1}
				</div>
			))}
			<div
				ref={shipRef}
				className='ship'
				style={{
					gridColumnStart: (position.x + 1).toString(),
					gridRowStart: (position.y + 1).toString(),
				}}
			/>
		</div>
	);
};

export default ShipMover;
