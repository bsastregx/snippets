/*************************
 MAIN HEADER
*************************/
class MainHeader {
  constructor() {
    this.mainHeader = document.querySelector(".main-header");
    this.items = this.mainHeader.querySelectorAll(".main-header__menu-item");
    this.indicatorActive = false;
    this.indicator = null;
    this.init();
  }
  init() {
    this.createIndicator();
    this.detectItemsMouseEnter();
    this.detectItemsMouseLeave();
  }
  createIndicator() {
    this.indicator = document.createElement("span");
    this.indicator.classList.add("main-header__indicator");
    this.indicator.style;
    this.mainHeader.appendChild(this.indicator);
    //styles on _main-header.scss
  }
  detectItemsMouseEnter() {
    this.items.forEach((item) => {
      item.addEventListener("mouseenter", this.detectItemMouseEnter.bind(this));
    });
  }
  detectItemsMouseLeave() {
    this.items.forEach((item) => {
      item.addEventListener("mouseleave", this.detectItemMouseLeave.bind(this));
    });
  }
  detectItemMouseEnter(e) {
    this.indicator.classList.remove("main-header__indicator--hidden");
    const itemContainer = e.target.querySelector(
      ".main-header__menu-item-container"
    );
    const mainHeaderLeftPosition = this.mainHeader.getBoundingClientRect().left;
    const itemLeftPosition = itemContainer.getBoundingClientRect().left;
    const itemWidth = itemContainer.offsetWidth;
    this.indicator.style.width = itemWidth + "px";
    this.indicator.style.left =
      itemLeftPosition - mainHeaderLeftPosition + "px";
  }
  detectItemMouseLeave(e) {
    if (!e.toElement.classList.contains("main-header__menu-item")) {
      this.indicator.classList.add("main-header__indicator--hidden");
    }
  }
}
const mainHeader = new MainHeader();
