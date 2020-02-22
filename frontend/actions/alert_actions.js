const showAlert = message => {
  clearTimeout(alertTimeout);
  const alertWindow = document.getElementById('alert-window');
  alertWindow.classList.remove('hidden');
  const alertP = document.getElementById('alert-p');
  alertP.innerHTML = message;
  let alertTimeout = setTimeout(() => alertWindow.classList.add('hidden'), 3000);
}

export default showAlert;