export const onBoarding = () => {
return `
<div id="indicators-carousel" class="relative w-[430px] m-0 p-0 mx-auto" data-carousel="static">
<!-- Carousel wrapper -->
<div class="relative overflow-hidden h-[700px]">
  <!-- Item 1 -->
  <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
    <img
    src="./public/img/page1-wallpaper.svg"
      class="absolute block w-full h-[602px] -translate-x-1/2 -translate-y-1/2 top-[40%] left-1/2"
      alt="..."
    />
    <h1
      class="absolute -bottom-20 w-full text-center my-20 p-4 font-semibold text-3xl"
    >
      We provide high quality products just for you
    </h1>
  </div>
  <!-- Item 2 -->
  <div class="hidden duration-700 ease-in-out" data-carousel-item>
    <img
    src="./public/img/page2-wallpaper.svg"
      class="absolute block w-full h-[602px] -translate-x-1/2 -translate-y-1/2 top-[40%] left-1/2"
      alt="..."
    />
    <h1
      class="absolute -bottom-20 w-full text-center my-20 p-4 font-semibold text-3xl"
    >
      Your satisfaction is our number one periority
    </h1>
  </div>
  <!-- Item 3 -->
  <div class="hidden duration-700 ease-in-out nt" data-carousel-item>
    <img
    src="./public/img/page3-wallpaper.svg"
      class="absolute block w-full h-[602px] -translate-x-1/2 -translate-y-1/2 top-[40%] left-1/2"
      alt="..."
    />
    <h1
      class="absolute -bottom-28 w-full text-center my-24 p-4 font-semibold text-3xl"
    >
      Let’s fulfill your fashion needs with shoearight now!
    </h1>
  </div>
</div>
<!-- Slider indicators -->

<div
  class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse -bottom-28 left-1/2 p-10"
>
  <button
    type="button"
    class="active:bg-black h-[2px] hover:bg-slate-800 rounded-full w-8 bg-white dark:bg-gray-800"
    aria-current="true"
    aria-label="Slide 1"
    data-carousel-slide-to="0"
    style="background-color: black"
  ></button>


  <button
    type="button"
    class="active:bg-black h-[2px] hover:bg-slate-800 rounded-full w-8 bg-white dark:bg-gray-800"
    aria-current="false"
    aria-label="Slide 2"
    data-carousel-slide-to="1"
    style="background-color: gray"
  ></button>
  <button
    type="button"
    class="active:bg-black h-[2px] hover:bg-slate-800 rounded-full w-8 bg-white dark:bg-gray-800"
    aria-current="false"
    aria-label="Slide 3"
    data-carousel-slide-to="2"
    style="background-color: gray"
  ></button>
</div>

<button
  type="button"
  class="absolute z-30 flex -translate-x-1/2 rtl:space-x-reverse -bottom-44 left-1/2 w-[380px]"
  data-carousel-next
  id="nextBtn"
>
  <span
    class="inline-flex items-center justify-center w-full h-12 rounded-full bg-black"
    id="nextButton"
  >
    <span
      class="text-white whitespace-nowrap p-4 font-medium text-sm"
      id="nextButtonText"
      >Next</span
    >
  </span>
</button>

<!-- اضافه کردن دکمه "Get Started" -->
<button
  type="button"
  class="absolute z-30 flex -translate-x-1/2 rtl:space-x-reverse left-1/2 w-[380px] -bottom-44"
  id="getStartedBtn"
  style="display: none"
>
  <span
    class="inline-flex items-center justify-center w-full h-12 rounded-full bg-black"
    id="getStartedButton"
  >
    <span
      class="text-white whitespace-nowrap p-4 font-medium text-sm"
      id="getStartedButtonText"
      >Get Started</span
    >
  </span>
</button>
</div>`
}


document.addEventListener("DOMContentLoaded", function () {
  const carousel = <HTMLDivElement> document.getElementById("indicators-carousel");
  if (!carousel) return;
  const slides = Array.from(carousel.querySelectorAll("[data-carousel-item]"));
  const nextButton = document.getElementById("nextBtn");
  const getStartedButton = document.getElementById("getStartedBtn");
  const indicators = document.querySelectorAll("[data-carousel-slide-to]");

  let currentSlideIndex = 0;

  function showSlide(index:any) {
    slides.forEach((slide) => {
      slide.classList.add("hidden");
    });

    slides[index].classList.remove("hidden");
  }

  function updateButtonVisibility() {
    if (currentSlideIndex === 2) {
      if(!nextButton) return;
      nextButton.style.display = "none";
      if(!getStartedButton) return;
      getStartedButton.style.display = "block";
    } else {
      if(!nextButton) return;
      nextButton.style.display = "block";
      if(!getStartedButton) return;
      getStartedButton.style.display = "none";
    }
  }

  function updateIndicatorColor(index:number) {
    indicators.forEach((indicator, i) => {
      const button  = <HTMLButtonElement> indicator;
      if (i === index) {
        button.style.backgroundColor = "black";
      } else {
       button.style.backgroundColor = "gray"; // بازگرداندن به حالت اولیه
      }
    });
  }

  updateButtonVisibility();
  if(!nextButton) return;
  nextButton.addEventListener("click", function () {
    currentSlideIndex++;

    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    }

    showSlide(currentSlideIndex);
    updateButtonVisibility();
    updateIndicatorColor(currentSlideIndex);
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      currentSlideIndex = index;
      showSlide(currentSlideIndex);
      updateButtonVisibility();
      updateIndicatorColor(currentSlideIndex);
    });
  });

  if(!getStartedButton) return;
  getStartedButton.addEventListener("click", function () {
    window.navigate("/login");
  });
});
