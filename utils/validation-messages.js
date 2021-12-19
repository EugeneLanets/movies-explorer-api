const passwordMessages = {
  'string.empty': 'Заполните необходимое поле password',
  'any.required': 'Заполните необходимое поле password',
  'string.min': 'Пароль должен содержать не менее 8 символов',
  'string.base': 'Пароль должен быть строкой',
};

const emailMessages = {
  'string.email': 'Некорректный email',
  'string.empty': 'Заполните необходимое поле email',
  'any.required': 'Заполните необходимое поле email',
  'string.base': 'Email должен быть строкой',
};

const nameMessages = {
  'string.min': 'Минимальная длина поля 2 символа',
  'string.max': 'Максимальная длина поля 30 символов',
  'string.base': 'Имя должно быть строкой',
};

const movieNameMessage = {
  'string.base': 'Название фильма должно быть строкой',
  'any.required': 'Название фильма является обязательным полем',
};

const movieIdMessages = {
  'number.base': 'MovieId должно быть числом',
  'any.required': 'Поле MovieId является обязательным',
};

const durationMessages = {
  'number.base': 'ПРодолжительность должно быть числом',
  'any.required': 'Поле ПРодолжительность является обязательным',
};

const yearMessages = {
  'string.base': 'Год должно быть строкой',
  'any.required': 'Поле Год является обязательным',
};

const ownerMessages = { 'string.pattern.base': 'Некорректный id' };
const urlMessages = { 'any.custom': 'Некорректный URL' };

const descriptionMessages = {
  'string.base': 'Описание фильма должно быть строкой',
  'any.required': 'Описание фильма является обязательным полем',
};
const directorMessages = {
  'string.base': 'Поле Режиссёр должно быть строкой',
  'any.required': 'Режиссёр является обязательным полем',
};
const countryMessages = {
  'string.base': 'Поле Страна должно быть строкой',
  'any.required': 'Страна  является обязательным полем',
};

const idMessages = { 'string.pattern.base': 'Некорректный id' };

module.exports = {
  passwordMessages,
  emailMessages,
  nameMessages,
  movieNameMessage,
  movieIdMessages,
  ownerMessages,
  urlMessages,
  descriptionMessages,
  yearMessages,
  directorMessages,
  countryMessages,
  durationMessages,
  idMessages,
};
