import $ from 'jquery';

import store from './store';
import photoFrame from './PhotoFrame';

const main = () => {
	return store.apps.map((app) => {
		return photoFrame(app);
	});
};

const renderMain = () => {
	const content = `
  <section class="section-projects">
        <div class="u-center-text u-margin-bottom-big u-margin-offset-small">
          <h2 class="project-heading">My Projects</h2>
        </div>

        <div class="row">${main()}</div>
      </section>`;

	$('main').html(content);
};

export default {
	renderMain,
};
