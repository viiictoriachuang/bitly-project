import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MemeListItem from '../components/MemeListItem';

interface Props {
  data: {
    data: {
      memes: Meme[];
    };
  };
}

export const headingText = 'See the top memes of this month';

export default function Home({ data }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Top memes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {headingText}
        </h1>

        <div>
          <ul className={styles.listContainer}>
            {data.data && data.data.memes && (data.data.memes).map((meme: Meme): JSX.Element => <MemeListItem key={meme.id} meme={meme} />)}
          </ul></div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://api.imgflip.com/get_memes');
  const data = await res.json();
  return {
    props: {
      data,
    },
  }
}
