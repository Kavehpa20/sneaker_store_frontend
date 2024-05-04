import { fetchBrandsInfo } from "../../libs/brandinfo";
import { fetchFilterInfo } from "../../libs/filterBrands";
import { paginationButtonsListRender, paginationProductsList } from "../../libs/pagination";
import { renderProduct } from "../../pages/products/products";

export const brands = () => {
  return `
  <div class="flex flex-col px-4 mb-2 gap-3" id="brands-containers">
  <div class="flex justify-between">
    <p class="text-lg font-semibold">Most Popular</p>
    <p class="font-semibold">See All</p>
  </div>
  <form class="w-full overflow-scroll inline-flex gap-2" id="brands-container"></form>
</div>
  `
};

export const brandsFunc = () => {  
  const brandsContainer = <HTMLFormElement> document.getElementById('brands-container');
  const paginationContainer = <HTMLDivElement>document.getElementById('pagination-container');
  let id = 2;
  
  const brandsList = async () => {
    let brandsInfo:any = await fetchBrandsInfo();
  render(brandsInfo);
  };
  
 const render = (array:Array<any>) => {
    brandsContainer.innerHTML = '';
    let html = `<div>
    <input type="radio" name="option" id="1" value="All" class="peer hidden" checked />
    <label for="1" class="block text-xs cursor-pointer select-none rounded-3xl px-5 py-2.5 text-center border border-gray-800 peer-checked:bg-gray-800 peer-checked:font-bold peer-checked:text-white">All</label>
    </div>`;
    array.map(item => {
    html += `
    <div>
    <input type="radio" name="option" id="${id}" value="${item}" class="peer hidden" />
    <label for="${id}" class="block text-xs truncate cursor-pointer select-none rounded-3xl px-5 py-2.5 text-center peer-checked:bg-gray-800 border border-gray-800 peer-checked:font-semibold peer-checked:text-white">${item}</label>
  </div>`
  id++
    }
   );
    brandsContainer.innerHTML=html;
  };
  
  brandsList();
  
  brandsContainer.addEventListener('change' , async (ev) => {
    const target = <HTMLInputElement> ev.target;
    let filteredBrands = await fetchFilterInfo(target.value);
    if(target.type === "radio" && target.value !== "All"){
      if(filteredBrands.totalPages===1){
    paginationContainer.classList.add('hidden');
    renderProduct(filteredBrands.data);
      } 
      else if(filteredBrands.totalPages>1) {
        const paginationButtons = <HTMLDivElement> document.getElementById('pagination-buttons');
    paginationContainer.classList.remove('hidden');
        paginationButtons.innerHTML = '';
        paginationButtonsListRender(filteredBrands.totalPages , filteredBrands.activePage);
    renderProduct(filteredBrands.data);
      }
  } else if(target.type === "radio" && target.value === "All"){
    paginationContainer.classList.remove('hidden');
    const data = async () =>  {
 await paginationProductsList();
    }
    data()
  }
  })
}