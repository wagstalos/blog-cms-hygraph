import styles from "@/styles/Slug.module.css";
import { GraphQLClient, gql } from "graphql-request";
import { RxCalendar, RxPerson, RxHome, RxGithubLogo } from "react-icons/rx";
import parse from "html-react-parser";
import Footer from "@/components/Footer";
import Link from "next/link";

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clg3s1ng31koi01t3deilhg2d/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      tag
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
  const datePublished = post.datePublished
  const partes = datePublished.split('-');
  const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;
  return (
    <>
      <main className={styles.blog}>
        <img
          src={post.coverPhoto.url}
          className={styles.cover}
          alt={post.title}
        />

        <div className="container">
          <Link href={"/"} className={styles.backHome}>
            <RxHome color="#656AF5" size={24} />
            <span>Home</span>
          </Link>

          <h1>{post.title}</h1>
          <div className={styles.dateCenter}>
            <RxCalendar />
            <h6>
              Publicado em: {dataFormatada}
            </h6>
          </div>

          <div className={styles.author}>
            <div className={styles.authtext}>
              <img
                className={styles.avatar}
                src={post.author.avatar.url}
                alt="avatar do autor"
              />
              <div>
                <div className={styles.date}>
                  <RxPerson />
                  <h5>By {post.author.name}</h5>
                </div>

                <div className={styles.date}>
                  <RxGithubLogo />
                  <h6 className={styles.date}>/wagstalos</h6>
                </div>
              </div>
            </div>
          </div>

          <div
            className={styles.content}
            dangerousLySetInnerHTML={{ __html: post.content.html }}
          >
            {parse(post.content.html)}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
