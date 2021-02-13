import Page from '../components/Page';

export default function MyAPP({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
