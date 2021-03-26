import $ from 'jquery'

export class Quantity {
  constructor() {
    this.dataQuantitySelect = '[data-quantity-field-select]';
    this.dataQuantitySelectWrap = '[data-quantity-field-select-wrap]';
    this.dataQuantityOptions = '[data-quantity-field-options]';
    this.dataQuantityBtn = '[data-quantity-field-btn]';
    this.dataQuantityInput = '[data-quantity-field-input]';
    this.dataQuantityField = '[data-quantity-field]';
    this.eventListeners()
  }

  eventListeners() {
    $(document).on('click', this.dataQuantityBtn, (e) => {
      this.change(e.currentTarget);
    })

    $(document).on('change', this.dataQuantityInput, (e) => {
      this.calculateMinmax(e.currentTarget);
    })
  }

  change(buttonElement) {
    const input = buttonElement.closest(this.dataQuantityField).querySelector(this.dataQuantityInput);
    if (!input) {
      return null;
    }

    const direction = buttonElement.getAttribute('data-quantity-field-btn');
    const value = (direction === 'decrement') ? Number(input.value) - 1 : Number(input.value) + 1;
    $(input).val(value);
    $(input).trigger('change');
  }

  calculateMinmax(inputElement) {
    const minValue = inputElement.getAttribute('min') || 1;
    const maxValue = inputElement.getAttribute('max') || Infinity;
    const decrementBtn = inputElement.closest(this.dataQuantityField).querySelector('[data-quantity-field-btn="decrement"]');
    const incrementBtn = inputElement.closest(this.dataQuantityField).querySelector('[data-quantity-field-btn="increment"]');
    decrementBtn.removeAttribute('disabled');
    incrementBtn.removeAttribute('disabled');

    if(Number(inputElement.value) <= minValue) {
      inputElement.setAttribute('value', minValue);
      decrementBtn.setAttribute('disabled', '');
    }

    if(Number(inputElement.value) >= maxValue) {
      console.log('1')
      inputElement.setAttribute('value', maxValue);
      incrementBtn.setAttribute('disabled', '');
    }
  }
}
