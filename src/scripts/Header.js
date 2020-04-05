import $ from 'jquery';
import store from './store';
import card from './Cards';

const apps = store.apps.map((app, index) => {
	if (index < 3) {
		return card.renderCard(app);
	}
});

const headerContent = () => {
	return ` 
  <div class="hero ">
      <div class="u-margin-offset-1">
        <h1 class="isaac-logo "> isaac elesia </h1>
        <h2 class="job-title ">Software Engineer</h2>
      </div>

      <div class="u-align-text-right u-line-height-small u-margin-offset-small">
        <h1 class="heading-2">
          <a class="anchor" href="mailto: isaacelesia@gmail.com">
            isaacelesia@gmail.com
          </a>
        </h1>
        <h4 class="heading-3">214-549-8622</h4>

        <div class='icons'>
        <a href='https://github.com/IsaacElesia?tab=repositories' target='_blank'><i class="fab fa-github icon gitHub" ></i>
        </a>
        <a href='https://linkedin.com/in/isaac-elesia-436b2461' target='_blank'><i class="fab fa-linkedin-in icon linkedin"></i>
        </a>
        </div>
      </div>

      <div class="u-center-text u-margin-bottom-medium">
        <h2 class="heading-1">Recent Projects</h2>
      </div>

      <div class='row'>${apps}</div>
    </div>`;
};

const renderHeader = () => {
	$('header').addClass('header');
	$('header').html(headerContent());
};

export default {
	renderHeader,
};
