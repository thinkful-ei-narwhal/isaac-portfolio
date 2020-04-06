const contactForm = () => {
	return `
  <Form
  action='#'
  noValidate
  validated={validated}
  class='contact-form needs-validation'
>
  <div class='form-row'>
    <div class='col'>
      <label for='First-name'>
        <h2 class='heading-2'>First name</h2>
      </label>
      <input
        type='text'
        required
        id='First-name'
        class='text form-control'
        name='firstName'
        placeholder='First name'
      />
      <div class='invalid-feedback'>Please provide your first name.</div>
    </div>
    <div class='col'>
      <label for='Last-name'>
        <h2 class='heading-2'>Last name</h2>
      </label>
      <input
        required
        id='Last-name'
        class='text form-control'
        name='lastName'
        placeholder='Last name'
      />
      <div class='invalid-feedback'>Please provide your last name.</div>
    </div>
  </div>

  <div class='form-group' controlId='basicEmail'>
    <label>
      <h2 class='heading-2'>Email Address</h2>
    </label>
    <input 
      required
      type='email'
      class='text form-control'
      name='email'
      placeholder='Enter your email'
    />
    <div class='invalid-feedback'>Please provide your email.</div>
  </div>

  <div class='form-group' controlId='companyName'>
    <label>
      <h2 class='heading-2'>Company Name</h2>
    </label>
    <input
      type='text'
      class='text form-control'
      name='companyName'
      placeholder='Company Name'
    />
  </div>

  <div class='form-group' controlId='phone'>
    <label>
      <h2 class='heading-2'>Phone</h2>
    </label>
    <input
      type='tel'
      size='lg'
      class='text form-control'
      name='phone'
      placeholder='Enter your phone number'
    />
  </div>

  <div class='form-group' controlId='message'>
    <label>
      <h2 class='heading-2'>Your Message</h2>
    </label>
    <textarea
      required
      rows='6'
      class='tex form-control'
      name='message'
      placeholder='Your message'
    />
     <div class='invalid-feedback'>	Please type your message.</div>
  </div>
  
  <input type='submit' name='submit' class='btn btn--white submit'>
</Form>`;
};

const renderContactForm = () => {
	return `
  <div class = 'col-11 col-sm-10 col-md-8 col-lg-8'>
    ${contactForm()}
  </div>`;
};

export default {
	renderContactForm,
};
