/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  // Cache js files.
  /\.js/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'js-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);
workbox.routing.registerRoute(
  // Cache js files.
  /\.woff2/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'woff2-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);
workbox.routing.registerRoute(
  // Cache js files.
  /\.php/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'php-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

workbox.routing.registerRoute(
  // Cache CSS files.
  /\.css/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
        plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);
workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  // Use the cache if it's available.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "charts.php",
    "revision": "1c65593dce6e34672b8e864c0ce761f0"
  },
  {
    "url": "config.php",
    "revision": "99381d9d6a50068c6ba488f0b2137294"
  },
  {
    "url": "earnings.php",
    "revision": "e23e890fc397f79c0ff717e459e62e55"
  },
  {
    "url": "fonts/css/all.css",
    "revision": "a207426366c2b281571ec581ca8acc62"
  },
  {
    "url": "fonts/css/brands.css",
    "revision": "50ae18beebd796d9b9082b9209918456"
  },
  {
    "url": "fonts/css/brands.min.css",
    "revision": "38762c06ee069170da13ffb98351ef29"
  },
  {
    "url": "fonts/css/fontawesome-all.min.css",
    "revision": "10519cfd3206802f58315b877a9beab5"
  },
  {
    "url": "fonts/css/fontawesome.css",
    "revision": "73cad59eb2860b3c468d5c3449b68dc5"
  },
  {
    "url": "fonts/css/fontawesome.min.css",
    "revision": "990d1b83f594d7989624157b607e31ff"
  },
  {
    "url": "fonts/css/regular.css",
    "revision": "c1dabf43b35754bfcd8cb8e573d97451"
  },
  {
    "url": "fonts/css/regular.min.css",
    "revision": "0b52012237ecad2b82bbd8aea374b231"
  },
  {
    "url": "fonts/css/solid.css",
    "revision": "f3ec1cd710f7f243ba42b55ffea5e6b0"
  },
  {
    "url": "fonts/css/solid.min.css",
    "revision": "7b33067702cdc57fc1ce64bbcbaae492"
  },
  {
    "url": "fonts/css/svg-with-js.css",
    "revision": "23c782c1fb927e632f74e293fc655968"
  },
  {
    "url": "fonts/css/svg-with-js.min.css",
    "revision": "7b88c59c03106d736b4206c6ceafcf06"
  },
  {
    "url": "fonts/css/v4-shims.css",
    "revision": "fe0f09381a1440722b64ac99c67e6809"
  },
  {
    "url": "fonts/css/v4-shims.min.css",
    "revision": "25b2445e0c1838b110583405b3ec0177"
  },
  {
    "url": "fonts/js/all.js",
    "revision": "a4b28c53f67b8e03ec3df1b4621febba"
  },
  {
    "url": "fonts/js/all.min.js",
    "revision": "d0482db440697a659af4980d2e841891"
  },
  {
    "url": "fonts/js/brands.js",
    "revision": "1a11bd6f2ba52b1a64917befd17cad9c"
  },
  {
    "url": "fonts/js/brands.min.js",
    "revision": "db2c756dffd7a2ebd478d717d57f71f3"
  },
  {
    "url": "fonts/js/fontawesome.js",
    "revision": "50af86747d568bafc71abdf45fcc6431"
  },
  {
    "url": "fonts/js/fontawesome.min.js",
    "revision": "f2a6f85df075827ab70407f852cc4655"
  },
  {
    "url": "fonts/js/regular.js",
    "revision": "aa19256d0b1a3ff10ade60fac1ab2f0b"
  },
  {
    "url": "fonts/js/regular.min.js",
    "revision": "79cd9e30b4b211801e41beb79bc6a286"
  },
  {
    "url": "fonts/js/solid.js",
    "revision": "868fdcf9c37b821a0edf28a7de13958c"
  },
  {
    "url": "fonts/js/solid.min.js",
    "revision": "53b10f67bd9ae19de0f16e29c851c622"
  },
  {
    "url": "fonts/js/v4-shims.js",
    "revision": "f9e2e19cffd1a01e870624f8c111277b"
  },
  {
    "url": "fonts/js/v4-shims.min.js",
    "revision": "ee849cdefc4ea73142659f04402a1a99"
  },
  {
    "url": "fonts/less/_animated.less",
    "revision": "b045fe8800c8f96593cac5227dc70262"
  },
  {
    "url": "fonts/less/_bordered-pulled.less",
    "revision": "d7ea7f8a7cdd50096d33e87e1ffa72e7"
  },
  {
    "url": "fonts/less/_core.less",
    "revision": "afc2d21306033cb43d322aad01824bcf"
  },
  {
    "url": "fonts/less/_fixed-width.less",
    "revision": "66841bce86bf73e79d8f0bff3d9cf7e5"
  },
  {
    "url": "fonts/less/_icons.less",
    "revision": "6db86b5dea4c2104aadef50773c66d6d"
  },
  {
    "url": "fonts/less/_larger.less",
    "revision": "8fe52d3bf9e4dbb2000a108ca4e19a46"
  },
  {
    "url": "fonts/less/_list.less",
    "revision": "1d65d467e8bbae507fcd0a80945965b7"
  },
  {
    "url": "fonts/less/_mixins.less",
    "revision": "a7fa063476ba6db5346f7330ac3f0b41"
  },
  {
    "url": "fonts/less/_rotated-flipped.less",
    "revision": "96a02c0efee0dcc6e2b331ea69f5cc27"
  },
  {
    "url": "fonts/less/_screen-reader.less",
    "revision": "0f881617264587bef0df6ce92253ecea"
  },
  {
    "url": "fonts/less/_shims.less",
    "revision": "f41c94ab8df3aada7906c017e8b36897"
  },
  {
    "url": "fonts/less/_stacked.less",
    "revision": "deda57b8b5e6122615676d99e1115cb9"
  },
  {
    "url": "fonts/less/_variables.less",
    "revision": "e9860f19a422fd27bf9aa8e6d846aad6"
  },
  {
    "url": "fonts/less/brands.less",
    "revision": "f5b4608c17b0cb68e41118dc193ee009"
  },
  {
    "url": "fonts/less/fontawesome.less",
    "revision": "5828e2c9714fc9c94e82c093e86bffe6"
  },
  {
    "url": "fonts/less/regular.less",
    "revision": "4ba3a936b2eeefd1c69966106a99d5e6"
  },
  {
    "url": "fonts/less/solid.less",
    "revision": "898b4bf0b3135ed141e636309b1fed05"
  },
  {
    "url": "fonts/less/v4-shims.less",
    "revision": "ef38ebc43219264f8c39a796f9258cb6"
  },
  {
    "url": "fonts/LICENSE.txt",
    "revision": "a26077e534d7a5b2bbf9c0fa32aad750"
  },
  {
    "url": "fonts/metadata/categories.yml",
    "revision": "be0aa2d015199df417c3efbcb1267f6e"
  },
  {
    "url": "fonts/metadata/icons.yml",
    "revision": "261fc0aa5a5647399275390fccff85f1"
  },
  {
    "url": "fonts/metadata/shims.json",
    "revision": "1aa8ecceac4a17bfc6070129f937f012"
  },
  {
    "url": "fonts/metadata/shims.yml",
    "revision": "2dc4c50caefccbfac431e140dc0dc5f1"
  },
  {
    "url": "fonts/metadata/sponsors.yml",
    "revision": "4114f23a21ac27d38ed120a8da8fe800"
  },
  {
    "url": "fonts/scss/_animated.scss",
    "revision": "992453b341bee5e9d63562bdf68bf5da"
  },
  {
    "url": "fonts/scss/_bordered-pulled.scss",
    "revision": "7437104ba89f8110cf86ce53b8957f71"
  },
  {
    "url": "fonts/scss/_core.scss",
    "revision": "f7c8c00a50d69b4fe135dba09e511123"
  },
  {
    "url": "fonts/scss/_fixed-width.scss",
    "revision": "e52b0377dc3347ac4db3adf75485ad52"
  },
  {
    "url": "fonts/scss/_icons.scss",
    "revision": "f963093bcb9a155d63dc1b148f0133c7"
  },
  {
    "url": "fonts/scss/_larger.scss",
    "revision": "dd70b195f23b6aa62debdbaab018a75b"
  },
  {
    "url": "fonts/scss/_list.scss",
    "revision": "07930141d534140cea5527018bdc726c"
  },
  {
    "url": "fonts/scss/_mixins.scss",
    "revision": "df40bc4d64a720dcb611b911b740b1f9"
  },
  {
    "url": "fonts/scss/_rotated-flipped.scss",
    "revision": "a74bcad45d849b2682f1778dfa11713f"
  },
  {
    "url": "fonts/scss/_screen-reader.scss",
    "revision": "fa45b2d8ef7113ee7893ea60d7976e6c"
  },
  {
    "url": "fonts/scss/_shims.scss",
    "revision": "62a3387f3ecbd5679bff59972e585576"
  },
  {
    "url": "fonts/scss/_stacked.scss",
    "revision": "b4f1bb74796804022df72c8acd80797d"
  },
  {
    "url": "fonts/scss/_variables.scss",
    "revision": "5be96bba9634174e649595ee025ea51b"
  },
  {
    "url": "fonts/scss/brands.scss",
    "revision": "06f8d6f2c4ee7ce917e6669249ede5a2"
  },
  {
    "url": "fonts/scss/fontawesome.scss",
    "revision": "9da50fdc934b2fef783498c319774954"
  },
  {
    "url": "fonts/scss/regular.scss",
    "revision": "d74e9364837eb3937c1edecd83025828"
  },
  {
    "url": "fonts/scss/solid.scss",
    "revision": "e8f14d0b6a2b88879c79634736e02184"
  },
  {
    "url": "fonts/scss/v4-shims.scss",
    "revision": "4b280e29c69620ed451ed97d3eb9a728"
  },
  {
    "url": "fonts/sprites/brands.svg",
    "revision": "3b612dc016ba193746a9d3e8a5155869"
  },
  {
    "url": "fonts/sprites/regular.svg",
    "revision": "0d48c07a612c54c08ef93dff3e8f9abf"
  },
  {
    "url": "fonts/sprites/solid.svg",
    "revision": "a0afe2fd98a868ababeae52221998fb8"
  },
  {
    "url": "fonts/webfonts/fa-brands-400.eot",
    "revision": "9b6c8da3c489424e2b3e9c9fb6314b37"
  },
  {
    "url": "fonts/webfonts/fa-brands-400.svg",
    "revision": "b5472631dbace30d549357ec325b9c62"
  },
  {
    "url": "fonts/webfonts/fa-brands-400.ttf",
    "revision": "947b9537bc0fecc8130d48eb753495a1"
  },
  {
    "url": "fonts/webfonts/fa-brands-400.woff",
    "revision": "7b464e274bc331f9a765d765359635a5"
  },
  {
    "url": "fonts/webfonts/fa-brands-400.woff2",
    "revision": "48461ea4e797c9774dabb4a0440d2f56"
  },
  {
    "url": "fonts/webfonts/fa-regular-400.eot",
    "revision": "7422060ca379ee9939d3b687d072acad"
  },
  {
    "url": "fonts/webfonts/fa-regular-400.svg",
    "revision": "b5a61b229c9c92a6ac21f5b0e3c6e9f1"
  },
  {
    "url": "fonts/webfonts/fa-regular-400.ttf",
    "revision": "73fe7f1effbf382f499831a0a9f18626"
  },
  {
    "url": "fonts/webfonts/fa-regular-400.woff",
    "revision": "381af09a1366b6c2ae65eac5dd6f0588"
  },
  {
    "url": "fonts/webfonts/fa-regular-400.woff2",
    "revision": "949a2b066ec37f5a384712fc7beaf2f1"
  },
  {
    "url": "fonts/webfonts/fa-solid-900.eot",
    "revision": "70e65a7d34902f2c350816ecfe2f6492"
  },
  {
    "url": "fonts/webfonts/fa-solid-900.svg",
    "revision": "38508b2e7fac045869a86a15936433f7"
  },
  {
    "url": "fonts/webfonts/fa-solid-900.ttf",
    "revision": "0079a0ab6bec4da7d6e16f2a2e87cd71"
  },
  {
    "url": "fonts/webfonts/fa-solid-900.woff",
    "revision": "815694de1120d6c1e9d1f0895ee81056"
  },
  {
    "url": "fonts/webfonts/fa-solid-900.woff2",
    "revision": "14a08198ec7d1eb96d515362293fed36"
  },
  {
    "url": "footer.php",
    "revision": "e4ae50548bc988a45f374bc69c5ab3f1"
  },
  {
    "url": "header.php",
    "revision": "3dbbc8b662e7aa9aef8a6e5c80deb60a"
  },
  {
    "url": "index.php",
    "revision": "612bef9e508383a2330ed5eaa97ef885"
  },
  {
    "url": "login.php",
    "revision": "10976aa85113990ffc5b4d53d00452a1"
  },
//  {
//    "url": "logout.php",
//    "revision": "a6562a1c9a37cf5ba28073fcc20c69ab"
//  },
  {
    "url": "main.php",
    "revision": "14d9b370774a2ee97bdecae28177e426"
  },
  {
    "url": "notfcation.php",
    "revision": "ea9622e73f111ca1c0ea136c144c2d85"
  },
  // {
  //   "url": "orderDetails.php",
  //   "revision": "4d5d0a1ae295e0d8c2def2f552a7678c"
  // },
  {
    "url": "orders.php",
    "revision": "8d819fa7e9b30b45d43f799cee92bf66"
  },
  {
    "url": "package-lock.json",
    "revision": "6ae5c0005ad3ed9cdf9e3803c59f5b68"
  },
  {
    "url": "php/_access.php",
    "revision": "642a2c7b7d8d668cb6e6b2c3fbac84ca"
  },
//  {
//    "url": "php/_charts.php",
//    "revision": "2206bf3824185b9cccc4b3cd7887af24"
//  },
  {
    "url": "php/_crpt.php",
    "revision": "f510024dacaf0a557315d5991fdc1d2f"
  },
//  {
//    "url": "php/_earnings.php",
//    "revision": "bb542bddfebb6ef812d892e1aa0d2da8"
//  },
//  {
//    "url": "php/_getOrder.php",
//    "revision": "0a0162249822ee02a04d48c69d27c637"
//  },
//  {
//    "url": "php/_getOrders.php",
//    "revision": "1a77f5b7a263eb85aa249b09b0504823"
//  },
//  {
//    "url": "php/_getOrderTrack.php",
//    "revision": "01d04b330128e1b1500ef654f12da7ce"
//  },
//  {
//    "url": "php/_getPospondedOrders.php",
//    "revision": "30cbd9517f2dd2de691dc8fbba3666ab"
//  },
//  {
//    "url": "php/_getProfile.php",
//    "revision": "863951c0c5247a5a4ee9c3cc63602d52"
//  },
//  {
//    "url": "php/_getReturnedOrders.php",
//    "revision": "c61010c7ba177b5b5bc943a53246331b"
//  },
//  {
//    "url": "php/_login.php",
//    "revision": "01a35c71bdaad7214775c800f83d7619"
//  },
//  {
//    "url": "php/_logout.php",
//    "revision": "84f6df22f5b466efa21c45e87075296f"
//  },
//  {
//    "url": "php/_orderChange.php",
//    "revision": "270a078c116af79c5dcd784976125e28"
//  },
//  {
//    "url": "php/_orderPosponded.php",
//    "revision": "88707993e5c7f09811b22baa2000b3b4"
//  },
//  {
//    "url": "php/_orderRecived.php",
//    "revision": "c2499703ae96a19d9fe642983304bd4e"
//  },
//  {
//    "url": "php/_orderRepalce.php",
//    "revision": "8c7c0526a75b6ff85d6b5364ef1777f0"
//  },
//  {
//    "url": "php/_orderReturned.php",
//    "revision": "e7058924739de728365f6bff384e59cd"
//  },
//  {
//    "url": "php/_updateProfile.php",
//    "revision": "d0c07513b98c77d221f6954fa2c44838"
//  },
  {
    "url": "php/contact.php",
    "revision": "a27142543526be39fec40bcdc5f169fa"
  },
  {
    "url": "php/dbconnection.php",
    "revision": "1744d69636dd45ec92a143089f5ee17c"
  },
  {
    "url": "posponded.php",
    "revision": "0d49c3174093077c80d172e80456521d"
  },
  {
    "url": "profile.php",
    "revision": "cb5f67367dfd278820997c430bdc642c"
  },
  {
    "url": "pwa/android-chrome-192x192.png",
    "revision": "ee857abf4d5ec20d77205067e9f4ca55"
  },
  {
    "url": "pwa/android-chrome-512x512.png",
    "revision": "06e39a925bf161fcd3bc2b3bebedf3e9"
  },
  {
    "url": "pwa/apple-touch-icon.png",
    "revision": "23926b32ec37e236dfe2faa4550e9f6e"
  },
  {
    "url": "pwa/browserconfig.xml",
    "revision": "61bfd064535af0c276bb63b3fd579733"
  },
  {
    "url": "pwa/favicon_package_v0.161.zip",
    "revision": "3b19636175ddf67669efe28521d2b8b3"
  },
  {
    "url": "pwa/favicon-16x16.png",
    "revision": "d47748f20a4a9a734bc9c14632cf4204"
  },
  {
    "url": "pwa/favicon-32x32.png",
    "revision": "ad45de3a158bf075efba1a75680c46c4"
  },
  {
    "url": "pwa/favicon.ico",
    "revision": "aa1b33c2f6a66cb486cd9ed227bf2d25"
  },
  {
    "url": "pwa/mstile-150x150.png",
    "revision": "edf1071e05533217da4887e5eba3e54e"
  },
  {
    "url": "pwa/safari-pinned-tab.svg",
    "revision": "e166c68b72ba8e9555e48dfab8061709"
  },
  {
    "url": "pwa/site.webmanifest",
    "revision": "0f30bc0572bad1506b5efd773b9491a9"
  },
  {
    "url": "returned.php",
    "revision": "80851c594bd8f1cbadbc8f8158ffc588"
  },
  {
    "url": "scripts/charts.js",
    "revision": "217cb5d4ea048de6bd91dbce1b3bc12e"
  },
  {
    "url": "scripts/custom.js",
    "revision": "5d60bce11d63a3fafad7d3a649b43b80"
  },
  {
    "url": "scripts/datapicker.js",
    "revision": "f5514b1ce3d12a9d2d3407f159ac9fcd"
  },
  {
    "url": "scripts/jquery.js",
    "revision": "a09e13ee94d51c524b7e2a728c7d4039"
  },
  {
    "url": "scripts/plugins.js",
    "revision": "afe29d50afa6a2a774de3181a9be58b8"
  },
  {
    "url": "scripts/polyfill.js",
    "revision": "5a2415672e22d366bda5aa34666acfdb"
  },
  {
    "url": "scripts/toast.js",
    "revision": "a1ce2af27ac95d616e573dc28a349185"
  },
  {
    "url": "scripts/vcard.vcf",
    "revision": "e1359316710b71d9ca6c8dbe769eb4da"
  },
  {
    "url": "styles/bootstrap.min.css",
    "revision": "8fe70898895271ddc62823321011273a"
  },
  {
    "url": "styles/datapicker.css",
    "revision": "34ce931548d96bf76eba4d398d406e19"
  },
  {
    "url": "styles/framework.css",
    "revision": "c434e575b197c45bbd58159f1089eecd"
  },
  {
    "url": "styles/style.css",
    "revision": "3fdffde65bc3d0e1b2d0239bf06aeee7"
  },
  {
    "url": "styles/toast.css",
    "revision": "5359db66b6839775e9a76577403a25e5"
  },
  {
    "url": "sw_reg.js",
    "revision": "c29810396690363ec48da5e1b26faf77"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
