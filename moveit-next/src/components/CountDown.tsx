import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CountDownContext } from '../contexts/CountDownContext';

import styles from '../styles/components/CountDown.module.css';


export function CountDown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountDownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    type="button"
                    className={styles.countDownButton}
                >
                    Ciclo encerrado
                    <FontAwesomeIcon icon="check-circle" className={`${styles.countDownButtonIconn} ${styles.iconColorGreen}`} />
                </button>
            ) : (
                    <>
                        {isActive ? (
                            <button
                                type="button"
                                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar ciclo
                                {/* <img src="icons/close.svg" alt="close" /> */}
                                <FontAwesomeIcon icon="times" className={styles.countDownButtonIconn} />
                            </button>
                        ) : (
                                <button
                                    type="button"
                                    className={styles.countDownButton}
                                    onClick={startCountdown}
                                >
                                    Iniciar um ciclo
                                    <FontAwesomeIcon icon="play" className={styles.countDownButtonIconn} />
                                </button>
                            )}
                    </>
                )}


        </div>
    );
}