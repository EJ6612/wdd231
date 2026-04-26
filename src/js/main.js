import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function parkInfoTemplate(info) {
  return `<img src="${info.images[0].url}" alt="Yellowstone Park" />
          <div class="hero-banner__content">
            <a href="#" class="hero-banner__title">${info.name}</a>
            <p class="hero-banner__subtitle">
                <span>${info.designation}</span>
                <span>${info.states}</span>
            </p>
          </div>`;
}

const hero = document.querySelector(".hero-banner");
hero.innerHTML = parkInfoTemplate(parkData);

