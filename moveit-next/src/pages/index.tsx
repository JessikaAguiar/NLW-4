import Head from 'next/head';

import { CompletedChanllenges } from "../components/CompletedChanllenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChanllengeBox } from "../components/ChanllengeBox";


import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Moveit</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChanllenges />
          <CountDown />
        </div>
        <div>
          <ChanllengeBox />
        </div>
      </section>
    </div>
  );
}