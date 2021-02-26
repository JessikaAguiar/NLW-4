import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChanllengeBox.module.css';

export function ChanllengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

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
                            onClick={resetChallenge}>
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.chanllengeBoxSuccededButton}>
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