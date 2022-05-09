let form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  let username = form.elements[0];
  let email = form.elements[1];
  let date = form.elements[5];

  let validate = false;
  if (form.elements[0].value || form.elements[1].value || form.elements[5].value)
    validate = true;

  if (validate) {
    console.log("========== Form Submission ==========");
    if (username.value)
      console.log("Username:", username.value);
    else
      console.log("Username: no submission");

    if (email.value)
      console.log("Email:", email.value);
    else
      console.log("Email: no submission");

    if (document.getElementById('yes-radio').checked)
      console.log("Newsletter: Yes");
    else if (document.getElementById('no-radio').checked)
      console.log("Newsletter: No");
    else
      console.log("Newsletter: no submission");

    if (date.value)
      console.log("Date:", date.value);
    else
      console.log("Date: no submission");
  }
  else
    console.warn("You must enter some data to submit this form");
    event.preventDefault();
}