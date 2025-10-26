import { db } from "./firebase-config.js";
import { doc, setDoc, getDoc, updateDoc, getDocs, collection } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js';

export async function saveUserData(userId, userData) {
  try {
    await setDoc(doc(db, "users", userId), userData)

    console.log("✅ Lưu thông tin người dùng thành công!");
  } catch (error) {
    console.error("❌ Lỗi khi lưu dữ liệu:", error);
  }
}
