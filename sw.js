if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const f={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return a;case"module":return f;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-f1a54cb5"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"charts.php",revision:"2d65c537f47c2c48591bf3aacfd86ffa"},{url:"config.php",revision:"bffb98eb9007d20d0da273f9f6c2c6bf"},{url:"earnings.php",revision:"26ec0a02d4d43bbb6f4b531d042aa106"},{url:"fonts/css/all.css",revision:"a207426366c2b281571ec581ca8acc62"},{url:"fonts/css/brands.css",revision:"50ae18beebd796d9b9082b9209918456"},{url:"fonts/css/brands.min.css",revision:"38762c06ee069170da13ffb98351ef29"},{url:"fonts/css/fontawesome-all.min.css",revision:"10519cfd3206802f58315b877a9beab5"},{url:"fonts/css/fontawesome.css",revision:"73cad59eb2860b3c468d5c3449b68dc5"},{url:"fonts/css/fontawesome.min.css",revision:"990d1b83f594d7989624157b607e31ff"},{url:"fonts/css/regular.css",revision:"c1dabf43b35754bfcd8cb8e573d97451"},{url:"fonts/css/regular.min.css",revision:"0b52012237ecad2b82bbd8aea374b231"},{url:"fonts/css/solid.css",revision:"f3ec1cd710f7f243ba42b55ffea5e6b0"},{url:"fonts/css/solid.min.css",revision:"7b33067702cdc57fc1ce64bbcbaae492"},{url:"fonts/css/svg-with-js.css",revision:"23c782c1fb927e632f74e293fc655968"},{url:"fonts/css/svg-with-js.min.css",revision:"7b88c59c03106d736b4206c6ceafcf06"},{url:"fonts/css/v4-shims.css",revision:"fe0f09381a1440722b64ac99c67e6809"},{url:"fonts/css/v4-shims.min.css",revision:"25b2445e0c1838b110583405b3ec0177"},{url:"fonts/js/all.js",revision:"a4b28c53f67b8e03ec3df1b4621febba"},{url:"fonts/js/all.min.js",revision:"d0482db440697a659af4980d2e841891"},{url:"fonts/js/brands.js",revision:"1a11bd6f2ba52b1a64917befd17cad9c"},{url:"fonts/js/brands.min.js",revision:"db2c756dffd7a2ebd478d717d57f71f3"},{url:"fonts/js/fontawesome.js",revision:"50af86747d568bafc71abdf45fcc6431"},{url:"fonts/js/fontawesome.min.js",revision:"f2a6f85df075827ab70407f852cc4655"},{url:"fonts/js/regular.js",revision:"aa19256d0b1a3ff10ade60fac1ab2f0b"},{url:"fonts/js/regular.min.js",revision:"79cd9e30b4b211801e41beb79bc6a286"},{url:"fonts/js/solid.js",revision:"868fdcf9c37b821a0edf28a7de13958c"},{url:"fonts/js/solid.min.js",revision:"53b10f67bd9ae19de0f16e29c851c622"},{url:"fonts/js/v4-shims.js",revision:"f9e2e19cffd1a01e870624f8c111277b"},{url:"fonts/js/v4-shims.min.js",revision:"ee849cdefc4ea73142659f04402a1a99"},{url:"fonts/less/_animated.less",revision:"b045fe8800c8f96593cac5227dc70262"},{url:"fonts/less/_bordered-pulled.less",revision:"d7ea7f8a7cdd50096d33e87e1ffa72e7"},{url:"fonts/less/_core.less",revision:"afc2d21306033cb43d322aad01824bcf"},{url:"fonts/less/_fixed-width.less",revision:"66841bce86bf73e79d8f0bff3d9cf7e5"},{url:"fonts/less/_icons.less",revision:"6db86b5dea4c2104aadef50773c66d6d"},{url:"fonts/less/_larger.less",revision:"8fe52d3bf9e4dbb2000a108ca4e19a46"},{url:"fonts/less/_list.less",revision:"1d65d467e8bbae507fcd0a80945965b7"},{url:"fonts/less/_mixins.less",revision:"a7fa063476ba6db5346f7330ac3f0b41"},{url:"fonts/less/_rotated-flipped.less",revision:"96a02c0efee0dcc6e2b331ea69f5cc27"},{url:"fonts/less/_screen-reader.less",revision:"0f881617264587bef0df6ce92253ecea"},{url:"fonts/less/_shims.less",revision:"f41c94ab8df3aada7906c017e8b36897"},{url:"fonts/less/_stacked.less",revision:"deda57b8b5e6122615676d99e1115cb9"},{url:"fonts/less/_variables.less",revision:"e9860f19a422fd27bf9aa8e6d846aad6"},{url:"fonts/less/brands.less",revision:"f5b4608c17b0cb68e41118dc193ee009"},{url:"fonts/less/fontawesome.less",revision:"5828e2c9714fc9c94e82c093e86bffe6"},{url:"fonts/less/regular.less",revision:"4ba3a936b2eeefd1c69966106a99d5e6"},{url:"fonts/less/solid.less",revision:"898b4bf0b3135ed141e636309b1fed05"},{url:"fonts/less/v4-shims.less",revision:"ef38ebc43219264f8c39a796f9258cb6"},{url:"fonts/LICENSE.txt",revision:"a26077e534d7a5b2bbf9c0fa32aad750"},{url:"fonts/metadata/categories.yml",revision:"be0aa2d015199df417c3efbcb1267f6e"},{url:"fonts/metadata/icons.yml",revision:"261fc0aa5a5647399275390fccff85f1"},{url:"fonts/metadata/shims.json",revision:"1aa8ecceac4a17bfc6070129f937f012"},{url:"fonts/metadata/shims.yml",revision:"2dc4c50caefccbfac431e140dc0dc5f1"},{url:"fonts/metadata/sponsors.yml",revision:"4114f23a21ac27d38ed120a8da8fe800"},{url:"fonts/scss/_animated.scss",revision:"992453b341bee5e9d63562bdf68bf5da"},{url:"fonts/scss/_bordered-pulled.scss",revision:"7437104ba89f8110cf86ce53b8957f71"},{url:"fonts/scss/_core.scss",revision:"f7c8c00a50d69b4fe135dba09e511123"},{url:"fonts/scss/_fixed-width.scss",revision:"e52b0377dc3347ac4db3adf75485ad52"},{url:"fonts/scss/_icons.scss",revision:"f963093bcb9a155d63dc1b148f0133c7"},{url:"fonts/scss/_larger.scss",revision:"dd70b195f23b6aa62debdbaab018a75b"},{url:"fonts/scss/_list.scss",revision:"07930141d534140cea5527018bdc726c"},{url:"fonts/scss/_mixins.scss",revision:"df40bc4d64a720dcb611b911b740b1f9"},{url:"fonts/scss/_rotated-flipped.scss",revision:"a74bcad45d849b2682f1778dfa11713f"},{url:"fonts/scss/_screen-reader.scss",revision:"fa45b2d8ef7113ee7893ea60d7976e6c"},{url:"fonts/scss/_shims.scss",revision:"62a3387f3ecbd5679bff59972e585576"},{url:"fonts/scss/_stacked.scss",revision:"b4f1bb74796804022df72c8acd80797d"},{url:"fonts/scss/_variables.scss",revision:"5be96bba9634174e649595ee025ea51b"},{url:"fonts/scss/brands.scss",revision:"06f8d6f2c4ee7ce917e6669249ede5a2"},{url:"fonts/scss/fontawesome.scss",revision:"9da50fdc934b2fef783498c319774954"},{url:"fonts/scss/regular.scss",revision:"d74e9364837eb3937c1edecd83025828"},{url:"fonts/scss/solid.scss",revision:"e8f14d0b6a2b88879c79634736e02184"},{url:"fonts/scss/v4-shims.scss",revision:"4b280e29c69620ed451ed97d3eb9a728"},{url:"fonts/sprites/brands.svg",revision:"3b612dc016ba193746a9d3e8a5155869"},{url:"fonts/sprites/regular.svg",revision:"0d48c07a612c54c08ef93dff3e8f9abf"},{url:"fonts/sprites/solid.svg",revision:"a0afe2fd98a868ababeae52221998fb8"},{url:"fonts/webfonts/fa-brands-400.eot",revision:"9b6c8da3c489424e2b3e9c9fb6314b37"},{url:"fonts/webfonts/fa-brands-400.svg",revision:"b5472631dbace30d549357ec325b9c62"},{url:"fonts/webfonts/fa-brands-400.ttf",revision:"947b9537bc0fecc8130d48eb753495a1"},{url:"fonts/webfonts/fa-brands-400.woff",revision:"7b464e274bc331f9a765d765359635a5"},{url:"fonts/webfonts/fa-brands-400.woff2",revision:"48461ea4e797c9774dabb4a0440d2f56"},{url:"fonts/webfonts/fa-regular-400.eot",revision:"7422060ca379ee9939d3b687d072acad"},{url:"fonts/webfonts/fa-regular-400.svg",revision:"b5a61b229c9c92a6ac21f5b0e3c6e9f1"},{url:"fonts/webfonts/fa-regular-400.ttf",revision:"73fe7f1effbf382f499831a0a9f18626"},{url:"fonts/webfonts/fa-regular-400.woff",revision:"381af09a1366b6c2ae65eac5dd6f0588"},{url:"fonts/webfonts/fa-regular-400.woff2",revision:"949a2b066ec37f5a384712fc7beaf2f1"},{url:"fonts/webfonts/fa-solid-900.eot",revision:"70e65a7d34902f2c350816ecfe2f6492"},{url:"fonts/webfonts/fa-solid-900.svg",revision:"38508b2e7fac045869a86a15936433f7"},{url:"fonts/webfonts/fa-solid-900.ttf",revision:"0079a0ab6bec4da7d6e16f2a2e87cd71"},{url:"fonts/webfonts/fa-solid-900.woff",revision:"815694de1120d6c1e9d1f0895ee81056"},{url:"fonts/webfonts/fa-solid-900.woff2",revision:"14a08198ec7d1eb96d515362293fed36"},{url:"footer.php",revision:"f3313a9f5c08edf0f565b19065d22209"},{url:"header.php",revision:"f7451e7559c907c7d477ae503da1b21e"},{url:"images/empty.png",revision:"71a50dbba44c78128b221b7df7bb51f1"},{url:"images/icon.png",revision:"4bfaa17a847b985151879f2896f1e101"},{url:"images/preload-logo.png",revision:"4bfaa17a847b985151879f2896f1e101"},{url:"index.php",revision:"f5809bdff6ef01f1fe7634bec45be847"},{url:"index2.php",revision:"d249e22d61e2a7e60949ee99c0b9f686"},{url:"login.php",revision:"b5b2e0a8938be8a842184f8c76ab0d8b"},{url:"logout.php",revision:"0c4a4efe5b891423f049b89208bf05a8"},{url:"main.php",revision:"eee2a8b335244df7c648c5d9f4fa02e0"},{url:"notfcation.php",revision:"100d487bc1bedb268943a326a7dfee36"},{url:"orderDetails.php",revision:"0299bd135e406709ba87fbc1ee42f016"},{url:"orders.php",revision:"b5f831baac67d86650597fa456f096d1"},{url:"package-lock.json",revision:"1d341b4307866ea9e99720f4d621953d"},{url:"posponded.php",revision:"6df8606c616277d638f2b2c400375b02"},{url:"profile.php",revision:"666b7a140fc9eb0f23d1794951a3c012"},{url:"pwa/android-chrome-192x192.png",revision:"4bfaa17a847b985151879f2896f1e101"},{url:"pwa/android-chrome-512x512.png",revision:"7a058648fe4d5874f00bc3c7c9179628"},{url:"pwa/apple-touch-icon.png",revision:"bff9fcdb6ce1f114815406618f9f2773"},{url:"pwa/browserconfig.xml",revision:"61bfd064535af0c276bb63b3fd579733"},{url:"pwa/favicon_package_v0.161.zip",revision:"263534a973032d1c9c7e712e7b1dbfbd"},{url:"pwa/favicon-16x16.png",revision:"e41ba4136d7e638f7bc7ea1c6fed65c5"},{url:"pwa/favicon-32x32.png",revision:"ae6bc9d65d89b3b0b570a810c929238b"},{url:"pwa/favicon.ico",revision:"6a9e18bda2292f59a8c9abeaa05724b7"},{url:"pwa/mstile-150x150.png",revision:"84c3ebef701d2330cd6fd648aa95bfb8"},{url:"pwa/safari-pinned-tab.svg",revision:"b028fa0ef893ebaef4ee7bd401e3d307"},{url:"pwa/site.webmanifest",revision:"6cb7f8553d20cfda2804ee7ff50a2ea9"},{url:"README.md",revision:"cc4faf28a0c7accf7de3d9e5f6923881"},{url:"returned.php",revision:"643b273301f8fa40681ce986a0cb0a2c"},{url:"scripts/charts.js",revision:"97fc24605ac8278c6097b48ae533bf8a"},{url:"scripts/custom.js",revision:"a45034111f92a922a958e010550a44ab"},{url:"scripts/datapicker.js",revision:"37807363a13de55c2184eb0777ff8b13"},{url:"scripts/jquery.js",revision:"ac277941cf45342e691a27a966b2174e"},{url:"scripts/plugins.js",revision:"32adec78fdd712403b4dffe1b038aea1"},{url:"scripts/polyfill.js",revision:"3e07c94b20c469bfb10856ebe3abf9e4"},{url:"scripts/toast.js",revision:"fae7f854c415e506d7f8d298fa9228e3"},{url:"scripts/vcard.vcf",revision:"9c2c1e67d4b76ea1273c0c3d14141c02"},{url:"src/sw.js",revision:"0163c5401edfae9ca4919d718468c989"},{url:"styles/bootstrap.min.css",revision:"a15c2ac3234aa8f6064ef9c1f7383c37"},{url:"styles/datapicker.css",revision:"e69cf988c1f5545e1b1317154f356951"},{url:"styles/framework.css",revision:"ee2181dfd325a60b16afb88f59074471"},{url:"styles/style.css",revision:"ad2e04c7d2485b29e4e9db85c8a86170"},{url:"styles/toast.css",revision:"3891584b13dbe375aa5f59db02429719"},{url:"sw_reg.js",revision:"310f50ad6e8b853f01807bf58812e136"},{url:"sw2.js",revision:"910bfe613afaff2c8d2e29c1e112b078"},{url:"testQR.php",revision:"3ec3a52a072afab0cf5dc299f31da768"},{url:"validator/alexgarrett/violin/composer.json",revision:"3279b588920162352d7e0ef92008be82"},{url:"validator/alexgarrett/violin/examples/advanced/extending.php",revision:"b6ad8096421302ce3ac6ddf33377fe45"},{url:"validator/alexgarrett/violin/examples/basic_two_array.php",revision:"623afa18c5e563de95e31897b40a22a3"},{url:"validator/alexgarrett/violin/examples/basic.php",revision:"7b4c046b78e54b6a033984bf03ec9e64"},{url:"validator/alexgarrett/violin/examples/errors/errors_all.php",revision:"4ceb10f700b7deeda0a720dcf69aacdf"},{url:"validator/alexgarrett/violin/examples/errors/errors_field.php",revision:"12fc0336d37c9df1969c785a6aa3f76b"},{url:"validator/alexgarrett/violin/examples/errors/errors_first.php",revision:"57a7179b43f9b7d3db58ee3a2a21b77f"},{url:"validator/alexgarrett/violin/examples/messages/custom_field_message.php",revision:"edbb0cc35ead5e827e134afb62f5463d"},{url:"validator/alexgarrett/violin/examples/messages/custom_field_messages.php",revision:"9ff531158bbd1c84880b75e8ed4e2636"},{url:"validator/alexgarrett/violin/examples/messages/custom_rule_message.php",revision:"fb91bdea7f30c6110502f3dd62abdc03"},{url:"validator/alexgarrett/violin/examples/messages/custom_rule_messages.php",revision:"107322ad2d60efb32e6ce21fa7d03312"},{url:"validator/alexgarrett/violin/examples/messages/field_aliases.php",revision:"a86fec5e51e0c134822bfbf94c8d649c"},{url:"validator/alexgarrett/violin/examples/messages/placeholders/placeholders_all.php",revision:"1f3cacd2dd8b3221f6aff2c751b60d60"},{url:"validator/alexgarrett/violin/examples/messages/placeholders/placeholders.php",revision:"8c8d0f8d11fcb30cb4c3aa2fd3edcbbf"},{url:"validator/alexgarrett/violin/examples/rules/custom_rule_arguments.php",revision:"be20aa89e131d1903f2c23119a5ac53b"},{url:"validator/alexgarrett/violin/examples/rules/custom_rule.php",revision:"8f4002b72aa2b4f001f18266bfc4459f"},{url:"validator/alexgarrett/violin/phpunit.xml",revision:"938bf9f0c3eb40a6c143e2c27b0d560d"},{url:"validator/alexgarrett/violin/README.md",revision:"0982f25e044445e1b3a14b7fcc8ef4f4"},{url:"validator/alexgarrett/violin/src/Contracts/MessageBagContract.php",revision:"343331786f12a013afc2da50837ccb75"},{url:"validator/alexgarrett/violin/src/Contracts/RuleContract.php",revision:"1d118dda3adf7020f6c123233808aa9f"},{url:"validator/alexgarrett/violin/src/Contracts/ValidatorContract.php",revision:"d9d23b4868f0fd833d4a1c718ec168f5"},{url:"validator/alexgarrett/violin/src/Rules/AlnumDashRule.php",revision:"1441c032a6fb6156cd18ab45f2468e1d"},{url:"validator/alexgarrett/violin/src/Rules/AlnumRule.php",revision:"bd30515c30ce066f66db9facf0a57406"},{url:"validator/alexgarrett/violin/src/Rules/AlphaRule.php",revision:"26be9c8b4716938f839a6482e0971366"},{url:"validator/alexgarrett/violin/src/Rules/ArrayRule.php",revision:"d642aa446ae0975e2c8853e9b78bb16d"},{url:"validator/alexgarrett/violin/src/Rules/BetweenRule.php",revision:"3a8dec2601f8fecbd39c72dc6b41ef85"},{url:"validator/alexgarrett/violin/src/Rules/BoolRule.php",revision:"9d572ef4db1ce2b023ca114d2ca585b2"},{url:"validator/alexgarrett/violin/src/Rules/CheckedRule.php",revision:"8523ac5963fb6e6195ffc20ab125c8b9"},{url:"validator/alexgarrett/violin/src/Rules/DateRule.php",revision:"53866a735f56189cf4ddfabfb4d78e95"},{url:"validator/alexgarrett/violin/src/Rules/EmailRule.php",revision:"b8a1f2d1f04c294215f5ed337a128997"},{url:"validator/alexgarrett/violin/src/Rules/IntRule.php",revision:"511a05fd87217203e494e8b5498f1668"},{url:"validator/alexgarrett/violin/src/Rules/IpRule.php",revision:"70b6cd1eb508c94ac0bc61c68e0bdf87"},{url:"validator/alexgarrett/violin/src/Rules/MatchesRule.php",revision:"fe13147dac301603a25af0950a37db62"},{url:"validator/alexgarrett/violin/src/Rules/MaxRule.php",revision:"422cae1c4c6bb0ede082274222f8e568"},{url:"validator/alexgarrett/violin/src/Rules/MinRule.php",revision:"cfd7c0437ee89b9673d572cd084b1af8"},{url:"validator/alexgarrett/violin/src/Rules/NumberRule.php",revision:"70f47481a1095a9c7aa5860ccafb78cd"},{url:"validator/alexgarrett/violin/src/Rules/RegexRule.php",revision:"bd7d31ec0f054c831b2a2d25a552129a"},{url:"validator/alexgarrett/violin/src/Rules/RequiredRule.php",revision:"3777814bc5b151793befdec91b7545a2"},{url:"validator/alexgarrett/violin/src/Rules/UrlRule.php",revision:"27cdcadbb45280a2385335c78ed38375"},{url:"validator/alexgarrett/violin/src/Support/MessageBag.php",revision:"2897948d2d5789eed0192c62a553d15c"},{url:"validator/alexgarrett/violin/src/Violin.php",revision:"67afc79a93e50eaa7ac81b016e67ea9a"},{url:"validator/alexgarrett/violin/tests/MessageBagTest.php",revision:"5fd4aa3855a9d2ddbc04f27b20894408"},{url:"validator/alexgarrett/violin/tests/RulesTest.php",revision:"3285be55204913cab6c81279ec3b65f5"},{url:"validator/alexgarrett/violin/tests/ValidatorTest.php",revision:"5d26f80b0700c31be6d4dc7cf7dfb2ce"},{url:"validator/autoload.php",revision:"6f58e549516d30d286b692235cc9101d"},{url:"validator/composer/autoload_classmap.php",revision:"8645d3a4e3ad87e7cf4d88a46717aab4"},{url:"validator/composer/autoload_namespaces.php",revision:"35e12c7d76c4a81633bcf547c0e229a9"},{url:"validator/composer/autoload_psr4.php",revision:"616661ead59b28ac7c80abd493362972"},{url:"validator/composer/autoload_real.php",revision:"644fa12bfbb67db1aae6c9493db1471a"},{url:"validator/composer/autoload_static.php",revision:"ceebc23119749928fa409afb6226a274"},{url:"validator/composer/ClassLoader.php",revision:"7bcd58ef2df6fe97165bea70fe9c7712"},{url:"validator/composer/installed.json",revision:"52e4128a7498767c47b8adf5950cd4be"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.StaleWhileRevalidate({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.css/,new e.StaleWhileRevalidate({cacheName:"css",plugins:[new e.ExpirationPlugin({maxEntries:50,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.php/,new e.StaleWhileRevalidate({cacheName:"php",plugins:[new e.ExpirationPlugin({maxEntries:50,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.js/,new e.StaleWhileRevalidate({cacheName:"js",plugins:[new e.ExpirationPlugin({maxEntries:50,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=sw.js.map
