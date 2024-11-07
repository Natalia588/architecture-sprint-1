Задание 1
Разделение проекта Mesto на на несколько фронтэндов

В соответсвии с основными бизнес-функциями (domain-driven design), предлагаю разбивку на 2 микрофронтенда и хост приложение:
1. Users
	Здесь - регистрация, вход в систему, редактирование профиля
2. Places
	Лента фотографий, добавление новых, удаление, лайки
3. Host
	Хост приложение, которое объединяет в себе микрофронтенды.

Метод интеграции - Run Time, объединяем все в момент выполнения.
Метод композиции - клиентская, с помощью наиболее популярного фрэймворка Webpack Module Federation. 

Module Federation позволяет независимым приложениям использовать общий код во время выполнения. Команды, которые разрабатывают разные микрофронтенды, смогут получить доступ к коду друг друга до развёртывания. В нашем случае все приложения написаны на React - поэтому можно использовать эту зависимость как общую, загружать только один истанс.

Взаимодействие модулей:
- Предполагается использовать события для обмена информацией между фронтами. В модуле users\Login сделан прототип такого обмена.

Работа выполнена на уровнях 1-2 (планирование и проектирование изменений).


Задание 2











