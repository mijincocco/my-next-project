import Image from "next/image";
import styles from "./page.module.css";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  //JavaScriptのマイ定数
  const est_year = 17;
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>林海庵のウェブサイトへようこそ</h1>
          <p className={styles.description}>
            林海庵（りんかいあん）は東京都多摩市にある平成{est_year}
            年設立の浄土宗の小さなお寺です
            <br></br>
            心安らぐ家庭的な空間です　　仏事相談・心の悩み相談などお気軽に...
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv_r.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents}></NewsList>
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
