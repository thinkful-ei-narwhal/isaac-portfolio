import $ from 'jquery';

import store from './store';

const aboutHeader = () => {
	const coreTechnologies = store.coreTechnologies.map((tech, index) => {
		return ` <span class="heading-3" key=${index}>${tech}|</span>`;
	});

	return `
  <section class="top ">
  <div class="row">
    <div  class="col-10 col-sm-8 col-md-7">
      <img
        class="authorPics"
        src="./assets/img/isaac.jpg"
        alt="Isaac Elesia's"
      />
    </div>
    <div  class="aside-1 col-10 col-sm-3 col-md-4">
      <h2 class="heading-1">
      Core Technologies
      </h2>
      ${coreTechnologies}
    </div>
  </div>
</section>`;
};

const aboutMain = () => {
	return `
<section class="bottom u-margin-bottom-big">
<div class="row">
  <div  class="col-10 col-md-7">
    <h2 class="project-heading">Professional Skills Summary</h2>
    <p>
      Engaging and innovative technology professional with expertise
      in multiple programming languages. Committed to developing highly functional yet easy-to-use and
      visually appealing applications for consumers and to support
      business operations.
    </p>
    <p>
      Leverage excellent communication abilities with exceptional
      interpersonal skills to deliver customer service, technical
      support, and user training. Demonstrate strong time management
      and organizational skills with proven ability to liaise with key
      stakeholders and team members.
    </p>
  </div>
  <div  class="aside-2 col-10 col-sm-10 col-md-4">
    <h2 class="aside-heading">Basic Skills Highlight</h2>
    <dl>
      <dt>Programming:</dt>
      <dd>
        Skilled in utilization of multiple programming languages and
        ancillary tools to combine design with programming to create
        applications and websites with visual appeal and technical
        functionality.
      </dd>

      <dt>Issue Resolution:</dt>
      <dd>
        Proficient in troubleshooting, analyzing issues, and
        developing innovative yet pragmatic resolutions to restore and
        improve functionality, security, and performance.
      </dd>

      <dt>Teamwork:</dt>
      <dd>
        Talented IT professional with proven ability to perform duties
        independently without direct supervision yet also able to
        collaborate cross-functionally, facilitate user training, and
        contribute as a member of project teams.
      </dd>

      <dt>Key Strengths:</dt>
      <dd>
        Demonstrate excellent organizational and time management
        skills to complete multiple assigned and ad hoc tasks
        simultaneously. Leverage strong communication and
        interpersonal skills to interface with customers and users to
        deliver optimal service and support promptly and courteously.
      </dd>
    </dl>
  </div>
</div>
</section>`;
};

const renderAbout = () => {
	$('header').removeClass('header');
	$('header').html(aboutHeader());
	$('main').addClass('aboutPage');
	$('main').html(aboutMain());
};

export default {
	renderAbout,
};
