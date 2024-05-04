import Navigo from "navigo";
import { startPage } from "./pages/startPage";
import { onBoarding } from "./pages/onBoarding";
import { startonboarding } from "./pages/startOnboarding";
import { loginPage, loginPageFunc } from "./pages/login";
import { signUpPage, signUpPageFunc } from "./pages/signup";
import { homePage, homePageRender } from "./pages/homepage";
import { brands, brandsFunc } from "./components/brands";
import { products, productsFunc } from "./pages/products/products";
import { productTask} from "./pages/products/productTask";
import { pagination, paginationFunc, paginationProductsList } from "./libs/pagination";
import { footer } from "./components/footer";


const router = new Navigo("/");

declare global {
  interface Window {
   navigate: (_:string) => void;
  }
}
window.navigate = (route: string) => {
  router.navigate(route);
};

function render (context:string){
  const app =<HTMLDivElement> document.getElementById('app');
  app.innerHTML = "";
  app.innerHTML = context;
};

function render2 (context:string){
  const app = <HTMLDivElement> document.getElementById('app');
  app.innerHTML += context;
};

router.on("/" , function(){
render(startPage())
});

router.on("startonboarding" , function(){
  render(startonboarding())
  });

router.on("onboarding" , function(){
  render(onBoarding())
  });

router.on("signup" , function(){
render(signUpPage());
signUpPageFunc();
});

router.on("login" , function(){
  render(loginPage());
  loginPageFunc();
});

router.on("homepage" , function(){
const app =<HTMLDivElement> document.getElementById('app');
app.innerHTML = "";
render2(homePage());
render2(brands());
render2(products());
render2(pagination());
render2(footer())
homePageRender();
brandsFunc();
productsFunc();
paginationFunc();
paginationProductsList();
});


router.on('product' , async function(){
  render(productTask());
  });


router.resolve();