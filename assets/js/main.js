import $ from "jquery";
import 'slick-carousel';

import {ButtonToggle} from './main-modules/buttonToggle';
import {NavItemsVisible} from './main-modules/navItemsVisible';
import {MobileSlider} from './main-modules/mobileSlider';
import {GlobalSlider} from './main-modules/globalSlider';

new ButtonToggle('[data-search-btn]', '[data-search]');
new ButtonToggle('[hamburger]', '[data-nav-wrapper]');
new ButtonToggle('[hamburger]', 'body', 'no-scroll-sm');
new ButtonToggle('[hamburger]', '[hamburger]', 'hamburger--hidden');
new ButtonToggle('[hamburger]', '[hamburger-close]');
new ButtonToggle('[hamburger-close]', '[data-nav-wrapper]');
new ButtonToggle('[hamburger-close]', '[hamburger]', 'hamburger--hidden');
new ButtonToggle('[hamburger-close]', '[hamburger-close]');
new ButtonToggle('[hamburger-close]', 'body', 'no-scroll-sm');
new NavItemsVisible();
new MobileSlider();
new GlobalSlider();