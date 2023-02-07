
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat GPT</title>
        <meta
          name="description"
          content="Chat GPT"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline text-red-200">
        Hello world!
      </h1>
    </>
  );
}
