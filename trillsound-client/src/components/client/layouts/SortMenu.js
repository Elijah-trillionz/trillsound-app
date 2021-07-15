import React from 'react';

export const SortMenu = ({ genre }) => {
  const toggleSortModal = () => {
    document.querySelector('.sort-menu').classList.toggle('active');
  };

  return (
    <div className='sort-menu'>
      <div className='sort-icon' onClick={toggleSortModal}>
        <div className='cont'>
          <div className='sort-line'></div>
          <div className='sort-line'></div>
          <div className='sort-line'></div>
        </div>
      </div>
      <div className='sort-content'>
        <p>
          <a href={`/genre/${genre}/trending#trending`} title='trending'>
            <svg
              height='511pt'
              viewBox='-80 0 511 511.99927'
              width='511pt'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='m285.402344 132.957031c-3.480469-5.761719-10.378906-8.5-16.863282-6.691406-6.488281 1.808594-10.972656 7.714844-10.972656 14.449219 0 18.308594-14.894531 33.199218-33.199218 33.199218-18.308594 0-33.199219-14.890624-33.199219-33.199218v-125.714844c0-6.066406-3.65625-11.535156-9.261719-13.859375-5.605469-2.320313-12.058594-1.035156-16.347656 3.253906-1.679688 1.683594-41.683594 41.914063-82.207032 102.703125-23.894531 35.84375-42.964843 71.398438-56.675781 105.675782-17.367187 43.421874-26.175781 84.996093-26.175781 123.558593 0 96.863281 78.804688 175.667969 175.664062 175.667969 96.863282 0 175.667969-78.804688 175.667969-175.667969 0-62-22.351562-130.425781-66.429687-203.375zm-109.238282 349.042969c-80.316406 0-145.664062-65.347656-145.664062-145.667969 0-79.0625 42.136719-158.980469 77.488281-212.105469 19.160157-28.792968 38.46875-53.058593 53.175781-70.316406v86.804688c0 34.847656 28.351563 63.199218 63.199219 63.199218 21.304688 0 40.183594-10.59375 51.636719-26.792968 30.429688 57.300781 45.832031 110.746094 45.832031 159.210937 0 80.320313-65.34375 145.667969-145.667969 145.667969zm0 0' />
              <path d='m261.257812 253.167969h-64.265624c-8.285157 0-15 6.714843-15 14.996093-.003907 8.285157 6.714843 15.003907 14.996093 15.003907h28.058594l-64.085937 64.082031-34.835938-34.835938c-5.855469-5.855468-15.355469-5.855468-21.210938 0l-34.085937 34.082032c-5.859375 5.859375-5.859375 15.355468-.003906 21.214844 5.859375 5.859374 15.355469 5.855468 21.214843 0l23.480469-23.476563 34.832031 34.835937c2.8125 2.8125 6.628907 4.394532 10.609376 4.394532 3.976562 0 7.792968-1.582032 10.605468-4.394532l74.691406-74.6875v28.050782c0 8.28125 6.714844 15 15 15 8.285157 0 15-6.71875 15-15v-64.265625c0-8.285157-6.714843-15-15-15zm0 0' />
            </svg>
          </a>
        </p>
        <p>
          <a
            href={`/genre/${genre}/alph#alphabetically`}
            title='alphabetical order'
          >
            <svg
              id='Capa_1'
              height='512'
              viewBox='0 0 512 512'
              width='512'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path d='m168.15 117.29-21.54 56.57h42.89zm0 0-21.54 56.57h42.89zm0 0-21.54 56.57h42.89zm0 0-21.54 56.57h42.89zm0 0-21.54 56.57h42.89zm253.3-117.29h-330.9c-36.14 0-65.55 29.41-65.55 65.55v380.9c0 36.14 29.41 65.55 65.55 65.55h330.9c36.14 0 65.55-29.41 65.55-65.55v-380.9c0-36.14-29.41-65.55-65.55-65.55zm-204.63 447h-96.06c-11.939 0-19.047-13.27-12.57-23.19l78.72-120.81h-63.2c-8.29 0-15-6.72-15-15s6.71-15 15-15h90.87c11.925 0 19.045 13.241 12.57 23.19l-78.72 120.81h68.39c8.28 0 15 6.72 15 15s-6.72 15-15 15zm12.93-208.97c-7.675 2.912-16.382-.938-19.33-8.73l-9.6-25.44h-65.64l-9.7 25.48c-2.95 7.74-11.62 11.63-19.36 8.68s-11.63-11.62-8.68-19.36l53.74-141.11c7.641-16.772 28.186-14.266 33.89-.37.139.302-2.955-7.871 53.42 141.52 2.93 7.75-.99 16.41-8.74 19.33zm151.64 135.36c9.426-9.41 25.61-2.705 25.61 10.61 0 3.84-1.46 7.68-4.39 10.61l-48 48c-.215 0-3.211 3.938-9.62 4.36-4.279.266-8.469-1.227-11.68-4.44l-47.92-47.92c-5.85-5.86-5.85-15.36 0-21.22 5.86-5.85 15.36-5.85 21.22 0l22.39 22.4v-279.58l-22.39 22.4c-5.86 5.85-15.36 5.85-21.22 0-5.85-5.86-5.85-15.36 0-21.22 51.655-51.656 47.868-47.901 48.8-48.74 2.959-2.563 6.818-3.876 10.82-3.62 6.444.444 9.369 4.36 9.6 4.36l48 48c2.93 2.93 4.39 6.77 4.39 10.61 0 13.311-16.18 20.024-25.61 10.61l-22.39-22.4v279.58zm-234.78-199.53h42.89l-21.35-56.57zm21.54-56.57-21.54 56.57h42.89zm0 0-21.54 56.57h42.89zm0 0-21.54 56.57h42.89zm0 0-21.54 56.57h42.89z' />
              </g>
            </svg>
          </a>
        </p>
        <p>
          <a href={`/genre/${genre}`} title='recently uploaded'>
            <svg
              version='1.1'
              id='Capa_1'
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 512 512'
            >
              <g>
                <g>
                  <g>
                    <path
                      d='M458.406,380.681c-8.863-6.593-21.391-4.752-27.984,4.109c-3.626,4.874-7.506,9.655-11.533,14.21
				c-7.315,8.275-6.538,20.915,1.737,28.231c3.806,3.364,8.531,5.016,13.239,5.016c5.532,0,11.04-2.283,14.992-6.754
				c4.769-5.394,9.364-11.056,13.658-16.829C469.108,399.803,467.269,387.273,458.406,380.681z'
                    />
                    <path
                      d='M491.854,286.886c-10.786-2.349-21.447,4.496-23.796,15.288c-1.293,5.937-2.855,11.885-4.646,17.681
				c-3.261,10.554,2.651,21.752,13.204,25.013c1.967,0.607,3.955,0.896,5.911,0.896c8.54,0,16.448-5.514,19.102-14.102
				c2.126-6.878,3.98-13.937,5.514-20.98C509.492,299.89,502.647,289.236,491.854,286.886z'
                    />
                    <path
                      d='M362.139,444.734c-5.31,2.964-10.808,5.734-16.34,8.233c-10.067,4.546-14.542,16.392-9.996,26.459
				c3.34,7.396,10.619,11.773,18.239,11.773c2.752,0,5.549-0.571,8.22-1.777c6.563-2.964,13.081-6.249,19.377-9.764
				c9.645-5.384,13.098-17.568,7.712-27.212C383.968,442.803,371.784,439.35,362.139,444.734z'
                    />
                    <path
                      d='M236,96v151.716l-73.339,73.338c-7.81,7.811-7.81,20.474,0,28.284c3.906,3.906,9.023,5.858,14.143,5.858
				c5.118,0,10.237-1.953,14.143-5.858l79.196-79.196c3.75-3.75,5.857-8.838,5.857-14.142V96c0-11.046-8.954-20-20-20
				C244.954,76,236,84.954,236,96z'
                    />
                    <path
                      d='M492,43c-11.046,0-20,8.954-20,20v55.536C425.448,45.528,344.151,0,256,0C187.62,0,123.333,26.629,74.98,74.98
				C26.629,123.333,0,187.62,0,256s26.629,132.667,74.98,181.02C123.333,485.371,187.62,512,256,512c0.169,0,0.332-0.021,0.5-0.025
				c0.168,0.004,0.331,0.025,0.5,0.025c7.208,0,14.487-0.304,21.637-0.902c11.007-0.922,19.183-10.592,18.262-21.599
				c-0.923-11.007-10.58-19.187-21.6-18.261C269.255,471.743,263.099,472,257,472c-0.169,0-0.332,0.021-0.5,0.025
				c-0.168-0.004-0.331-0.025-0.5-0.025c-119.103,0-216-96.897-216-216S136.897,40,256,40c76.758,0,147.357,40.913,185.936,106
				h-54.993c-11.046,0-20,8.954-20,20s8.954,20,20,20H448c12.18,0,23.575-3.423,33.277-9.353c0.624-0.356,1.224-0.739,1.796-1.152
				C500.479,164.044,512,144.347,512,122V63C512,51.954,503.046,43,492,43z'
                    />
                  </g>
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </a>
        </p>
      </div>
    </div>
  );
};