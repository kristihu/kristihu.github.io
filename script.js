function updateImageSource() {
  const imageElement = document.querySelector('.image');
  const screenWidth = window.innerWidth;

  if (screenWidth >= 800) {
    imageElement.src = '/assets/images/illustration-sign-up-desktop.svg';
  } else {
    imageElement.src = './assets/images/illustration-sign-up-mobile.svg';
  }
}

updateImageSource();
window.addEventListener('resize', updateImageSource);

function test() {
  const emailInput = document.getElementById('emailinput');
  const errorMessage = document.querySelector('.error-message');
  const successMessage = document.querySelector('.success');
  const container = document.querySelector('.container');
  const test = emailInput.value.includes('@') && emailInput.value.includes('.');
  const para = document.querySelector('.parag');
  const node = document.createTextNode(
    `A confirmation email has been sent to ${emailInput.value}. Please open it and click the button inside to confirm your subscription`
  );

  console.log(test);
  if (test) {
    container.style.display = 'none';
    successMessage.style.display = 'flex';
    para.appendChild(node);
  } else {
    errorMessage.style.display = 'block';
    emailInput.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    emailInput.style.border = '1px solid red';
    emailInput.style.color = 'red';
  }
}
function back() {
  const container = document.querySelector('.container');
  console.log('ei toimi');
  const asd = document.querySelector('.success');
  container.style.display = 'flex';
  asd.style.display = 'none';
}
