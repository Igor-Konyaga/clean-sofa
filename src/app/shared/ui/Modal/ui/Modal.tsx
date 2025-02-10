'use client';
import { FC, JSX, ReactNode, useState } from 'react';
import styles from './Modal.module.scss';

type ModalProps = {
  renderContent: () => JSX.Element;
  openModal: boolean;
};

export const Modal: FC<ModalProps> = ({ renderContent, openModal }) => {
  return (
    <>
      {openModal && (
        <div className={styles.overlay}>
          <div className={styles.modal}>{renderContent()}</div>
        </div>
      )}
    </>
  );
};
