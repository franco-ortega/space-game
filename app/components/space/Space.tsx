import React, { ReactNode } from 'react';
import styles from './Space.module.css';

type Props = { children: ReactNode };

export default function Space({ children }: Props) {
  return (
    <div className={styles.Space}>
      Space
      {children}
    </div>
  );
}
