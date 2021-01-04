$(function () {
  function validateName(name) {
    if (name.length <= 0) return 'Must enter a valid name field';
    else return '';
  }

  function validateEmail(email) {
    if (email.length <= 0) return 'Must enter a valid email field';
    else return '';
  }

  function validatePassword(password) {
    if (password.length <= 6)
      return 'Password must equal or longer than 6 characters';
    else return '';
  }

  function formInit(form) {
    form.children('.form-group').children('small').hide();
  }

  function getField(form, name) {
    return form
      .children('.form-group')
      .filter((i, c) => $(c).children('label').text() === name);
  }

  function getFieldInputValue(field) {
    return field.children().filter('input').val();
  }

  function displayErr(field, errMsg) {
    if (errMsg) field.children('small').text(errMsg).show();
    else field.children('small').text(errMsg).hide();
  }

  function formValidation(form) {
    let isValid = true;
    let errString = '';
    let field;

    field = getField(form, 'First Name:');
    errString = validateName(getFieldInputValue(field));
    if (errString) isValid = false;
    displayErr(field, errString);

    field = getField(form, 'Last Name:');
    errString = validateName(getFieldInputValue(field));
    if (errString) isValid = false;
    displayErr(field, errString);

    field = getField(form, 'Email:');
    errString = validateEmail(getFieldInputValue(field));
    if (errString) isValid = false;
    displayErr(field, errString);

    field = getField(form, 'Password:');
    errString = validatePassword(getFieldInputValue(field));
    if (errString) isValid = false;
    displayErr(field, errString);

    if (isValid) {
      form.submit();
      formInit(form);
    }
  }

  $('button[type="button"]').click(function () {
    formValidation($(this).closest('form'));
  });

  formInit($('#myForm'));
});

/*
      <form name="myForm" id="myForm">
        <div class="form-group">
          <label for="first">First Name:</label>
          <input type="text" name="first" />
        </div>

        <div class="form-group">
          <label for="last">Last Name:</label>
          <input type="text" name="last" />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="text" name="email" />
        </div>

        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" name="password" />
        </div>

        <button type="button">Submit</button>
      </form>
    </div>

      */
