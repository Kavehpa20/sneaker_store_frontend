import axios from 'axios';
import { errorHandler } from '../../libs/errorHandler';

export const signUpPage = () => {
  return `
  <div class="container flex flex-col gap-8">

  <div class="ml-4 mt-4">
  <a href="onboarding" class="cursor-pointer">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9998 16.0003C23.9998 16.2655 23.8945 16.5199 23.7069 16.7074C23.5194 16.8949 23.2651 17.0003 22.9998 17.0003H11.4138L15.7078 21.2923C15.8008 21.3853 15.8746 21.4956 15.9249 21.6171C15.9752 21.7386 16.0011 21.8688 16.0011 22.0003C16.0011 22.1318 15.9752 22.262 15.9249 22.3835C15.8746 22.5049 15.8008 22.6153 15.7078 22.7083C15.6149 22.8013 15.5045 22.875 15.383 22.9253C15.2615 22.9757 15.1313 23.0015 14.9998 23.0015C14.8683 23.0015 14.7381 22.9757 14.6167 22.9253C14.4952 22.875 14.3848 22.8013 14.2918 22.7083L8.29183 16.7083C8.19871 16.6154 8.12482 16.505 8.07441 16.3836C8.024 16.2621 7.99805 16.1318 7.99805 16.0003C7.99805 15.8688 8.024 15.7385 8.07441 15.617C8.12482 15.4955 8.19871 15.3852 8.29183 15.2923L14.2918 9.29229C14.4796 9.10451 14.7343 8.99902 14.9998 8.99902C15.2654 8.99902 15.5201 9.10451 15.7078 9.29229C15.8956 9.48006 16.0011 9.73474 16.0011 10.0003C16.0011 10.2658 15.8956 10.5205 15.7078 10.7083L11.4138 15.0003H22.9998C23.2651 15.0003 23.5194 15.1056 23.7069 15.2932C23.8945 15.4807 23.9998 15.7351 23.9998 16.0003Z" fill="black"/>
      </svg>  
    </a>
  </div>

  <div class="flex flex-col justify-center items-center gap-8">
  
  <img class="object-center" src="./public/img/logo.svg" alt="">
  <p class="text-3xl font-medium mt-14 mb-8">Signup to Your Account</p>
  
      
  </div>

  <form class="flex flex-col justify-center items-center" id="signup-form">

    <div class="relative mb-6 w-11/12 ">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
        </svg>
      </div>
      <input type="text" id="signup-input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" name="username">
    </div>

    <div class="relative mb-6 w-11/12 ">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_2553)">
          <path d="M2.1875 8.375C2.1875 7.91087 2.37187 7.46575 2.70006 7.13756C3.02825 6.80937 3.47337 6.625 3.9375 6.625H10.0625C10.5266 6.625 10.9717 6.80937 11.2999 7.13756C11.6281 7.46575 11.8125 7.91087 11.8125 8.375V12.75C11.8125 13.2141 11.6281 13.6592 11.2999 13.9874C10.9717 14.3156 10.5266 14.5 10.0625 14.5H3.9375C3.47337 14.5 3.02825 14.3156 2.70006 13.9874C2.37187 13.6592 2.1875 13.2141 2.1875 12.75V8.375Z" fill="#6C757D"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.9375 4C3.9375 3.18777 4.26016 2.40882 4.83449 1.83449C5.40882 1.26016 6.18777 0.9375 7 0.9375C7.81223 0.9375 8.59118 1.26016 9.16551 1.83449C9.73984 2.40882 10.0625 3.18777 10.0625 4V6.625H9.1875V4C9.1875 3.41984 8.95703 2.86344 8.5468 2.4532C8.13656 2.04297 7.58016 1.8125 7 1.8125C6.41984 1.8125 5.86344 2.04297 5.4532 2.4532C5.04297 2.86344 4.8125 3.41984 4.8125 4V6.625H3.9375V4Z" fill="#6C757D"/>
          </g>
          <defs>
          <clipPath id="clip0_1_2553">
          <rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
          </clipPath>
          </defs>
          </svg>
          
      </div>
      <input type="password" id="signup-password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" name="password">

      <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
          <button type="button" class="hidden" id="signup-hide-password"> 
         <svg class="h-6 text-gray-700" fill="none" @click="show = !show"
  :class="{'hidden': !show, 'block':show }" xmlns="http://www.w3.org/2000/svg"
  viewbox="0 0 576 512">
  <path fill="currentColor"
    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
  </path>
</svg>
          </button>

          <button type="form" class="" id="signup-show-password">
  <svg class="h-6 text-gray-700" fill="none" @click="show = !show"
  :class="{'block': !show, 'hidden':show }" xmlns="http://www.w3.org/2000/svg"
  viewbox="0 0 640 512">
  <path fill="currentColor"
    d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
  </path>
</svg>
          </button>


      </div>

    </div>

    <button onClick="navigate('/login')" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Have a account? Login</button>

    <div class="p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-100 hidden" role="alert" id="signup-form-error"></div>

    <div class="p-4 mt-4 text-sm text-green-800 rounded-lg bg-green-100 hidden" role="alert" id="signup-form-success"></div>

    <button type="submit" class="cursor-pointer fixed bottom-2 left-4 z-20 w-11/12 text-white bg-[#141414] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-3xl text-sm px-5 py-2.5 text-center flex items-center justify-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
      Sign in
    </button>


  </form>
  
</div>
  `
}

export const signUpPageFunc = () => {
  const form = <HTMLFormElement> document.getElementById('signup-form');
  const errorAlert = <HTMLDivElement> document.getElementById('signup-form-error');
  const successAlert = <HTMLDivElement> document.getElementById('signup-form-success');
  const showPassword = <HTMLButtonElement> document.getElementById('signup-show-password');
  const hidePassword = <HTMLButtonElement>  document.getElementById('signup-hide-password');
  const password = <HTMLInputElement> document.getElementById('signup-password');

  type DataType = {
    username: string;
    password: string;
  }
  const data:DataType = {username: '', password: ''};

form.addEventListener('input' , (ev) => {
  const target = <HTMLInputElement> ev.target;
  data[(target.name) as keyof DataType] = target.value;
  errorAlert.classList.add('hidden');
  successAlert.classList.add('hidden');
});

form.addEventListener('submit', async (ev) => {
  ev.preventDefault();
try {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:3000/auth/signup',
    data,
  })
  window.sessionStorage.setItem('token' , response.data.token);
  successAlert.innerText = 'Your account created successfully, Now you can Login';
  successAlert.classList.remove('hidden');
} catch (error) {
const html = errorHandler(error);
errorAlert.classList.remove('hidden');
errorAlert.innerHTML = html;
}
});

showPassword.addEventListener('click' , (ev)=>{
  ev.preventDefault();
  password.type = 'text';
  showPassword.classList.add('hidden');
  hidePassword.classList.remove('hidden')
});

hidePassword.addEventListener('click' , (ev)=>{
  ev.preventDefault();
  password.type = 'password';
  showPassword.classList.remove('hidden');
  hidePassword.classList.add('hidden')
});

}