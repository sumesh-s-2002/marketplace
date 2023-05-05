import "styles/globals.css";

const Noop = ({children})=>{
  <>{children}</>
}
export default function App({ Component, pageProps }) {
  const  Layout = Component.layout ?? Noop
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
