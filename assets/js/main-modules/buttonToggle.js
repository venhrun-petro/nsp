import $ from "jquery";

export class ButtonToggle {
  constructor(btn, element, addClass) {
    this.button = btn;
    this.element = element;
    this.class = addClass ? addClass : 'active';
    this.eventListeners();
  }

  eventListeners() {
    $(document).on('click', `${this.button}`, () => {
      $(this.element).toggleClass(this.class);
    })
    
  } 
}
