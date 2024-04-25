import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogPost from "@/components/BlogCard";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Maquee";
import ShareButton from "@/components/ShareButton";
import Title from "@/components/Title";

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clg3s1ng31koi01t3deilhg2d/master"
);

const QUERY = gql`
  {
    posts(orderBy: createdAt_DESC) {
      id
      title
      datePublished
      slug
      description
      tag
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
        <title>Wagner Silva | Blog Front-end</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>

        <meta name="title" content="Wagner Silva | Front-end" />
        <meta
          name="description"
          content="Seja bem-vindo ao mundo da programação front-end! Como desenvolvedor front-end, você terá a oportunidade de criar e dar vida a interfaces de usuário atraentes e intuitivas para sites e aplicativos."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wagner Silva | Front-end" />
        <meta
          property="og:description"
          content="Seja bem-vindo ao mundo da programação front-end! Como desenvolvedor front-end, você terá a oportunidade de criar e dar vida a interfaces de usuário atraentes e intuitivas para sites e aplicativos."
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/opE3i2LOQk8Z827cbif0"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Wagner Silva | Front-end" />
        <meta
          property="twitter:description"
          content="Seja bem-vindo ao mundo da programação front-end! Como desenvolvedor front-end, você terá a oportunidade de criar e dar vida a interfaces de usuário atraentes e intuitivas para sites e aplicativos."
        />
        <meta
          property="twitter:image"
          content="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/opE3i2LOQk8Z827cbif0"
        ></meta>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <div className={styles.container}>
          <Hero />
        </div>

        <Marquee />

        <section className="container">
          <Title title="QUEM SOU" subtitle="Apresentação" id="aboutMe" />
          <AboutMe />
        </section>

        <section className="container">
          <Title title="BLOG" subtitle="Minhas publicações" />
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
                tag={post.tag}
              />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <Footer />
        <ShareButton />
      </footer>
    </>
  );
}
