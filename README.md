# movies-explorer-api
Web API for registration and authorization on movies site for the Yandex.Praktikum diploma project.

# Дипломный проект Movie-Explorer (backend)
API преднозначен для регистрации новых и авторизации существующих пользователей, а так же хранения карточек выбранных пользователями фильмов.
## Роуты
- POST /signup - создаёт пользователя с переданными в теле email, password и name
- POST /signin - проверяет переданные в теле почту и пароль и отправляет cookie c JWT
- GET /signout - удаляет cookie с JWT из браузера пользователя
- GET /users/me - возвращает информацию о пользователе (email и имя)
- PATCH /users/me - обновляет информацию о пользователе (email и имя)
- GET /movies - возвращает все сохранённые пользователем фильмы
- POST /movies - создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail
- DELETE /movies/movieId - удаляет сохранённый фильм по _id

## Доступ к серверу
API доступен по адресу [https://api.mexplorer.nomoredomains.club](https://api.mexplorer.nomoredomains.club)


## Использованные технологии
- Node.js
- Express.js
- MongoDB

## Как развернуть проект локально
1. На компьютере должен быть установлен [Node.js](https://nodejs.org/en/download/)
npm run start - запуск проекта через node server.js
npm run dev - запуск проекта через nodemon server.js 
