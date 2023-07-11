import Link from "next/link";
import styles from "@/styles/BlogCard.module.css";
import { RxArrowTopRight, RxCalendar } from "react-icons/rx";

export default function BlogPost({
  title,
  author,
  coverPhoto,
  datePublished,
  content,
  tag,
  description,
  slug,
}) {
  const data = datePublished;
  const partes = data.split("-");
  const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;

  return (
    <div className={styles.card}>
      <Link href={"/posts/" + slug}>
        <div className={styles.imgContainer}>
          <img className={styles.image} src={coverPhoto.url} alt={title} />
          <p className={`tag ${tag}`}>{tag}</p>
        </div>
        <div className={styles.text}>
          <h3 className="gradient">{title}</h3>

          <p className={styles.description}>{description}</p>
          <div className={styles.author}>
            <div className={styles.authorFlex}>
              <div className={styles.authorFlex}>
                <img
                  className={styles.authorImg}
                  src={author.avatar.url}
                  alt="avatar autor"
                />
                <p>{author.name}</p>
              </div>

              <div className={styles.authorCalendar}>
                <RxCalendar size={18} />
                <h5>{dataFormatada}</h5>
              </div>
            </div>
          </div>

          <div className={styles.date}></div>
          <button type="button" className="button-49" role="button">
            <span>VER MAIS</span>
            <RxArrowTopRight size={18} />
          </button>
        </div>
      </Link>
    </div>
  );
}
