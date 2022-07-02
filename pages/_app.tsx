import Head from 'next/head'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { CssBaseline, GeistProvider, useTheme, GeistUIThemes, Image } from 'components'
import ConfigContext from 'lib/config-provider'
import useDomClean from 'lib/use-dom-clean'
import { HybridCode, HybridLink, Search } from 'lib/components'
import Menu from 'lib/components/layout/menu'

const Application: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
  const theme = useTheme()
  const [themeType, setThemeType] = useState<string>()
  const [customTheme, setCustomTheme] = useState<GeistUIThemes>(theme)
  const themeChangeHandle = (theme: GeistUIThemes) => {
    setCustomTheme(theme)
    setThemeType(theme.type)
  }

  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (theme !== 'dark') return
    setThemeType('dark')
  }, [])
  useDomClean()

  return (
    <>
      <Head>
        <title>Alberto Cevallos</title>
        <meta name="google" content="notranslate" />
        <meta name="twitter:creator" content="@albertocevalls" />
        <meta name="referrer" content="strict-origin" />
        <meta property="og:title" content="Alberto Cevallos" />
        <meta property="og:site_name" content="Alberto Cevallos" />
        <meta property="og:url" content="https://albertocevallos.com" />
        <link rel="dns-prefetch" href="//albertocevallos.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="generator" content="Alberto Cevallos" />
        <meta name="description" content="Alberto Cevallos" />
        <meta property="og:description" content="Alberto Cevallos" />
        <meta
          itemProp="image"
          property="og:image"
          content="https://pbs.twimg.com/profile_images/1529951834315554816/TvQVejZ5_400x400.jpg"
        />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_images/1529951834315554816/TvQVejZ5_400x400.jpg"
        />
        <meta
          property="twitter:image"
          content="https://pbs.twimg.com/profile_images/1529951834315554816/TvQVejZ5_400x400.jpg"
        />
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <GeistProvider themeType={themeType} themes={[customTheme]}>
        <CssBaseline />
        <ConfigContext
          onThemeChange={themeChangeHandle}
          onThemeTypeChange={type => setThemeType(type)}>
          <Menu />
          <Search />
          <MDXProvider
            components={{
              a: HybridLink,
              img: Image,
              pre: HybridCode,
            }}>
            <Component {...pageProps} />
          </MDXProvider>
        </ConfigContext>
        <style global jsx>{`
          .tag {
            color: ${theme.palette.accents_5};
          }
          .punctuation {
            color: ${theme.palette.accents_5};
          }
          .attr-name {
            color: ${theme.palette.accents_6};
          }
          .attr-value {
            color: ${theme.palette.accents_4};
          }
          .language-javascript {
            color: ${theme.palette.accents_4};
          }
          span.class-name {
            color: ${theme.palette.warning};
          }
          span.maybe-class-name {
            color: ${theme.palette.purple};
          }
          span.token.string {
            color: ${theme.palette.accents_5};
          }
          span.token.comment {
            color: ${theme.palette.accents_3};
          }
          span.keyword {
            color: ${theme.palette.success};
          }
          span.plain-text {
            color: ${theme.palette.accents_3};
          }
          body::-webkit-scrollbar {
            width: var(--geist-page-scrollbar-width);
            background-color: ${theme.palette.accents_1};
          }
          body::-webkit-scrollbar-thumb {
            background-color: ${theme.palette.accents_2};
            border-radius: ${theme.layout.radius};
          }
          :root {
            --geist-page-nav-height: 64px;
            --geist-page-scrollbar-width: 4px;
          }
        `}</style>
      </GeistProvider>
    </>
  )
}

export default Application
