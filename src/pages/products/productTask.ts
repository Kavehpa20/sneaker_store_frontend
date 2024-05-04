import { fetchDetailsInfo } from "../../libs/productDetail";

export const productTask = () => {
  return `
  <div class="container flex flex-col justify-between items-center" id="product-card">
  </div>
  `;
};

export async function handleClick() {
  let pageNum = Number(window.localStorage.getItem("pageNum"));
  console.log(pageNum);
  let myObj = await fetchDetailsInfo(pageNum);
  renderProduct(myObj);
}

const renderProduct = (obj: any) => {
  const productCardContainer = <HTMLDivElement>(
    document.getElementById("product-card")
  );
  productCardContainer.innerHTML = "";
  let html = "";
  html += ` 
    <div>
    <button onClick="navigate('/homepage')" class="absolute z-10 left-2 top-2">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9998 16.0003C23.9998 16.2655 23.8945 16.5199 23.7069 16.7074C23.5194 16.8949 23.2651 17.0003 22.9998 17.0003H11.4138L15.7078 21.2923C15.8008 21.3853 15.8746 21.4956 15.9249 21.6171C15.9752 21.7386 16.0011 21.8688 16.0011 22.0003C16.0011 22.1318 15.9752 22.262 15.9249 22.3835C15.8746 22.5049 15.8008 22.6153 15.7078 22.7083C15.6149 22.8013 15.5045 22.875 15.383 22.9253C15.2615 22.9757 15.1313 23.0015 14.9998 23.0015C14.8683 23.0015 14.7381 22.9757 14.6167 22.9253C14.4952 22.875 14.3848 22.8013 14.2918 22.7083L8.29183 16.7083C8.19871 16.6154 8.12482 16.505 8.07441 16.3836C8.024 16.2621 7.99805 16.1318 7.99805 16.0003C7.99805 15.8688 8.024 15.7385 8.07441 15.617C8.12482 15.4955 8.19871 15.3852 8.29183 15.2923L14.2918 9.29229C14.4796 9.10451 14.7343 8.99902 14.9998 8.99902C15.2654 8.99902 15.5201 9.10451 15.7078 9.29229C15.8956 9.48006 16.0011 9.73474 16.0011 10.0003C16.0011 10.2658 15.8956 10.5205 15.7078 10.7083L11.4138 15.0003H22.9998C23.2651 15.0003 23.5194 15.1056 23.7069 15.2932C23.8945 15.4807 23.9998 15.7351 23.9998 16.0003Z" fill="black"/>
        </svg>  
      </button>
    <img src="${obj.imageURL}" alt="">
  </div>
  <div class="flex flex-col py-4 w-11/12">
    <div class="inline-flex justify-around gap-8 items-center">
      <p class="font-bold text-2xl">${obj.name}</p>
      <svg fill="#000000" height="32px" width="32px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
   viewBox="0 0 490 490" xml:space="preserve">
  <path id="XMLID_25_" d="M316.554,108.336c4.553,6.922,2.629,16.223-4.296,20.774c-3.44,2.261-6.677,4.928-9.621,7.929
  c-2.938,2.995-6.825,4.497-10.715,4.497c-3.791,0-7.585-1.427-10.506-4.291c-5.917-5.801-6.009-15.298-0.207-21.212
  c4.439-4.524,9.338-8.559,14.562-11.992C302.698,99.491,312.002,101.414,316.554,108.336z M447.022,285.869
  c-1.506,1.536-148.839,151.704-148.839,151.704C283.994,452.035,265.106,460,245,460s-38.994-7.965-53.183-22.427L42.978,285.869
  c-57.304-58.406-57.304-153.441,0-211.847C70.83,45.634,107.882,30,147.31,30c36.369,0,70.72,13.304,97.69,37.648
  C271.971,43.304,306.32,30,342.689,30c39.428,0,76.481,15.634,104.332,44.021C504.326,132.428,504.326,227.463,447.022,285.869z
   M425.596,95.028C403.434,72.44,373.991,60,342.69,60c-31.301,0-60.745,12.439-82.906,35.027c-1.122,1.144-2.129,2.533-3.538,3.777
  c-7.536,6.654-16.372,6.32-22.491,0c-1.308-1.352-2.416-2.633-3.538-3.777C208.055,72.44,178.612,60,147.31,60
  c-31.301,0-60.744,12.439-82.906,35.027c-45.94,46.824-45.94,123.012,0,169.836c1.367,1.393,148.839,151.704,148.839,151.704
  C221.742,425.229,233.02,430,245,430c11.98,0,23.258-4.771,31.757-13.433l148.839-151.703l0,0
  C471.535,218.04,471.535,141.852,425.596,95.028z M404.169,116.034c-8.975-9.148-19.475-16.045-31.208-20.499
  c-7.746-2.939-16.413,0.953-19.355,8.698c-2.942,7.744,0.953,16.407,8.701,19.348c7.645,2.902,14.521,7.431,20.436,13.459
  c23.211,23.658,23.211,62.153,0,85.811l-52.648,53.661c-5.803,5.915-5.711,15.412,0.206,21.212
  c2.921,2.863,6.714,4.291,10.506,4.291c3.889,0,7.776-1.502,10.714-4.497l52.648-53.661
  C438.744,208.616,438.744,151.275,404.169,116.034z"/>
      </svg>
    </div>
    <div class="inline-flex gap-2 my-4 items-center">
      <span class="bg-gray-200 text-gray-800 text-xs font-medium me-2 px-2.5 py-1.5 rounded-lg dark:bg-gray-700 dark:text-gray-400">5,371 sold</span>
      <svg  width="15" height="15" viewBox="0 0 123.38 117.69" style="enable-background:new 0 0 123.38 117.69" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-miterlimit:2.6131;}</style><g><path class="st0" d="M64.64,2.22l15.71,36.79l39.85,3.58c1.76,0.15,3.06,1.7,2.91,3.46c-0.07,0.86-0.48,1.6-1.08,2.13L91.89,74.5 l8.92,39.02c0.39,1.72-0.68,3.44-2.41,3.84c-0.88,0.2-1.76,0.02-2.47-0.44L61.69,96.44l-34.35,20.54c-1.52,0.91-3.48,0.41-4.39-1.1 c-0.44-0.74-0.55-1.58-0.37-2.35l0,0l8.92-39.02L1.34,48.17c-1.33-1.16-1.46-3.18-0.3-4.51c0.59-0.68,1.4-1.04,2.24-1.09 l39.75-3.57L58.75,2.2c0.69-1.63,2.57-2.38,4.2-1.69C63.74,0.85,64.33,1.48,64.64,2.22L64.64,2.22z M61.69,11.6l13.53,31.67l0.01,0 c0.45,1.05,1.45,1.83,2.67,1.93l34.31,3.08L86.37,70.83c-0.95,0.74-1.44,1.99-1.15,3.24l7.68,33.58L63.39,90 c-0.51-0.32-1.1-0.49-1.7-0.49V11.6L61.69,11.6z"/></g></svg>
      <span class="text-gray-800 text-xs font-medium me-2 px-2.5 py-1.5 rounded-lg dark:bg-gray-700 dark:text-gray-400">4.3 (5.389 reviews)</span>
    </div>
    <hr>
    <div class="flex flex-col py-4 ">
      <p class="font-bold text-lg mb-2">Description</p>
      <p class="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, minus ullam quod dolore voluptate impedit</p>
    </div>
    <div class="inline-flex justify-between gap-10">
      <div class="flex flex-col gap-1">
        <p class="font-bold text-lg mb-2">Size</p>
        <div class="inline-flex gap-2">
          <p class="px-2.5 py-2 rounded-full border border-gray-800">${obj.sizes.split("|")[0]}</p>
          <p class="px-2.5 py-2 rounded-full border border-gray-800">${obj.sizes.split("|")[1]}</p>
          <p class="px-2.5 py-2 rounded-full border border-gray-800 text-white bg-gray-800">${obj.sizes.split("|")[2]}</p>
        </div>
      </div>
      <div class="flex flex-col gap-1 w-10/12 overflow-scroll">
        <div>
          <p class="font-bold text-lg mb-2">Color</p>
        </div>
        <div class="overflow-scroll flex gap-2 w-full">
          <p class="p-5 rounded-full border border-gray-800 bg-gray-400"></p>
          <p class="p-5 rounded-full border border-gray-800 bg-cyan-800"></p>
          <p class="p-5 rounded-full border border-gray-800 bg-pink-700"></p>
          <p class="p-5 rounded-full border border-gray-800 bg-red-900"></p>
          <p class="p-5 rounded-full border border-gray-800 bg-sky-400"></p>
        </div>
      </div>
    </div>
    <form class="inline-flex max-w-xs my-5 gap-6 items-center">
      <span class="font-bold">Quantity</span>
      <div class="relative flex items-center max-w-[6rem]">
          <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg px-2 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
              </svg>
          </button>
  
          <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" class="bg-gray-100 border-x-0 border-gray-300 h-8 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value="2" required>
  
          <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg px-2 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
              </svg>
          </button>
      </div>
    </form>
    <hr>
    <div class="inline-flex items-center justify-between gap-8 my-4">
  <div>
    <p class="text-xs font-light text-gray-500">Total price</p>
    <p class="text-xl font-bold">$240.00</p>
  </div>
  <button type="button" class="text-white gap-2 bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-3xl text-sm px-12 py-3.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">
    <svg fill="#fff" height="18px" width="18px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 189.948 189.948" xml:space="preserve">
  <g>
   <g>
     <g>
       <path d="M164.613,56.66L132.259,9.34c-2.371-3.467-7.106-4.357-10.576-1.986c-3.469,2.374-4.357,7.106-1.986,10.576
         l26.437,38.659H43.815L70.247,17.93c2.374-3.469,1.484-8.202-1.986-10.576C64.792,4.98,60.057,5.873,57.688,9.34L25.334,56.66
         C11.248,57.375,0,69.026,0,83.29c0,7.033,2.787,13.69,7.74,18.682l10.708,63.311c0.378,10.343,8.91,18.641,19.341,18.641h114.367
         c10.431,0,18.963-8.296,19.341-18.641l10.708-63.308c4.953-4.994,7.743-11.651,7.743-18.684
         C189.947,69.029,178.699,57.375,164.613,56.66z M170.373,92.179l-2.252,1.811l-11.722,69.306l-0.107,1.268
         c0,2.28-1.854,4.139-4.137,4.139H37.789c-2.283,0-4.139-1.856-4.139-4.139L21.821,93.992l-2.25-1.811
         c-2.77-2.229-4.357-5.471-4.357-8.894c0-6.333,5.148-11.481,11.476-11.481h136.558c6.328,0,11.476,5.151,11.476,11.481
         C174.73,86.713,173.143,89.955,170.373,92.179z"/>
       <path d="M131.793,91.687c-4.202,0-7.609,3.406-7.609,7.609v53.333c0,4.202,3.406,7.609,7.609,7.609s7.609-3.406,7.609-7.609
         V99.295C139.401,95.093,135.995,91.687,131.793,91.687z"/>
       <path d="M94.975,91.687c-4.202,0-7.609,3.406-7.609,7.609v53.333c0,4.202,3.406,7.609,7.609,7.609
         c4.202,0,7.609-3.406,7.609-7.609V99.295C102.584,95.093,99.177,91.687,94.975,91.687z"/>
       <path d="M58.152,91.687c-4.202,0-7.609,3.406-7.609,7.609v53.333c0,4.202,3.406,7.609,7.609,7.609s7.609-3.406,7.609-7.609
         V99.295C65.763,95.093,62.355,91.687,58.152,91.687z"/>
     </g>
   </g>
  </g>
    </svg>
    add to Cart
    </button>
    </div>
  </div>`;

  productCardContainer.innerHTML = html;
};
