import $ from 'jquery';

export class GlobalSlider {
  constructor() { 
    this.slick = $('[data-slick-global]');
    this.eventListeners()
  }

  eventListeners() {
    if(this.slick.length <= 0) {
      return
    }

    if (!this.slick.hasClass('slick-initialized')) {
      this.slick.slick();
    } 
  }
}
