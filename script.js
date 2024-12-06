
const apiUrl = 'https://example.com/ajax/v4/movies'; // ضع رابط API الصحيح هنا

async function fetchMovies() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('فشل في تحميل البيانات');

    const data = await response.json(); // فك التشفير إذا لزم الأمر
    console.log(data); // تحقق من البيانات
  } catch (error) {
    console.error('خطأ في تحميل البيانات:', error);
  }
}

fetchMovies();
