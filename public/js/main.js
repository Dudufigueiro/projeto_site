function mostrarSenha() {
  var inputPass = document.getElementById('passwordCampo');
  var btnShowPass = document.getElementById('btnEsconder');

  if (inputPass.type === 'password') {
    inputPass.setAttribute('type', 'text');
    btnShowPass.classList.replace('bi-eye', 'bi-eye-slash');
  } else {
    inputPass.setAttribute('type', 'password');
    btnShowPass.classList.replace('bi-eye-slash', 'bi-eye');
  }
}
