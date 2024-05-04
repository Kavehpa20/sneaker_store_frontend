import { renderProduct } from "../pages/products/products";
import { fetchProductsInfo } from "./productsinfo";
let totalPages:number;
let pageNumber:number = 1;

export const pagination = () => {
  return `
  <nav class="flex items-center justify-around border-t border-gray-200 px-2 my-4" id="pagination-container">
  <div class="-mt-px flex w-0 flex-1">
    <p class="curser-pointer inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" id="on-click-previous-page">
      <svg class="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clip-rule="evenodd" />
      </svg>
    </p>
  </div>
  <div class=" md:-mt-px md:flex" id="pagination-buttons">
  </div>
  
  <div class="-mt-px flex w-0 flex-1 justify-end">
    <p  class="curser-pointer inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" id="on-click-next-page">
      <svg class="ml-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
      </svg>
    </p>
  </div>
</nav>
  `
};

export const paginationFunc = () => {
const onClickNext = <HTMLParagraphElement> document.getElementById('on-click-next-page');
const onClickPrevious = <HTMLParagraphElement> document.getElementById('on-click-previous-page');
const paginationButtons = <HTMLDivElement> document.getElementById('pagination-buttons');


paginationButtons.addEventListener('click' , (ev) => {
  const target = <HTMLParagraphElement> ev.target;
  pageNumber = Number(target.innerText) ;
  paginationProductsList();
});


onClickPrevious.addEventListener('click' ,() => {
  if(pageNumber>1){
    pageNumber--;
  paginationProductsList();
  }
});

onClickNext.addEventListener('click' ,() => {
  if(pageNumber<totalPages){
    pageNumber ++;
  paginationProductsList();
  }
});
};

export const paginationProductsList = async () => {
  let productList = await fetchProductsInfo(pageNumber);  
  paginationButtonsListRender(productList.totalPages , productList.page);
  renderProduct(productList.data)
  totalPages = productList.totalPages;
  return totalPages;
};

export function paginationButtonsListRender(totalPages:number , activePage:number){
const paginationButtons = <HTMLDivElement> document.getElementById('pagination-buttons');
  let html = '';
  if(totalPages <= 5){
    for(let page = 1 ; page <= totalPages ; page++){
      html += paginationButton(page, activePage === page);
    }
  }
paginationButtons.innerHTML = html;

};

function paginationButton(page:number | string , isActive = false){
  if(isActive){
  return `
  <p
     aria-current="page"
     class="curser-pointer inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600">
     ${page}
  </p>
  `;
  }
  return `
  <p
    class="curser-pointer inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500  hover:border-gray-300 hover:text-gray-700">
    ${page}
   </p>
  `;
};
