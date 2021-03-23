import Head from "next/head";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world
            <p>
              Get access to all the publication <br />
              <span>for $9.90 month</span>
            </p>
          </h1>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
