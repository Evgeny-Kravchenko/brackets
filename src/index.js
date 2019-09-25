module.exports = function check(str, bracketsConfig) {
    for(let i = 0; i < 100; i++) {                                        //Проходим опредеоённое колличество раз по str, чтобы проверить все возможные вложенности
        for(let j = 0; j < bracketsConfig.length; j++) {                    //Проходи каждой парой скобок по str
            let bracketsConfigStr = bracketsConfig[j].join("");             //Преобразовываем bracketsConfig в строку
            while(str.includes(bracketsConfigStr)) {                        //Удаляем через цикл все совпадения из str после чего переходим, переходим на новую итерацию для проверки brackets другого типа
                str = str.replace(bracketsConfigStr, "");                   /*После проверки всех скобок переходим на новую итерацию внешенего цикла for чтобы родительские brackets                      */
            }
        }                                 //Если удалено не всё, значит скобки расставлены не правильно
    }
    if(str.length === 0) return true;                                     //Если удалено всё, то скобки расставлены правильно
    if(str.length !== 0) return false;   
}
