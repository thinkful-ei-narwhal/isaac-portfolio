import $ from 'jquery';

import store from './store';

const nav = () => {
	return store.currentPage === 'home'
		? ` <div class="navAbout" >
  <a href='#' class="navAbout navLink">About</a>
</div>`
		: `<div class="navHome">
    <a href='#' class="home navHome navLink">
    Home
    </a>
  </div>
 `;
};

const handleNav = (renderPage) => {
	$('.navBar').on('click', '.navHome', (e) => {
		e.preventDefault();
		store.currentPage = 'home';
		renderPage();
	});

	$('.navBar').on('click', '.navAbout', (e) => {
		e.preventDefault();
		store.currentPage = 'about';
		renderPage();
	});
};

const renderNav = () => {
	$('nav').html(nav());
};

export default {
	renderNav,
	handleNav,
};
