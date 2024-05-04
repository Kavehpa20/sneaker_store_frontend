import { greetingFunc } from "../../libs/greeting";
import { fetchSearchInfo } from "../../libs/productSearch";
import { fetchUserInfo } from "../../libs/userinfo";

export const homePage = () => {
  return `
  <div class="container flex justify-between items-center mt-4 px-6" id="home-page-container">

<div class="inline-flex gap-4">
  <img class="rounded-full" src="./public/img/profile.svg">
  <div>
    <p class="font-semibold text-gray-400" id="greeting">Good Morning👋</p>
    <p class="font-bold" id="task-header-username"></p>
  </div>
</div>

<div class="inline-flex gap-4">
  <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 22.0688C11.7956 22.0688 12.5587 21.7782 13.1213 21.2608C13.6839 20.7435 14 20.0418 14 19.3102H8C8 20.0418 8.31607 20.7435 8.87868 21.2608C9.44129 21.7782 10.2044 22.0688 11 22.0688ZM11 2.64538L9.8045 2.86745C8.44844 3.12152 7.2295 3.79863 6.35398 4.78417C5.47846 5.76971 5.00015 7.00315 5 8.27573C5 9.14193 4.799 11.3061 4.3115 13.4371C4.0715 14.495 3.7475 15.5971 3.317 16.5516H18.683C18.2525 15.5971 17.93 14.4964 17.6885 13.4371C17.201 11.3061 17 9.14193 17 8.27573C16.9995 7.00339 16.521 5.77028 15.6455 4.78502C14.7701 3.79976 13.5513 3.12285 12.1955 2.86883L11 2.644V2.64538ZM20.33 16.5516C20.6645 17.1681 21.0515 17.6564 21.5 17.9309H0.5C0.9485 17.6564 1.3355 17.1681 1.67 16.5516C3.02 14.0688 3.5 9.48952 3.5 8.27573C3.5 4.9378 6.08 2.15159 9.5075 1.51573C9.48656 1.32394 9.50958 1.13024 9.57505 0.947137C9.64052 0.76403 9.74701 0.595574 9.88763 0.452634C10.0283 0.309694 10.1999 0.195443 10.3915 0.11725C10.5831 0.0390565 10.7904 -0.00134277 11 -0.00134277C11.2096 -0.00134277 11.4169 0.0390565 11.6085 0.11725C11.8001 0.195443 11.9717 0.309694 12.1124 0.452634C12.253 0.595574 12.3595 0.76403 12.4249 0.947137C12.4904 1.13024 12.5134 1.32394 12.4925 1.51573C14.1879 1.83283 15.7121 2.67898 16.8069 3.9109C17.9016 5.14282 18.4998 6.68479 18.5 8.27573C18.5 9.48952 18.98 14.0688 20.33 16.5516Z" fill="#212529"/>
  </svg>
  <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4.12201L10.9245 3.01651C8.39996 0.421512 3.77096 1.31701 2.09996 4.57951C1.31546 6.11401 1.13846 8.32951 2.57096 11.157C3.95096 13.8795 6.82196 17.1405 12 20.6925C17.178 17.1405 20.0475 13.8795 21.429 11.157C22.8615 8.32801 22.686 6.11401 21.9 4.57951C20.229 1.31701 15.6 0.420012 13.0755 3.01501L12 4.12201ZM12 22.5C-10.9995 7.30201 4.91846 -4.55999 11.736 1.71451C11.826 1.79701 11.9145 1.88251 12 1.97101C12.0846 1.88259 12.1727 1.79753 12.264 1.71601C19.08 -4.56299 34.9995 7.30051 12 22.5Z" fill="#212529"/>
  </svg>
</div>
     
</div>

<form class="relative flex justify-center my-8">   
  <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div class="relative w-11/12">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
      </div>
      <input type="search" id="default-search" class="block w-full px-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
  </div>

</form>

  `
}

export const homePageRender = () => {
const userNamePara = <HTMLParagraphElement> document.getElementById('task-header-username');
const greeting = <HTMLParagraphElement> document.getElementById('greeting');
const search = <HTMLInputElement> document.getElementById('default-search');
const homePageContainer = <HTMLDivElement> document.getElementById('home-page-container');
const productsContainer = <HTMLDivElement> document.getElementById('products-container');
const brandsContainers = <HTMLDivElement> document.getElementById('brands-containers');
const paginationContainer = <HTMLDivElement> document.getElementById('pagination-container');

const greet = greetingFunc();
greeting.innerText = `${greet} 👋`


search.addEventListener('input' , async (ev) => {
  const target = <HTMLInputElement> ev.target;
  let searchInfo:any;
  if(target.value){
    searchInfo = await fetchSearchInfo(target.value);
    if(searchInfo.length >= 1){
      setTimeout(() => renderHome(searchInfo) , 1000);
    }else{
      setTimeout(() => renderNotfound() , 1000);
    }
  }
  else{
    window.location.href = '/homepage'
  }
})

async function main() {
  const user = await fetchUserInfo();
  if(!user)return;
  userNamePara.innerText = user.username;
};

main();

const renderHome = (array:Array<any>) => {
  homePageContainer.innerHTML = '';
  productsContainer.innerHTML = '';
  brandsContainers.innerHTML = '';
  paginationContainer.innerHTML = '';
  let html = '';
  array.map(item => {
  html += `<div class="flex flex-col gap-2 truncate overflow-hidden" data-id="${item.id}">
    <img class="rounded-2xl my-2 w-52 h-40" src= "${item.imageURL}" data-id="${item.id}" alt="${item.name}">
    <p class="font-bold text-ellipsis overflow-hidden" data-id="${item.id}">${item.name}</p>
    <p class="font-semibold text-sm" data-id="${item.id}">$ ${item.price}.00</p>
  </div>`
  });
  productsContainer.innerHTML=html;
};

const renderNotfound = () => {
  homePageContainer.innerHTML = '';
  productsContainer.innerHTML = '';
  brandsContainers.innerHTML = '';
  paginationContainer.innerHTML = '';
  let html = '' ;
  html += `<div class="flex items-center justify-center flex-col">
<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="300" height="300" viewBox="0 0 647.63626 632.17383" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z" transform="translate(-276.18187 -133.91309)" fill="#f2f2f2"/><path d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"/><path d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z" transform="translate(-276.18187 -133.91309)" fill="#000000"/><circle cx="190.15351" cy="24.95465" r="20" fill="#000000"/><circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff"/><path d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z" transform="translate(-276.18187 -133.91309)" fill="#e6e6e6"/><path d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"/><path d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z" transform="translate(-276.18187 -133.91309)" fill="#000000"/><circle cx="433.63626" cy="105.17383" r="20" fill="#000000"/><circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff"/></svg>
    <p class="font-bold text-3xl my-4">Not Found</p>
    <p class="text-lg text-center">Sorry, the keyword you entered cannot be found, please check again or search with another keyword.</p>
  </div>`
  brandsContainers.innerHTML=html;
};
}