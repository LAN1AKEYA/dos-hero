let 

fps = 1, //Индекс общей скорости выполения (на высоких скоростях могут быть сбои)

underlineSpeed = 1200, //Скорость анимации андерлайна
underlineDelay = 400, //Задержка запуска анимации андерлайна
printSpeed = 150, //Скорость печати
removeSpeed = 30, //Скорость отчистки
wordPrintDelay = 3000, //Задержка перед написанием следующей строки
wordClearDelay = 2000, //Задержка перед удалением строки


randomMisclicksLuck = 0.07, //Вероятность опечатки (от 0 до 1)
clearMisclickDelay = 300, //Затуп после ошибки
falseSimbols = ['.', '.', ' '], //Символы, на которых ошибки не допустимы
//characters = ' ABCDEFGHIJKLMNOPQRSTVWXYZZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+e', //Допустимые для опечатки символы
characters = ' АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя!@#$%^&*()-_=',


//wordBase = ['Hello!', 'Welcome to my universe', 'Thanks for visit!', '...i love you <3', 'I hope you have fun', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', 'Good luck!','This is done by LANIAKEYA', 'Your welcome', 'Please no more errors...', '(restart message array)'], //База строк
wordBase = ['Тяжело в учении, легко в бою', 'Сначала ты работаешь на репутацию', 'потом она на тебя', 'Шевели мозгами', 'Работай над собой', 'Учение - свет, неучение - тьма', 'Ум - это новая **** (привлекательнось) - Шелдон Купер', 'Знание - это сила'], //База строк
wordRandom = false, //Вывод строк из массива в случайном порядке
wordRepeat = true, //Зациклить массив (противоречит предыдущему)


filterOn = true, //Фильтр
linesOn = true, //Линии
noise = true, //Щум
accentFilter = [false] //Эффектное акцентирование на фразе (циклично)