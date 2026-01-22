'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "c712396023e11eedde25fdb59d42556a",
"flutter_bootstrap.js": "5d10a58a47668266be79e8a090b5b23c",
".git/COMMIT_EDITMSG": "5d1cd660c76c04d0c99221b5aab07d9b",
".git/index": "3260eda8e122910a100abd5d6d143e11",
".git/logs/HEAD": "d81fb01a56dd3f9986a528e1dd99d441",
".git/logs/refs/heads/main": "ecba736bd2429bad7f44ff08d0c81cdf",
".git/logs/refs/remotes/origin/master": "bc05b06a073a55449cc4de3c8131a2cb",
".git/objects/1b/b8e291550c01c4aa52ddf435fa3e69c7444889": "e058812254837e2430b3f87e4ad1f38c",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/52/8848d4af8bdff2e844ec888fab3f2b1a6cb31c": "5966a3dcb98d8009b89275a538557b3f",
".git/objects/62/be29984efb19643fb3dc1fc0b6633524695a7f": "c38dbcc9683f139cf8a4fdca0edcf334",
".git/objects/db/1121698e62621a7f1abc2f1137925995b708a3": "a3912a16ad88c5c2ea4e04d1591e0bc1",
".git/objects/db/98267976c5ff87580059af7c34fa3ae50596e9": "f2de062bafaa3e1dda6e059fa9413bac",
".git/objects/9c/5f47eeb7e66dda879a013b5af2b235b3d52f1d": "95a819cd71bf4b24e8214adabd19f59a",
".git/objects/9c/52d5ca081d85318053ddf254404f6d0d5004f2": "937c643e5dfc0b3ec333cb0883df675f",
".git/objects/b2/28ac62fe2f3c57a72708ef3f3e713a5f29f9ef": "31dbca1f4e7c1eefdaa4c63b2978b1fb",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7e/9806b2fb275516fdafaf7b2d60354a42470829": "55fa45346f2fa965ea8b6f07e276834f",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/ce/097c8256a78e54c70e401c670a7fab0a138621": "800ca44358e7ca0de3ab5eae5b7aee97",
".git/objects/2f/6a6e409a6b7b7b150a444808cb829b541ecabb": "d06614a1ef77b9643f874c022551115c",
".git/objects/5d/496db14201b6b5f117c055efa8f706e45493cd": "a471bcebe6155f260942980c07e7492f",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/f7/6ebd1727f90ba84114442cad4caa543fb729f1": "5a7cc648831ca1e287cd67fe5279427c",
".git/objects/86/23cd3c0e7684910b2b74eb894015f6b053ebdd": "8bddbdf1ff2b37e754386c818c80593c",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cd/13f60ce1987656c23484e5468d82dcaf6689a6": "f5af40304ba895732a52ea05fd10ffa5",
".git/objects/ac/ae361282a129f3f44b919dab13fdb139a9316d": "bc9d63557b6c95848b4066161a241685",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/95/6c363682b4bdfb6bcf747184ecaa99c919c44c": "dd7dca0265ba90127d8845cb6bcac5bd",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ca/7dc2b019423d2d198d726a0ac75ea59fb1c785": "50eba5a8915f3703ebb760344b15cc40",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/81/2d5b53575a748883ce871af9b2fcb0aca08a3e": "adff33a534996ca9a99ec81ca63fe5ed",
".git/objects/9a/00eeb97fa213b9996f3b8762ac0394a3f46b21": "85d40e470b40de28e8095bf683074fb2",
".git/objects/9a/9c8dd05489aad8d7a00c02e1dd8779790048c3": "a14a6da25aba1cf91408e15973af1f99",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/7a/de73e859041664f55d180dfe9ba3e25a503001": "e2f8b04294e1d7a9d8a4c2158b32aa47",
".git/objects/80/2ca9788ce77b99bfa50d6ac1e356f296cc89ff": "072542ce2a87a3b5f9364c133a6df7f7",
".git/objects/80/730329d88916b5399e2a06cacba58617126ee3": "fa35978d15152b4ad0add8c9a83d1f75",
".git/objects/80/32d1c6e219a06d833a03479b6dddc64c58a3af": "f135bb4619f5e27aa413a2e454a7f320",
".git/objects/e0/9f8cd0d6a4e76b8f49955126b511d78d00e387": "0ea6f76af93719d534b444ed3861cbf5",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/14/d3595bc7260c30d8dcd777b1d7d5c2b9dfa241": "c3c071b742a7a0d066017db7b69cdd12",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/1666e409d7a45c8d9fe03c8993b06cc9c3705b": "4714d611e3b6b6a5793695a02c3f8db8",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/b7/0f869a27c5fed7f193d139d934508d15c8775e": "6533ae5aebbdc7b84c3beb128f00e5db",
".git/objects/e3/4f5eb16cbc3d403a526ad3703f57e3b5f02039": "e26585f6fd8faac54d92060b848b7862",
".git/objects/9d/120460548ecd4f884ef7b41350fc5e4081ead9": "7e41602f5c20e37c048b8466cf55e1b1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/16/35fe2f075534ac8ef879335dcae9a3b4138f47": "9d9428c560b329e32f48b9d905e7c298",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/94/7b8b1a7299bac2e088107d9753f92e89158424": "469bc19cafa829cabb30050eb10ab087",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/a8/d17466d354e0f5926314cfc7b5d9b9464fc4b0": "855f68f5eedba3232d7820845f568d6c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/b0/a574712b37e18db56111b0d5cfb9202b38eb5c": "c530c57266f337f36d0fa18f07ef68ab",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/de/3f8492ab6b157acca419e13c465b7931ad5312": "6d7f6134ccb2fc46a7a3d1d6f83e47d9",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "8f70bff20f56bc4939269c7a750a7216",
".git/refs/heads/main": "abd4bba310f1cfd7c2348ba6f51d2ca7",
".git/refs/remotes/origin/master": "abd4bba310f1cfd7c2348ba6f51d2ca7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/NOTICES": "fea4a7544581e5b26970056bd23a76a8",
"assets/FontManifest.json": "fa2f3f2c60442eaf44b31a873b0fcb10",
"assets/assets/images/backgrounds/fondo.jpeg": "525a1a65c9440dff2c5138251340d4bc",
"assets/assets/images/backgrounds/login_bg.webp": "38f080249c0306a97fee50cb644d4c0b",
"assets/assets/fonts/inter/Inter-Light.ttf": "dfaec8b8820224135d07f1b409ceb214",
"assets/assets/fonts/inter/Inter-Bold.ttf": "7ef6f6d68c7fedc103180f2254985e8c",
"assets/assets/fonts/inter/Inter-Regular.ttf": "37dcabff629c3690303739be2e0b3524",
"assets/assets/fonts/inter/Inter-Italic.ttf": "ab4004692577ac82604c777fa83da556",
"assets/assets/logos/logo.png": "13e821c92713cc573c9743cc4e3b260e",
"assets/assets/logos/app_logo.png": "7323caa713bfd886493af32040922ecc",
"assets/assets/icons/cow_icon.svg": "c125e0f1cb24fc26e5fc372509eda843",
"assets/fonts/MaterialIcons-Regular.otf": "4cb9200231dee68b5357dd62ad99530f",
"assets/AssetManifest.bin.json": "43f1ae2fdea9517bc9c099fe35b05f38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin": "7cd69ef077b0521f4aedfccc68798ded",
"index.html": "4ff2b3e9076c181e9d65d91c472d4dc7",
"/": "4ff2b3e9076c181e9d65d91c472d4dc7",
"favicon.png": "39f67c585484258dd3c854ab92d8db85",
"manifest.json": "52e2b39c882e9e318dd8b0991f64b25f",
"icons/Icon-maskable-192.png": "bec4064794950b996fa9459075b4f3de",
"icons/Icon-512.png": "25c923376226c4c928263256b6c29a4e",
"icons/Icon-maskable-512.png": "25c923376226c4c928263256b6c29a4e",
"icons/Icon-192.png": "bec4064794950b996fa9459075b4f3de",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"version.json": "84eca4a9736c5d0a8557f7dd6c5f9ecf"};
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
