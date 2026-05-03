document.querySelector(".auth-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Login successful");
      window.location.href = "/dashboard.html";
    } else {
      alert("Invalid login");
    }
  } catch (err) {
    console.error(err);
    alert("Server error");
  }
});