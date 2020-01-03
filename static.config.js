import path from 'path'
import React from 'react'
import { ImageminWebpackPlugin } from 'imagemin-webpack'
import imageminGifsicle from 'imagemin-gifsicle'
import imageminJpegtran from 'imagemin-jpegtran'
import imageminOptipng from 'imagemin-optipng'
import imageminSvgo from 'imagemin-svgo'

export default {
  maxThreads: process.env.NODE_ENV === 'production' ? 2 : 36, // Used 36 in CI - blows memory
  // siteRoot: 'https://turtlequeue.com', // why does this breaks the live version?
  productionSourceMaps: true, // TODO security (however I don't see why not at this early point)
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="TurtleQueue :: PubSub as a service" />
        <meta property="og:type" content="website" />
        <meta property="og:url"  content="https://turtlequeue.com" />
        <meta property="og:title"  content="TurtleQueue" />
        <title>TurtleQueue</title>
        <link rel="preconnect" href="https://script.hotjar.com"/>
        <link rel="preconnect" href="https://vars.hotjar.com"/>
        <link rel="preconnect" href="https://www.google-analytics.com"/>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getRoutes: async () => {
    return [
    ];
  },
  plugins: [
    require.resolve('react-static-plugin-sass'),
    require.resolve('react-static-plugin-styled-components'),
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap')
  ],
  webpack: config => {

    const plugins = [
      imageminGifsicle({
        interlaced: true,
        optimizationLevel: 3
      }),
      imageminJpegtran({
        progressive: true
      }),
      imageminOptipng({
        optimizationLevel: 5
      }),
      imageminSvgo({
        removeViewBox: true
      }),
      // https://stackoverflow.com/a/35672696/1327651
      // after adding 'react-syntax-highlighter'
      /* new webpack.ProvidePlugin({
       *   "React": "react",
       * }) */
    ];

    config.plugins.push(new ImageminWebpackPlugin({
      imageminOptions: {
        bail: true, //error on corrupted
        cache: false,
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: undefined,
        exclude: undefined,
        plugins
      }
    }))
    return config
  }
}
