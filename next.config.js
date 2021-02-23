const withOptimizedImages = require('next-optimized-images')
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' })


const nextConfig = {
  i18n: {
    locales: ['en-US', 'ru', 'fr'],
    defaultLocale: 'ru',
    //localeDetection: false,
  },
  assetPrefix: process.env.ASSET_PREFIX || '',
  basePath: process.env.BASE_PATH || '',
  trailingSlash: true,
  compress: false,
  poweredByHeader: false,
  generateBuildId: () => {
    return process.env.BUILD_ID || null
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    //config.plugins.push(new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/))

    // Important: return the modified config
    return config
  },
}

module.exports = withPlugins([
  [
    withOptimizedImages, {
      inlineImageLimit: 4096,
      imagesOutputPath: 'static/chunks/images/',
      imagesPublicPath: (process.env.ASSET_PREFIX || '') + '/_next/static/chunks/images/',
      imagesName: '[name]-[hash].[ext]',
      handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp'],
      removeOriginalExtension: false,
      optimizeImages: true,
      optimizeImagesInDev: true,
    },
  ],
  [withBundleAnalyzer],
], nextConfig)
