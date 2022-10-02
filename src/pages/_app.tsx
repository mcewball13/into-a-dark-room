
import { NextPage } from 'next'
import '../styles/globals.css'

type NextPageWithLayout = NextPage

interface MyAppProps {
  Component: NextPageWithLayout;
  pageProps: any;
}

function MyApp(props: MyAppProps) {
 const { Component, pageProps } = props


  return <Component {...pageProps} />
}

export default MyApp
