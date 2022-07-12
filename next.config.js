const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    rehypePlugins: [require('@mapbox/rehype-prism'), require('rehype-join-line')],
  },
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  generateEtags: false,

  poweredByHeader: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  pageExtensions: ['jsx', 'js', 'mdx', 'md', 'ts', 'tsx'],

  cssModules: true,

  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },

  env: {
    VERSION: require('./package.json').version,
  },

  trailingSlash: false,

  async redirects() {
    return []
  },
}

module.exports = withBundleAnalyzer(withMDX(nextConfig))
