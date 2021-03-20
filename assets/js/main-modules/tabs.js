import $ from 'jquery';

export class Tabs {
  constructor() {
    this.tabsWrapper = 'data-tabs-wrapper';
    this.tabsItem = '[data-tabs]';
    this.tabsArrow = '[data-tabs-arrow]';
    this.tabsView = '[data-tabs-view]';
    this.activeCount = document.querySelector('[' + this.tabsWrapper + ']') ? document.querySelector('[' + this.tabsWrapper + ']').getAttribute(this.tabsWrapper) : 0;
    this.eventListeners()
  }

  eventListeners() {
    const tabs = document.querySelectorAll(this.tabsItem);
    const tabsContent = document.querySelectorAll(this.tabsView);
    const tabsArrow = document.querySelector(this.tabsArrow);

    if(!tabs[0] && !tabsContent[0] && !tabsArrow){
      return
    }

    this.init(tabs, tabsContent);

    tabs.forEach((el, index) => {
      el.addEventListener('click', (e) => {
          e.preventDefault();
          this.hideTabs(tabs, tabsContent);
          this.activeCount = index;
          this.init(tabs, tabsContent);
          this.toggle(e.target.closest('[' + this.tabsWrapper + ']')); 
      });
      
    });

    tabsArrow.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggle(tabsArrow.closest('[' + this.tabsWrapper + ']'));
    });

    document.addEventListener('click', (e) => {
      if(!e.target.closest('[' + this.tabsWrapper + ']')){
        document.querySelector('[' + this.tabsWrapper + ']').classList.remove('is-active');
      }
    });
  }

  init(tabsItems, contentView) {
    tabsItems[this.activeCount].classList.add('is-active');
    contentView[this.activeCount].classList.add('is-active');
  }

  hideTabs(tabsItems, contentView) {
    tabsItems[this.activeCount].classList.remove('is-active');
    contentView[this.activeCount].classList.remove('is-active');
  }

  toggle(tabsWrapper) {
    tabsWrapper.classList.toggle('is-active');
  }
}

 
