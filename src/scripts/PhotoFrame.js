export default (app) => {
	const { name, img, url } = app;

	return ` 
     <div  class="u-margin-bottom-big col-6 col-sm-4 col-md-3 col-lg-3 ">
        <a href=${url} target="_blank" >
          <img
            src=${img}
            alt=${name}
            class="photo-box"
           
          />
        </a>
        <h4 class="title">${name}</h4>
      </div>`;
};
