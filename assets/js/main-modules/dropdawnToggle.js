import $ from "jquery";

export class DropdawnToggle {
  constructor(addClass) {
    this.dropdawn = '[data-dropdawn]';
    this.show = '[data-show]';
    this.class = addClass ? addClass : 'is-active';
    this.eventListeners();
  }

  eventListeners() {
    $(document).on('click', `${this.dropdawn}`, (e) => {
      e.target.classList.toggle(this.class);
      e.target.nextElementSibling.classList.toggle(this.class);
    })
  } 
}
