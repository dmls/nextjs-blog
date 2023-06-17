import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Self Introduction]</p>
        <p>
          Ipsum occaecat voluptate fugiat non tempor labore. Ut proident exercitation tempor proident excepteur esse dolore labore ullamco fugiat. Officia officia minim sint reprehenderit. Laborum magna dolor elit veniam quis laboris quis. 
        </p>
      </section>
    </Layout>
  );
}
