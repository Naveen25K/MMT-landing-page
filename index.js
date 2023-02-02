"use strict";

// flight section js

const showFlights = () => {
  const hide_hr = document.getElementById("hide_hr");
  const flight_hide = document.getElementById("flight_hide");
  const view_more = document.getElementById("view_more");
  if (view_more.innerHTML === "view more") {
    flight_hide.style.display = "block";
    view_more.innerHTML = "view less";
    hide_hr.style.display = "block";
  } else {
    flight_hide.style.display = "none";
    view_more.innerHTML = "view more";
  }
};
view_more.addEventListener("click", showFlights);

// Hotels section js

const hotelObj = [
  {
    img: "src/maldives.jpg",
    name: "Furaveri IslandResort & Spa",
    price: "AED 200",
    day: "Monday",
  },
  {
    img: "src/maldives2.jpg",
    name: "Furaveri IslandResort & Spa",
    price: "AED 200",
    day: "Tuesday",
  },
  {
    img: "src/maldives3.jpg",
    name: "Furaveri IslandResort & Spa",
    price: "AED 200",
    day: "Wednesday",
  },
  {
    img: "src/maldives4.jpg",
    name: "Furaveri IslandResort & Spa",
    price: "AED 200",
    day: "Thursday",
  },
  {
    img: "src/maldives5.jpg",
    name: "Furaveri IslandResort & Spa",
    price: "AED 200",
    day: "Friday",
  },
  {
    img: "src/maldives6.jpg",
    name: "Furaveri IslandResort & Spa",
    price: "AED 200",
    day: "saturday",
  },
  {
    img: "src/maldives7.jpg",
    name: "Furaveri IslandResort & Spa",
    price: "AED 200",
    day: "Sunday",
  },
];

{
}

const loadHotels = () => {
  const carousel = document.getElementById("carousel");
  const finalArr = [];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const day = weekday[d.getDay()];
  console.log(day);

  const sortByDay = hotelObj.filter((val) => val.day === day);
  console.log(sortByDay);
  const sortOther = hotelObj.filter((val) => val.day !== day.toLowerCase());
  finalArr.push(...sortByDay, ...sortOther);
  console.log(finalArr);
  for (let i = 0; i < finalArr.length; i++) {
    const span = document.createElement("span");
    span.innerHTML = `<div class="hotel">
    <img src=${finalArr[i].img} />
    <h2 class="custom2">${finalArr[i].day}</h2>
    <div class="hotel_name">
      <h2>
        ${finalArr[i].name}
      </h2>
      <img src="src/star.png" class="star" />
    </div>
    <p class="meal_info">Transfers and meals included</p>
    <div class="hotel_price">
      <div>
        <p class="custom2">Starting From</p>
        <p class="custom1">${finalArr[i].price}</p>
      </div>
      <button class="primary">book now</button>
    </div>
  </div>`;
    carousel.appendChild(span);
  }
};
loadHotels();

const hotel_slider = document.getElementById("carousel");
const prev_btn = document.getElementById("prev_btn");
const next_btn = document.getElementById("next_btn");

prev_btn.addEventListener("click", () => {
  hotel_slider.scrollLeft -= 500;
});
next_btn.addEventListener("click", () => {
  hotel_slider.scrollLeft += 500;
});

// general function for visa and covid section //

const functionWrapper = (list, button) => {
  if (button.innerHTML === "view more") {
    list.style.display = "block";
    button.innerHTML = "view less";
  } else {
    list.style.display = "none";
    button.innerHTML = "view more";
  }
};

// Visa information section js

const showVisaInfo = () => {
  const visa_listing = document.getElementById("visa_listing");
  const view_more_visa = document.getElementById("view_more_visa");
  functionWrapper(visa_listing, view_more_visa);
};
view_more_visa.addEventListener("click", showVisaInfo);

// covid update section js

const showcovidInfo = () => {
  const covid_listing = document.getElementById("covid_listing");
  const view_more_covid = document.getElementById("view_more_covid");
  functionWrapper(covid_listing, view_more_covid);
};
view_more_covid.addEventListener("click", showcovidInfo);
