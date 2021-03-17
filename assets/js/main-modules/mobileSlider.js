import $ from 'jquery';

export class MobileSlider {
  constructor() { 
    this.slick = $('[data-slick-mobail]');
    this.eventListeners()
  }

  eventListeners() {
    if(this.slick.length <= 0) {
      return
    }

    if ($(window).width() < 768 && !this.slick.hasClass('slick-initialized')) {
      this.slick.slick();
    } 
  }
}
