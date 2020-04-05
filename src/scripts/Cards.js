const limitDescription = (description, limit = 100) => {
	const newDescription = [];
	if (description.length > limit) {
		description.split(' ').reduce((acc, cur) => {
			if (acc + cur.length <= limit) {
				newDescription.push(cur);
			}
			return acc + cur.length;
		}, 0);

		// return the result
		return `${newDescription.join(' ')} ...`;
	}
	return description;
};

const card = (app) => {
	return `<div class="card ">
  <div class="card--side card--side--front">
    <div
      class="card--picture"
      style="
      background-image: linear-gradient(to right bottom, #7b9ba6,  #cdd6d5), url('${
				app.img
			}')
      "
    >
     
    </div>
    <h4 class="card--heading">
      <span class="card--heading-span card--heading-span--1">
        ${app.name}
      </span>
    </h4>
    <div class="card--details">
      <p class="paragraph">
        ${limitDescription(app.description)}
      </p>
    </div>
  </div>
  <div class="card--side card--side--back card--side--back-1">
    <div class="card--cta repo">
      <a
        href=${app.gitHub}
        target="_blank"
        class="btn btn--white"
      >
        GitHub Repo
      </a>
    </div>

    <div class="card--cta demo">
      <a
        href=${app.url}
        target="_blank"
        class="btn btn--white"
      >
        view Demo
      </a>
    </div>
  </div>
</div>`;
};

const renderCard = (app) => {
	return `<div class="col-8 col-sm-7 col-md-4 col-lg-3">
  ${card(app)}
 </div>`;
};

export default {
	renderCard,
};
