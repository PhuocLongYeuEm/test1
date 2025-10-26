import { auth } from "./firebase-config.js";
import { saveUserData } from "./firebase-firestore.js"; // import Firestore
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js';

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const message = document.getElementById("message");

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await saveUserData(user.uid, {
          fullname,
          email,
          password,
          createdAt: new Date().toISOString(),
          role: "user",
        });

        message.textContent = "Đăng ký thành công!";
        message.style.color = "green";
        setTimeout(() => window.location.href = "DangNhap.html", 1500);

      } catch (error) {
        message.textContent = "Lỗi: " + error.message;
        message.style.color = "red";
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        message.textContent = `Đăng nhập thành công! Xin chào ${userCredential.user.email}`;
        message.style.color = "green";
        setTimeout(() => window.location.href = "TrangChu.html", 1500);

      } catch (error) {
        message.textContent = "Lỗi: " + error.message;
        message.style.color = "red";
      }
    });
  }
});
