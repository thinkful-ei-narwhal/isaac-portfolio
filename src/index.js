import $ from 'jquery';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import './css/style.css';

import nav from './scripts/Navbar';
import store from './scripts/store';
import header from './scripts/Header';
import main from './scripts/Main';
import aboutPage from './scripts/About';
import footer from './scripts/Footer';

function renderPage() {
	nav.renderNav();

	if (store.currentPage === 'home') {
		header.renderHeader();
		main.renderMain();
		footer.renderFooter();
	}

	if (store.currentPage === 'about') {
		aboutPage.renderAbout();
		footer.renderFooter();
	}
}

function render() {
	renderPage();
	nav.handleNav(renderPage);
}

$(render);
