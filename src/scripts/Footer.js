import $ from 'jquery';

import contact from './Contact';

const footer = () => {
	return `
  <div cass= 'row'>
  <div class = 'col-12'>
    <div class="u-center-text ">
      <h2 class="project-heading">Get In Touch</h2>
      <p class="paragraph-2">
        Email me at${' '}
        <a href="mailto: isaacelesia@gmail.com">isaacelesia@gmail.com</a>
        <br />
        OR Call 214-549-8622
      </p>
      <div class='icons'>
        <a href='https://github.com/IsaacElesia?tab=repositories' target='_blank'><i class="fab fa-github icon get-in-touch  gitHub" ></i>
        </a>
        <a href='https://linkedin.com/in/isaac-elesia-436b2461' target='_blank'><i class="fab fa-linkedin-in icon get-in-touch linkedin"></i>
        </a>
        </div>
    </div>
  </div>
</div>

  <section class="contact u-margin-offset-2 ">
    <div class = 'row'>
      ${contact.renderContactForm()}
    </div>
    <div class="footer footer-text u-margin-top ">
      <p>Powered by Isaac @ 2020</p>

      <div class='icons'>
        <a href='https://github.com/IsaacElesia?tab=repositories' target='_blank'><i class="fab fa-github icon  gitHub" ></i>
        </a>
        <a href='https://linkedin.com/in/isaac-elesia-436b2461' target='_blank'><i class="fab fa-linkedin-in icon linkedin"></i>
        </a>
        </div>
    </div>
  </section>`;
};

const renderFooter = () => {
	$('footer').html(footer());
};

export default {
	renderFooter,
};
