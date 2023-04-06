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
          <h3>{title}</h3>
          <p className={styles.description}>{description}</p>

          <div className={styles.author}>
            <img className={styles.authorImg} src={author.avatar.url} alt="" />
            <div>
              <h5>{author.name}</h5>
              <h5>{datePublished}</h5>
            </div>
          </div>

          <div className={styles.date}></div>
          <button type='button'>VER MAIS</button>
          
        </div>
      </Link>
    </div>
  );
}
