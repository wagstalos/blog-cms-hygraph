import Link from "next/link";
import styles from "@/styles/BlogCard.module.css";

export default function BlogPost({
  title,
  author,
  coverPhoto,
  datePublished,
  content,
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
            <div className={styles.author}>
                <img className={styles.authorImg} src={author.avatar.url} alt="" />
                <h3>{author.name}</h3>
            </div>
        </div>


      </Link>
    </div>
  );
}
