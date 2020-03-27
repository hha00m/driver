module.exports = {
  "globDirectory": "driver/",
  "globPatterns": [
    "**/*.{php,css,js,less,txt,yml,json,scss,svg,eot,ttf,woff,woff2,png,gif,ico,db,jpg,xml,zip,webmanifest,md,vcf,TXT,crt,fdf,p12,pdf,ai,BAK,z,icc}"
  ],
  "swDest": "driver/sw.js",

   // Define runtime caching rules.
   runtimeCaching: [{
    // Match any request that ends with .png, .jpg, .jpeg or .svg.
    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

    // Apply a cache-first strategy.
    handler: 'CacheFirst',

    options: {
      // Use a custom cache name.
      cacheName: 'images',

      // Only cache 10 images.
      expiration: {
        maxEntries: 50,
      },
    },
  },
  {  

    urlPattern: /\.css/,
    handler: 'CacheFirst',

    options: {
      cacheName: 'css',

      expiration: {
        maxEntries: 50,
      },
    },
  }, 
  { urlPattern: /\.php/,
    handler: 'CacheFirst',
  
    options: {
      cacheName: 'php',
  
      expiration: {
        maxEntries: 50,
      },
    },
  },{ urlPattern: /\.js/,
    handler: 'CacheFirst',
  
    options: {
      cacheName: 'js',
  
      expiration: {
        maxEntries: 50,
      },
    },
  }


],
};