import Image from "next/image";
import styles from "./page.module.css";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "3月の行事のお知らせ",
      category: { name: "行事" },
      publishedAt: "R7/2/24",
      createdAt: "R7/2/24",
    },
    {
      id: "2",
      title: "掲載紙のご紹介",
      category: { name: "広報" },
      publishedAt: "R6/10/1",
      createdAt: "R6/10/1",
    },
    {
      id: "3",
      title: "友引カレンダー（2025年/令和7年版）icsができました",
      category: { name: "Tips" },
      publishedAt: "R6/9/8",
      createdAt: "R6/9/8",
    },
  ],
};
export default function Home() {
  const sliceData = data.contents.slice(0, 2);
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
        <NewsList news={sliceData}></NewsList>
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
