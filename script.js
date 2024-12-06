const apiUrl = 'رابط-المصدر-الفعلي'; // استبدل رابط المصدر هنا

async function fetchMovies() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('فشل في الحصول على البيانات');
    const data = await response.json();
    console.log(data); // عرض البيانات في الـ Console

    const container = document.getElementById('movies-container');
    container.innerHTML = ''; // تفريغ المحتوى الحالي

    data.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div class="card-content">
          <h2 class="card-title">${movie.title}</h2>
          <p class="card-genre">${movie.genre}</p>
          <a class="card-link" href="${movie.link}" target="_blank">مشاهدة الآن</a>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('خطأ في الحصول على البيانات:', error);
    document.getElementById('movies-container').innerHTML = '<p>حدث خطأ أثناء تحميل البيانات</p>';
  }
}

fetchMovies();
