// theme.js

document.addEventListener('DOMContentLoaded', function() {
  // تحديد العناصر
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const intro = document.getElementById('intro');

  // تحميل الوضع المحفوظ من localStorage، وإذا مفيش وضع محفوظ نخلي الوضع الداكن هو الافتراضي
  const savedMode = localStorage.getItem('mode') || 'dark';

  // دالة لتطبيق الوضع
  function applyMode(isDark) {
    const currentPage = window.location.href;

    // تطبيق الوضع الداكن
    if (isDark) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');

      // لو في صفحة Home
      if (currentPage.includes('Home.html')) {
        if (intro) {
          intro.style.background = "#000"; // الخلفية في الانترو تبقى سوداء
        }
        body.style.background = "#000"; // الخلفية الرئيسية تصبح سوداء
        body.style.backgroundImage = "none"; // إزالة أي صورة خلفية
      }
      // لو في صفحة Log In
      else if (currentPage.includes('Log%20In.html') || currentPage.includes('Log In.html')) {
        body.style.backgroundImage = "url('https://i.pinimg.com/736x/2a/ae/5c/2aae5c03042603b4ca20e8a13c89d31a.jpg')";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
      }
      else {
        body.style.background = "#000";
        body.style.backgroundImage = "none";
      }

      // حفظ الوضع في localStorage
      localStorage.setItem('mode', 'dark');
    } 
    // تطبيق الوضع الفاتح
    else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');

      // لو في صفحة Home
      if (currentPage.includes('Home.html')) {
        if (intro) {
          intro.style.background = "#f0f0f0"; // الخلفية في الانترو تصبح فاتحة
        }
        body.style.background = "#ffffff"; // الصفحة الرئيسية تصبح بيضاء
        body.style.backgroundImage = "none";
      }
      // لو في صفحة Log In
      else if (currentPage.includes('Log%20In.html') || currentPage.includes('Log In.html')) {
        body.style.backgroundImage = "url('https://i.postimg.cc/zX9jgpPw/Chat-GPT-Image-23-2025-06-28-22.png')";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
      }
      else {
        body.style.background = "#ffffff";
        body.style.backgroundImage = "none";
      }

      // حفظ الوضع في localStorage
      localStorage.setItem('mode', 'light');
    }
  }

  // تطبيق الوضع المحفوظ عند تحميل الصفحة
  applyMode(savedMode === 'dark');

  // تعيين حالة التبديل (Toggle) بناءً على الوضع الحالي
  if (toggle) {
    toggle.checked = (savedMode === 'dark');
    toggle.addEventListener('change', function() {
      // تطبيق الوضع بناءً على حالة التبديل
      applyMode(this.checked);
    });
  }

});
