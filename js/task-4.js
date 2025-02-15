document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const { email, password } = form.elements;
    const userData = {
      email: email.value.trim(),
      password: password.value.trim(),
    };

    // ❗ Перевіряємо, чи всі поля заповнені
    if (!userData.email || !userData.password) {
      alert("All form fields must be filled in");
      return;
    }

    console.log("✅ User Data:", userData);
    form.reset(); 
  });
});
