let form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log("========== Form Submission ==========");
  let username = form.elements[0];
  let email = form.elements[1];
  let date = form.elements[4];

  if (username != null || username != "")
    console.log("Username:", username.value);
  else
    console.log("Username: no submission");

  if (email != null || email != "")
    console.log("Email:", email.value);
  else
    console.log("Email: no submission");

  if (document.getElementById('yes-radio').checked)
    console.log("Newsletter: Yes");
  else if (document.getElementById('no-radio').checked)
    console.log("Newsletter: No");
  else
    console.log("Newsletter: no submission");

  if (date != null || date != "")
    console.log("Date:", date.value);
  else
    console.log("Date: no submission");
}