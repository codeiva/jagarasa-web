'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8236c54f560ffae50b9e3f1240128e9b",
"assets/AssetManifest.bin.json": "d535838e4e68a39feb4cf715565dd42d",
"assets/AssetManifest.json": "72337beef835426dd857a8231f023278",
"assets/assets/audios/bg.mp3": "817692b9967a164d09e671cc4e80db0a",
"assets/assets/audios/congratulation.mp3": "82690b0bba8ea369243f39be478024f8",
"assets/assets/audios/correct.mp3": "46f7a472b621ccef5488c250b41e6f83",
"assets/assets/audios/intro.mp3": "604373c9fe8af4fa0ca994d7dd00e159",
"assets/assets/audios/learn_a_1.mp3": "e2bd3f508529316c218ec333fa362f59",
"assets/assets/audios/learn_a_2.mp3": "7495f74f56220f4880586153fb088362",
"assets/assets/audios/learn_a_3.mp3": "78b4348075abd06685df2bfb3e9b0f1c",
"assets/assets/audios/learn_a_4.mp3": "fe073f11bde05e0120dfbbe56d5a0569",
"assets/assets/audios/learn_a_5.mp3": "442503884a6f8d31bf6502cf60c67bd6",
"assets/assets/audios/learn_a_6.mp3": "84e2dfb36103131970b08327c7fafe3a",
"assets/assets/audios/learn_a_7.mp3": "7257a18615f3b18b9f9023bfb77371a1",
"assets/assets/audios/learn_b_1.mp3": "9020b0211013ebc9fbb871296d3590a9",
"assets/assets/audios/learn_b_2.mp3": "90004f8d319f9c1093a66564bd4df724",
"assets/assets/audios/learn_b_3.mp3": "6d3daedfdd3deef4bcfc19e1339a7ddd",
"assets/assets/audios/learn_b_4.mp3": "ff08d6458ff98966dcaed10697bc4ce9",
"assets/assets/audios/learn_b_5.mp3": "e9f2ee916f8e3c0f0ab419c7387df1b6",
"assets/assets/audios/learn_c_1.mp3": "5061897dadf9c4041533a7eaa0b92054",
"assets/assets/audios/learn_c_2.mp3": "6ccc2f531d5e99df5ea8317a45000b74",
"assets/assets/audios/learn_c_3.mp3": "97363ddf7cf76da8c8d2e7b89ce0b524",
"assets/assets/audios/learn_c_4.mp3": "35f3bf4e69f23abfec34ee2006da408d",
"assets/assets/audios/learn_c_5.mp3": "f10b9965b19d2c6ee1bb134ac8c5a65e",
"assets/assets/audios/learn_c_6.mp3": "b050489ac59f83e61d0dc85ceb5f91c4",
"assets/assets/audios/learn_c_7.mp3": "6b8e720b29e8bb6d7ec380b613e16559",
"assets/assets/audios/story_1.mp3": "d31929cebddf865b73f8196210a4e847",
"assets/assets/audios/story_10.mp3": "002e57bdd8993acb76955d59e9a67f27",
"assets/assets/audios/story_11.mp3": "6bdbee4fb6aa958115f3a9277cdd7f57",
"assets/assets/audios/story_2.mp3": "432e2b2f40c55bb8c0c937a4c3898135",
"assets/assets/audios/story_3.mp3": "a02cf0c211c181dfdd7045f4762b2d45",
"assets/assets/audios/story_4.mp3": "1d0d115b204847def9c29155a685e9b2",
"assets/assets/audios/story_5.mp3": "e788bb8cb4af3c07c198a476c1bd1716",
"assets/assets/audios/story_6.mp3": "a604b9369a29db94aae66bebfb66d665",
"assets/assets/audios/story_7.mp3": "dec7ff61f87e2f1fba21615d505acf62",
"assets/assets/audios/story_8.mp3": "4a6af3eb4764c8e5d5b94d5c922024ba",
"assets/assets/audios/story_9.mp3": "f647a82be75957994e7a75b933c4d4f8",
"assets/assets/audios/wrong_1.mp3": "cdf6969d50d8a5c327544dc5614be1f5",
"assets/assets/audios/wrong_2.mp3": "df287aa5d01cdc3a36a070f4b11cb287",
"assets/assets/docs/learn_a.pdf": "086620697b3cb9da1e378067c37af94f",
"assets/assets/docs/learn_b.pdf": "a2881fa4413257323fd6b6e8b91e7178",
"assets/assets/docs/learn_c.pdf": "8a13cf70c7db2429a248f0deb8232577",
"assets/assets/docs/story_1.pdf": "c4e9b4b614ad490ec4c2eee096a813c1",
"assets/assets/docs/story_10.pdf": "883c0f5b29090b7c86a0dc82531653a4",
"assets/assets/docs/story_11.pdf": "3739c4888827d4b3aa092add2d4bed7b",
"assets/assets/docs/story_2.pdf": "44356b50833fe9c9fd3ce5f14bab25cf",
"assets/assets/docs/story_3.pdf": "36857491530a1f3d311dd1aa52e4c4fd",
"assets/assets/docs/story_4.pdf": "0e813f126cee2ca16c058f1f600aab1a",
"assets/assets/docs/story_5.pdf": "bef6a2dd66f28c4871016b39791e2bb1",
"assets/assets/docs/story_6.pdf": "a1f7062d167eca278454856bc1c55ce8",
"assets/assets/docs/story_7.pdf": "44ae8faf0a6e3cc94ba260ac951df51e",
"assets/assets/docs/story_8.pdf": "39c9449bc74407ac7ddacc51b00d4551",
"assets/assets/docs/story_9.pdf": "c192ddea0643039b24a59555ee8c6fa1",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/book.png": "5000cf07e46c9ccad526dbfcf1942aad",
"assets/assets/images/female_back.svg": "cebe0f384ea57709de9630b68e0523df",
"assets/assets/images/female_front.svg": "e50cceefff43f35306107d4a33a3c3dc",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/hotline.png": "83f43e32bbae6b06a83df0b6e7801c75",
"assets/assets/images/ic_launcher.png": "71b5a2aa29a0a42bdd09abf8af36a161",
"assets/assets/images/male_back.svg": "c0db45798d2e9d3fb90e13793b116bd5",
"assets/assets/images/male_front.svg": "ba5c727f5d0b4847b357da10be67a05d",
"assets/assets/images/quiz.png": "691fcacc81126e57f21b45b7f19c037a",
"assets/assets/images/storytelling.png": "88145997492c66734022fd743bc8bf5a",
"assets/FontManifest.json": "ea9dc826036577df024fd0fe176dd298",
"assets/fonts/MaterialIcons-Regular.otf": "bae106489153248dec02aab69ac514a8",
"assets/NOTICES": "f1803cf787147fcd4939c4c95fea8298",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "d1c68af2f9bdbad6734957d93b177377",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1ba89e80f8bd260337772637cb976aff",
"icons/Icon-192.png": "d499a92cdb1a45b7ecdf6f6900eb08f3",
"icons/Icon-512.png": "1ed5e8bbfb2cfaf2797e74390f2a1737",
"icons/Icon-maskable-192.png": "d499a92cdb1a45b7ecdf6f6900eb08f3",
"icons/Icon-maskable-512.png": "1ed5e8bbfb2cfaf2797e74390f2a1737",
"index.html": "f1ee3b4320f3a7079141af39093430c0",
"/": "f1ee3b4320f3a7079141af39093430c0",
"main.dart.js": "d2ea5523480e506f3a26c2c310e2857e",
"manifest.json": "54c980aa3c835a6c8e1e4401b251dd77",
"version.json": "0b2e67bfe1902d7d7d7fb676333c6c27"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
