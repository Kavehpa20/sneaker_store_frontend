import { handleClick } from "./productTask";


export const products = () => {
  return `
  <div class="container mx-auto max-w-sm overflow-y-scroll px-4 grid grid-cols-2 gap-4" id="products-container">
</div>
  `
}

export const productsFunc = () => {
  const productsContainer = <HTMLDivElement> document.getElementById('products-container');
  let productId:number = 1;
  if(productsContainer)productsContainer.addEventListener('click' , (ev) => {
    const target = <HTMLDivElement> ev.target;
    if(target.dataset.id){productId = (Number(target.dataset.id));
      onClickCard(productId);
   }
   });
  
  
  const onClickCard = async (id:any) => {
    window.navigate('/product')
      window.localStorage.setItem('pageNum' , id);
      await handleClick();
  }
};

export const renderProduct = (array:Array<any>) => {
    const productsContainer = <HTMLDivElement> document.getElementById('products-container');
    if(productsContainer) productsContainer.innerHTML = '';
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