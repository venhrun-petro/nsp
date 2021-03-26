import $ from "jquery";

export class ResizeGridItems {
  constructor() {
    this.grid = '[data-grid]';
    this.gridItem = '[data-grid-item]';
    this.gridContent = '[data-grid-content]';
    this.eventListeners();
  }

  eventListeners() {
    if ($(window).width() < 768) {
      return
    }

    window.onload = this.resizeAllGridItems();
    window.addEventListener("resize", this.resizeAllGridItems);
  }

  resizeGridItem(item){
    let grid = document.querySelectorAll(this.grid)[0];
    let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    let rowSpan = Math.ceil((item.querySelector(this.gridContent).getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
      item.style.gridRowEnd = 'span '+rowSpan;
  }
  
  resizeAllGridItems(){
    let allItems = document.querySelectorAll(this.gridItem);

    for(let x=0;x<allItems.length;x++){
      this.resizeGridItem(allItems[x]);
    }
  }
}
