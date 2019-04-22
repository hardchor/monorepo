import Head from 'next/head';
import PostList from '../components/PostList';

function Home() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello world!</p>
      <PostList />
    </div>
  );
}

export default Home;
