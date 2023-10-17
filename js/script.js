function goBack() {
  if (document.referrer) {
    window.location.href = document.referrer;
  } else {
    // If there's no previous page, you can provide a default URL.
    window.location.href = "index.html";
  }
}

function goToLogin() {
    window.location.href = ("login.html", "_blank");
  }
  
  function goToSignup() {
    window.location.href = ("signup.html", "_blank");
  }
  
