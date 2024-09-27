// UNTUK STORIES SECTION
document.querySelectorAll('.card-container .card').forEach(card => {
  card.addEventListener('click', (event) => {
      event.preventDefault(); // Mencegah navigasi langsung
      const targetUrl = kartu-banyak.href; // Ambil URL dari elemen <a>

      document.body.classList.add('fade-out'); // Tambahkan kelas untuk efek fade out

      setTimeout(() => {
          window.location.href = targetUrl; // Pindah halaman setelah efek selesai
      }, 500); // Waktu yang sama dengan durasi transisi
  });
});
// JS UNTUK CHAT
function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.value;

  if (message.trim()) {
      const chatBox = document.querySelector(".chat-box");
      const newMessage = document.createElement("div");
      newMessage.classList.add("message", "sent");
      newMessage.innerHTML = `<span>You</span> ${message}`;
      chatBox.appendChild(newMessage);

      messageInput.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to bottom
  }
}