import styles from './modal.module.css';
import React from 'react';

interface ModalProps {
  isOpen: boolean;        // isOpen은 true/false여야 한다!
  onClose: () => void;    // onClose는 함수여야 한다!
  children: React.ReactNode; // children은 'React가 보여줄 수 있는 것'이어야 한다!
}
// 모달 컴포넌트를 쓸 때 이렇게 생긴 props 넣으라고 지정하는 것
//interface = 어떤 모양의 상자
//props = 그 상자 안에 들어가는 물건들

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;

    return(
        <div className={styles['modal_body']} onClick={onClose}>
            <div className={styles['modal']} onClick={e => e.stopPropagation()}>
                <button className={styles['modal_btn']} onClick={onClose}>X</button>
            </div>
        </div>
    )
}