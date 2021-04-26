let sliderVal = document.querySelector("#value");
let price = document.querySelector("#price");
let pageviews = document.querySelector("#pageviews");
let monthYearOp = document.querySelector("#monthYearOp");
let discount = document.querySelector(".discount");
let switcherContainer = document.querySelector("#switcherContainer");
let checkedValue = document.querySelector('.monthlyYearly');
let switchBtn = document.querySelector('.switcher');
let monthly = document.querySelector('#monthly');
let yearly = document.querySelector('#yearly');


const prices = {
  p1m: 8,
  p1y: 72,
  p2m: 12,
  p2y: 108,
  p3m: 16,
  p3y: 144,
  p4m: 24,
  p4y: 216,
  p5m: 36,
  p5y: 324
}

sliderVal.addEventListener("input", () => {
   if(sliderVal.value<=20){
    checkedValue.checked ? price.innerText =`$${prices.p1y}.00` : price.innerText =`$${prices.p1m}.00`;
    pageviews.innerText = "10K ";
   }else if(sliderVal.value>20 && sliderVal.value<=40){
    checkedValue.checked ? price.innerText =`$${prices.p2y}.00` : price.innerText =`$${prices.p2m}.00`;
    pageviews.innerText = "50K ";
   }else if(sliderVal.value>40 && sliderVal.value<=60){
    checkedValue.checked ? price.innerText =`$${prices.p3y}.00` : price.innerText =`$${prices.p3m}.00`;
    pageviews.innerText = "100K ";
   }else if(sliderVal.value>60 && sliderVal.value<=80){
    checkedValue.checked ? price.innerText =`$${prices.p4y}.00` : price.innerText =`$${prices.p4m}.00`;
    pageviews.innerText = "500K ";
   }else if(sliderVal.value>80 && sliderVal.value<=100){
    checkedValue.checked ? price.innerText =`$${prices.p5y}.00` : price.innerText =`$${prices.p5m}.00`;
    pageviews.innerText = "1M ";
  }
});

checkedValue.addEventListener("change", () => {
  sliderVal.value = 50;
  if(checkedValue.checked){
    discount.classList.add("toggleDiscount");
    switchBtn.classList.add("switchBtn");
    monthly.classList.add("monthlyChecked");
    yearly.classList.add("yearlyChecked");
    monthYearOp.innerText = " /year";
    price.innerText =`$${prices.p3y}.00`;
  }else{
    discount.classList.remove("toggleDiscount");
    switchBtn.classList.remove("switchBtn");
    monthly.classList.remove("monthlyChecked");
    yearly.classList.remove("yearlyChecked");
    monthYearOp.innerText = " /month";
    price.innerText =`$${prices.p3m}.00`;
  }
})



