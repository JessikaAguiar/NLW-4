import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChanllengeBox.module.css';

export function ChanllengeBox() {
    const { activeChallenge, resetChallenge, completeChanllenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountDownContext);

    function handleChallengeSucceeded() {
        completeChanllenge();
        resetCountdown();
    }

    function handleChallengeFailded() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.chanllengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.chanllengeBoxActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.chanllengeBoxFailedButton}
                            onClick={handleChallengeFailded}>
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.chanllengeBoxSuccededButton}
                            onClick={handleChallengeSucceeded}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.chanllengeBoxNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de level completando desafios.
                        </p>
                    </div>
                )}

        </div>
    );
}