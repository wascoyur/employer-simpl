# Задание #
# РАЗРАБОТЧИК ПРОГРАММНОГО ОБЕСПЕчЕНИЯ«СПРАВОЧНИК» #


Начальные условия.
Необходимо спланировать и разработать программу ведения иерархического справочника. При этом известно, что:
У элементов справочника есть обязательные атрибуты: наименование, место в иерархии, а также два произвольных атрибута: числовой и строковый.
Элементы справочника зависят от времени: любой атрибут элемента справочника может изменяться во времени (минимальный интервал – 1 день);

В процессе решения задачи должны быть созданы:
    1. Структура БД (например: Oracle, MS SQL или PostgreSQL);
    2. База Данных (наполненная тестовыми данными, минимум 10 записей);
    3. Пользовательский интерфейс для ведения справочника (добавление, удаление, редактирование данных).

По результатам выполненных работ Вы должны предоставить:
    1. Архивы (файлы, дампы) БД;
    2. Файлы исходных текстов программы и ее скомпилированного экземпляра;
    3. Документ в MS-Word (краткое описание работы программы).
    
## Deploy ##
https://wascoyur.github.io/employer-simpl/crud-application/build/

### Что реализовано ###
1. Добавление элементов в список. Список пока находится на клиенте и в БД не отправляется. 
2. Просмотр списка добавленных сущьностей.
3. Элементы списка имеют несколько сохраняемых полей. </br>Поля сохраняемых элементов можно увидет в меню  EntityList (после из добавления в список на странице EntityAdd).</br> Изначално список элементов пуст. Дата создания объекта изменяется при редактировании (вводе) имени элемента. Дублирование имен не допускается (элемент отбрасывается).</br> Очистка полей ввода данных элемента на этапе тестирования не предусмоторена (для облегчения ввода).
4. Адаптивный интерфейс.
