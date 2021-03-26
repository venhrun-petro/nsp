import $ from 'jquery';

export class NavItemsVisible {
  constructor() {
    this.dataNavArrow = '[data-nav-arrow]';
    this.dataNavLink = '[data-nav-link]';
    this.eventListeners()
  }

  eventListeners() {
    $(document.body).on('click', `${'[data-nav-link]'}` ,function(e) {
      if(e.target == this.querySelector('[data-nav-arrow]')){
        e.stopPropagation();
        e.preventDefault();
      }
      
      e.currentTarget.closest('[data-nav-items]').classList.toggle('active');
      e.currentTarget.closest('[data-nav-items]').querySelector('[data-nav-children]').classList.toggle('active');
    });
  }
}
