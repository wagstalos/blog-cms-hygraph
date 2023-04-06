import Link from "next/link";
import styles from "@/styles/BlogCard.module.css";

export default function BlogPost({
  title,
  author,
  coverPhoto,
  datePublished,
  content,
  description,
  slug,
}) {
  return (
    <div className={styles.card}>
      <Link href={"/posts/" + slug}>
        <div className={styles.imgContainer}>
          <img className={styles.image} src={coverPhoto.url} alt={title} />
        </div>
        <div className={styles.text}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={styles.author}>
            <img className={styles.authorImg} src={author.avatar.url} alt="" />
            <div>
              <h4>{author.name}</h4>
              <h4>{datePublished}</h4>
            </div>
          </div>

          <div className={styles.date}></div>
        </div>
      </Link>
    </div>
  );
}
