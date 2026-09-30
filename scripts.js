// بررسی عضویت
function isUserLoggedIn() {
    return localStorage.getItem("userLoggedIn") === "true";
  }
  
  // وقتی روی دکمه خرید کلیک میشه
  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("buy-btn")) {
      if (!isUserLoggedIn()) {
        // اگر کاربر عضو نیست، بفرستش به صفحه عضویت
        window.location.href = "login.html";
      } else {
        // اگر عضو هست، شبیه‌سازی پرداخت انجام بده
        window.location.href = "basket.html";
        simulatePayment(e.target.dataset.item);
      }
    }
  });
  
  // تابع شبیه‌سازی پرداخت
  function simulatePayment(itemName) {
    const success = Math.random() > 0.5; // به صورت تصادفی موفق یا ناموفق
    if (success) {
      alert(`خرید ${itemName} با موفقیت انجام شد ✅`);
      
    } else {
      alert(`پرداخت ${itemName} ناموفق بود ❌`);
    }
  }
  
  // ثبت نام کاربر
  const form = document.getElementById("signup-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      localStorage.setItem("userLoggedIn", "true");
      alert("عضویت شما با موفقیت انجام شد!");
      window.location.href = "menu.html"; // برگرد به صفحه منو
    });
  }


  document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // جلوگیری از رفرش صفحه

    // گرفتن مقادیر فرم
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // نمایش پیام تأیید
    const confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'block';
    confirmation.textContent = `رزرو شما برای ${name} در تاریخ ${date} ساعت ${time} برای ${guests} نفر ثبت شد!`;

    // پاک کردن فرم
    this.reset();
});

// تولید QR Code
const qrCodeDiv = document.getElementById('qrcode');
const url = 'http://127.0.0.1:5500/index.html'; // آدرس Live Server
if (qrCodeDiv && typeof QRCode !== 'undefined') {
    QRCode.toCanvas(qrCodeDiv, url, {
        width: 150,
        color: {
            dark: '#28a745',  // رنگ سبز تیره برای QR Code
            light: '#ffffff'  // پس‌زمینه سفید
        }
    }, function (error) {
        if (error) console.error('خطا در تولید QR Code:', error);
        else console.log('QR Code تولید شد!');
    });
} else {
    console.log('خطا: QRCode یا div#qrcode پیدا نشد!');
}

// مدیریت فرم (اختیاری، فقط برای دکمه)
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('رزرو شما ثبت شد!');
});



