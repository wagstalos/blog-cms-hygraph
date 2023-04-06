import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogPost from "@/components/BlogCard";
import Footer from "@/components/Footer"

import Hero from "@/components/Hero";

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clg3s1ng31koi01t3deilhg2d/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      description
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Wagner Silva | Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Hero />

        <h5 className={styles.subtitle} id="blog">BLOG</h5>
        <h2 className={styles.title}>Minhas publicações</h2>
        <div className={styles.dflex}>
          {posts.map((post) => (
            <BlogPost
              title={post.title}
              description={post.description}
              author={post.author}
              coverPhoto={post.coverPhoto}
              content={post.content}
              key={post.id}
              datePublished={post.datePublished}
              slug={post.slug}
            />
          ))}
        </div>
      </main>

      <footer>
            <Footer/>
      </footer>
    </>
  );
}
