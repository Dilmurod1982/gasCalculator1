const btnEl = document.getElementById("btn");
const divReport = document.getElementById("divreport");

const peopleEl = document.getElementById("people");
const plitaEl = document.getElementById("plita");
const titanEl = document.getElementById("titan");
const yilkiEl = document.getElementById("yilki");
const sigirEl = document.getElementById("sigir");
const chochkaEl = document.getElementById("chochka");
const qoyEl = document.getElementById("qoy");
const hajmEl = document.getElementById("hajm");

const odamSoniEl = document.getElementById("os");
const ovqatkubEl = document.getElementById("ovqatkub");

const ovqatsomEl = document.getElementById("ovqatsom");
const isuvkubEl = document.getElementById("isuvkub");
const isuvsomEl = document.getElementById("isuvsom");
const hayvonkubEl = document.getElementById("hayvonkub");
const hayvonsomEl = document.getElementById("hayvonsom");
const yilkikubEl = document.getElementById("yilkikub");
const yilkisomEl = document.getElementById("yilkisom");
const sigirkubEl = document.getElementById("sigirkub");
const sigirsomEl = document.getElementById("sigirsom");
const chochkakubEl = document.getElementById("chochkakub");
const chochkasomEl = document.getElementById("chochkasom");
const qoykubEl = document.getElementById("qoykub");
const qoysomEl = document.getElementById("qoysom");
const isitkubEl = document.getElementById("isitkub");
const isitsomEl = document.getElementById("isitsom");
const birisitkubEl = document.getElementById("birisitkub");
const birisitsomEl = document.getElementById("birisitsom");
const ikkiisitkubEl = document.getElementById("ikkiisitkub");
const ikkiisitsomEl = document.getElementById("ikkiisitsom");
const uyHajmiKubEl = document.getElementById("uyhajmikub");
const coefTextEl = document.getElementById("coef2text");
const coefDivEl = document.getElementById("coef2div");
const jamiKubEl = document.getElementById("jamikub");
const jamiSomEl = document.getElementById("jamisom");

const norma11 = 11;
const norma15 = 15;
const norma16 = 16;
const isitish = 5.76;
const normaYilki = 5.6;
const normaSigir = 23.7;
const normaChochka = 12.5;
const normaQoy = 2.2;
let normahajm = peopleEl.value * 43;
const normaUyHajm = 43;

const priceOvqat = 1500;
const priceIsitish = 1100;

let ovqatResult = 0;
let issiqsuvResult = 0;
let hayvonResult = 0;
let yilkiResult = 0;
let sigirResult = 0;
let chochkaResult = 0;
let qoyResult = 0;
let isitishResult = 0;
let isitishBirResult = 0;
let isitishikkiResult = 0;

function ovqatPishir() {
  if (titanEl.value > 0) {
    ovqatsomEl.textContent = Math.round(
      +peopleEl.value * norma11 * priceOvqat * +plitaEl.value
    );
    ovqatkubEl.textContent = +peopleEl.value * norma11 * +plitaEl.value;
    return ovqatsomEl, ovqatkubEl;
  } else {
    ovqatsomEl.textContent = Math.round(
      +peopleEl.value * norma15 * priceOvqat * +plitaEl.value
    );
    ovqatkubEl.textContent = +peopleEl.value * norma15 * +plitaEl.value;
  }
  return ovqatsomEl, ovqatkubEl;
}

function issiqSuv() {
  if (titanEl.value > 0) {
    isuvsomEl.textContent = Math.round(
      +peopleEl.value * norma16 * priceOvqat * +titanEl.value
    );
    isuvkubEl.textContent = +peopleEl.value * norma16 * +titanEl.value;

    return isuvsomEl, isuvkubEl;
  }
}

function hayvon() {
  let qoykub;
  if (
    yilkiEl.value > 0 ||
    sigirEl.value > 0 ||
    chochkaEl.value > 0 ||
    qoyEl.value > 0
  ) {
    yilkisomEl.textContent = Math.round(
      +yilkiEl.value * normaYilki * priceOvqat
    );
    yilkikubEl.textContent = +yilkiEl.value * normaYilki;
    sigirsomEl.textContent = Math.round(
      +sigirEl.value * normaSigir * priceOvqat
    );
    sigirkubEl.textContent = +sigirEl.value * normaSigir;
    chochkasomEl.textContent = Math.round(
      +chochkaEl.value * normaChochka * priceOvqat
    );
    chochkakubEl.textContent = +chochkaEl.value * normaChochka;
    qoysomEl.textContent = Math.round(+qoyEl.value * normaQoy * priceOvqat);
    qoykubEl.textContent = +qoyEl.value * normaQoy;
    hayvonsomEl.textContent =
      +yilkisomEl.textContent +
      +sigirsomEl.textContent +
      +chochkasomEl.textContent +
      +qoysomEl.textContent;

    hayvonkubEl.textContent = Math.round(
      +yilkikubEl.textContent +
        +sigirkubEl.textContent +
        +chochkakubEl.textContent +
        +qoykubEl.textContent
    );
  }

  return (
    yilkisomEl,
    yilkikubEl,
    sigirsomEl,
    sigirkubEl,
    chochkasomEl,
    chochkakubEl,
    qoysomEl,
    qoykubEl,
    hayvonsomEl,
    hayvonkubEl
  );
}

function uyisitish() {
  if (+hajmEl.value > +peopleEl.value * 43) {
    birisitsomEl.textContent = Math.round(
      +peopleEl.value * 43 * isitish * priceIsitish
    );
    birisitkubEl.textContent = Math.round(
      +peopleEl.value * normaUyHajm * isitish
    );

    ikkiisitsomEl.textContent = Math.round(
      (+hajmEl.value - peopleEl.value * 43) * isitish * priceIsitish * 1.2
    );
    ikkiisitkubEl.textContent = Math.round(
      (+hajmEl.value - peopleEl.value * 43) * isitish
    );
    isitsomEl.textContent = Math.round(
      +birisitsomEl.textContent + +ikkiisitsomEl.textContent
    );
    isitkubEl.textContent =
      +birisitkubEl.textContent + +ikkiisitkubEl.textContent;
    coefDivEl.classList.remove("hidden");
    coefTextEl.classList.remove("hidden");
    return (
      birisitkubEl,
      birisitsomEl,
      ikkiisitkubEl,
      ikkiisitsomEl,
      isitkubEl,
      isitsomEl,
      normahajm
    );
  } else {
    birisitsomEl.textContent = Math.round(
      +hajmEl.value * isitish * priceIsitish
    );
    birisitkubEl.textContent = Math.round(+hajmEl.value * isitish);
    isitkubEl.textContent = +birisitkubEl.textContent;
    isitsomEl.textContent = +birisitsomEl.textContent;
    coefDivEl.classList.add("hidden");
    coefTextEl.classList.add("hidden");
    return birisitkubEl, birisitsomEl, isitkubEl, isitsomEl;
  }
}

function jami() {
  jamiSomEl.textContent = Math.round(
    +ovqatsomEl.textContent +
      +isuvsomEl.textContent +
      +hayvonsomEl.textContent +
      +isitsomEl.textContent
  );
  jamiKubEl.textContent =
    +ovqatkubEl.textContent +
    +isuvkubEl.textContent +
    +hayvonkubEl.textContent +
    +isitkubEl.textContent;
}

btnEl.addEventListener("click", () => {
  divReport.classList.remove("hidden");
  ovqatPishir(), issiqSuv(), hayvon(), uyisitish(), jami();
  odamSoniEl.textContent = peopleEl.value;
  uyHajmiKubEl.textContent = hajmEl.value;
});
