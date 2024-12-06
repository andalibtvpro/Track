
import requests
from bs4 import BeautifulSoup
import json

# رابط الموقع لجلب الأفلام
URL = 'https://flixtor.to/home'  # قم بتبديله بالرابط الصحيح

# إرسال طلب إلى الموقع
response = requests.get(URL)
soup = BeautifulSoup(response.content, 'html.parser')

# استخراج البيانات
movies = []
for movie in soup.find_all('div', class_='movie-element'):  # عدل بناءً على هيكل الموقع
    title = movie.find('h3').text.strip()
    link = movie.find('a')['href']
    image = movie.find('img')['src']
    genre = movie.find('span', class_='genre-class').text.strip()

    movies.append({
        'title': title,
        'link': link,
        'image': image,
        'genre': genre
    })

# حفظ البيانات في ملف JSON
with open('movies.json', 'w', encoding='utf-8') as f:
    json.dump(movies, f, ensure_ascii=False, indent=4)

print("تم حفظ البيانات في ملف movies.json")
