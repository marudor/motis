import React from 'react';

import Head from 'next/head'

import { App } from '../components/App/App'

export default function Index() {
  return (
    <>
      <Head>
        <title>MOTIS</title>
        <script type='text/javascript' src='js/ports.js'></script>
        <script type='text/javascript' src='js/main.js'></script>
        <script type='text/javascript' src='external_lib/mapbox-gl.js'></script>
        <script type='text/javascript' src='external_lib/gl-matrix-min.js'></script>
        <script type='text/javascript' src='external_lib/deep-equal.js'></script>
        <script type='text/javascript' src='external_lib/polyline.js'></script>
        <script type='text/javascript' src='js/railviz/webgl.js'></script>
        <script type='text/javascript' src='js/railviz/trains.js'></script>
        <script type='text/javascript' src='js/railviz/model.js'></script>
        <script type='text/javascript' src='js/railviz/render.js'></script>
        <script type='text/javascript' src='js/railviz/textures.js'></script>
        <script type='text/javascript' src='js/railviz/api.js'></script>
        <script type='text/javascript' src='js/railviz/markers.js'></script>
        <script type='text/javascript' src='js/railviz/connectionmgr.js'></script>
        <script type='text/javascript' src='js/railviz/path_base.js'></script>
        <script type='text/javascript' src='js/railviz/path_connections.js'></script>
        <script type='text/javascript' src='js/railviz/path_detail.js'></script>
        <script type='text/javascript' src='js/railviz/path_extra.js'></script>
        <script type='text/javascript' src='js/railviz/style.js'></script>
        <script type='text/javascript' src='js/railviz/main.js'></script>
        <script type='text/javascript' src='js/map_style.js'></script>
        <script type='text/javascript' src='js/map.js'></script>
        <link href="fonts/styles.css" rel="stylesheet"/>
      </Head>
      <div id='app-container'>
        <App />
      </div>
      <svg style={{ display: 'none' }}>
        <symbol id="train" viewBox="0 0 24 24">
          <path d="M4,15.5C4,17.43 5.57,19 7.5,19L6,20.5v0.5h12v-0.5L16.5,19c1.93,0 3.5,-1.57 3.5,-3.5L20,5c0,-3.5 -3.58,-4 -8,-4s-8,0.5 -8,4v10.5zM12,17c-1.1,0 -2,-0.9 -2,-2s0.9,-2 2,-2 2,0.9 2,2 -0.9,2 -2,2zM18,10L6,10L6,5h12v5z"
          />
        </symbol>
        <symbol id="sbahn" viewBox="0 0 64 64">
          <path d="M 23.9104,17.8176 c 0,-2.7648 2.5344,-5.1456 7.0144,-5.1456 7.8592,0
14.5408,4.224 19.0208,9.0368 l 0,-8.3968 C 44.8,9.3184 38.2976,6.9376
31.0784,6.9376 c -8.6784,0 -18.3296,5.3248 -18.3296,15.232 0,18.8672
28.6208,12.1088 28.6208,23.0144 0,2.9184 -3.7888,5.632 -8.576,5.632 -7.7312,0
-15.4368,-4.7104 -19.6608,-10.7776 l 0,10.0864 c 4.48,3.9936 12.6208,7.168
19.6608,7.168 12.672,0 20.1984,-9.0368 20.1984,-16.768 0,-19.2512
-29.0816,-11.008 -29.0816,-22.7072 z" />
        </symbol>
        <symbol id="ubahn" viewBox="0 0 500 500">
          <path d="M269.02771 462.03556C301.49095 458.86693 331.81940 448.53888 355.90324
432.45098C368.00616 424.36627 385.07594 407.62587 392.49694 396.56338C403.34218
380.39638 411.21817 360.97199 415.43165 340C417.06374 331.87653 417.26314
317.60376 417.59707 185L417.96486 38.947368L317.89474 38.947368L317.89474
172.67306C317.89474 260.58200 317.50921 309.85624 316.76948 316.49013C315.44428
328.37460 311.53547 342.57976 307.56662 349.93462C302.58644 359.16362 293.39802
367.94547 283.81131 372.63882C257.43623 385.55122 218.84256 380.90205 200.54920
362.60869C191.23263 353.29213 184.83222 338.29015 182.14617 319.47368C181.48964
314.87452 181.08649 260.77515 181.07348 175.52632L181.05263 38.947368L82.105263
38.947368L82.105263 177.25689C82.105263 316.01926 82.371267 327.73304 85.920452
345.26316C94.686023 388.55802 121.69624 423.01667 163.04724 443.65869C193.35569
458.78839 232.59204 465.59192 269.02771 462.03556Z" />
        </symbol>
        <symbol id="tram" viewBox="0 0 24 24">
          <path d="M17,18C16.4,18 16,17.6 16,17C16,16.4 16.4,16 17,16C17.6,16 18,16.4 18,17C18,17.6 17.6,18 17,18M6.7,10.7L7,7.3C7,6.6 7.6,6 8.3,6H15.6C16.4,6 17,6.6 17,7.3L17.3,10.6C17.3,11.3 16.7,11.9 16,11.9H8C7.3,12 6.7,11.4 6.7,10.7M7,18C6.4,18 6,17.6 6,17C6,16.4 6.4,16 7,16C7.6,16 8,16.4 8,17C8,17.6 7.6,18 7,18M19,6A2,2 0 0,0 17,4H15A2,2 0 0,0 13,2H11A2,2 0 0,0 9,4H7A2,2 0 0,0 5,6L4,18A2,2 0 0,0 6,20H8L7,22H17.1L16.1,20H18A2,2 0 0,0 20,18L19,6Z"
          />
        </symbol>
        <symbol id="bus" viewBox="0 0 24 24">
          <path d="M4,16c0,0.88 0.39,1.67 1,2.22L5,20c0,0.55 0.45,1 1,1h1c0.55,0 1,-0.45 1,-1v-1h8v1c0,0.55 0.45,1 1,1h1c0.55,0 1,-0.45 1,-1v-1.78c0.61,-0.55 1,-1.34 1,-2.22L20,6c0,-3.5 -3.58,-4 -8,-4s-8,0.5 -8,4v10zM7.5,17c-0.83,0 -1.5,-0.67 -1.5,-1.5S6.67,14 7.5,14s1.5,0.67 1.5,1.5S8.33,17 7.5,17zM16.5,17c-0.83,0 -1.5,-0.67 -1.5,-1.5s0.67,-1.5 1.5,-1.5 1.5,0.67 1.5,1.5 -0.67,1.5 -1.5,1.5zM18,11L6,11L6,6h12v5z"
          />
        </symbol>
        <symbol id="walk" viewBox="0 0 24 24">
          <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"
          />
        </symbol>
        <symbol id="bike" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"
          />
        </symbol>
        <symbol id="car" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </symbol>
        <symbol id="ship" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z" />
        </symbol>
        <symbol id="plane" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </symbol>
      </svg>
      <svg height="0">
    <defs>
      <filter id="fadedjtg">
        <feColorMatrix type="saturate" values="0.0" />
        {/*<feGaussianBlur in="SourceGraphic" stdDeviation="1" />*/}
      </filter>
    </defs>
  </svg>
    </>)
}
