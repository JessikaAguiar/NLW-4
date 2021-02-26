import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/CountDown.module.css';

let countDownTimeout: NodeJS.Timeout;

export function CountDown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countDownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);


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