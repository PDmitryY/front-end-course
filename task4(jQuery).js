//--------------jQuery--------------------------------
//--------------------------------------------task #4.2
/*(function($){
    $(document).ready(function(){
        $('body').append('<div></div>');
        $('body div').addClass('main');
        $('div.main').append('<ul></ul>');
        for (i=0;i<10;i++){
            $('div.main ul').append('<li>Пункт '+ (i+1) +'</li>')
        };
        $('div.main ul li').wrapInner('<span></span>');
        $('li:even').addClass('second');
        //Каждому пункту li добавить аттрибут order с его порядковым номером - attr(); DON'T WORK
        for (i=1;i<=10;i++){
            let k = i;
           $('li:nth-child(1n)').attr('order', k);
        };
        $('li:nth-last-child(1)').remove();
        $('div.main').prepend('<h3>Перчень работ</h3>');
    })
})(jQuery);*/
//---------------------Home work (extra)-------------------
//--------------------------------------------task #4.2
(function($){
    $('document').ready(function(){
        // задачи 1-3--------------------------------------
        //1. Всем <h2> поставьте текст "!".
        $('h2').text('!');
        //2. Всем <h3> сделайте красный цвет.
        $('h3').css('color', '#ff0000');
        //3. Всем <h2> сделайте голубой цвет и font-size: 30px.
        $('h2').css('color', 'blue').css('font-size', '30px');
        // задачи 4-9----------------------------------------
        //4. Все элементы с классом test.
        $('.test').css('color', '#ff0000');
        //5. Все <h2> с классом test.
        $('h2.test').css('color', '#ff0000');
        //6. Все абзацы, которые следуют сразу за абзацами.
        $('p + p').css('color', '#ff0000');
        //7. Все <li>, которые следуют сразу за <li> с классом www.
        $('li.www + li').css('color', '#ff0000');
        //8. Все <i> внутри <h2>.
        // не понял разницу между 8 и 9 задачами
        $('h2 ~ i').css('color', '#ff0000');
        //9. Все <i> непосредственно внутри <h2>.
        $('h2 > i').css('color', '#ff0000');
        // задачи 10-20--------------------------------------
        //10. Все заголовки.
        $(':header').css('color', '#ff0000');
        //11. Все <h2> НЕ с классом test.
        $('h2:not(.test)').css('color', '#ff0000');
        //12. Все заголовки НЕ с классом test.
        $(':header:not(.test)').css('color', '#ff0000');
        //13. Все заголовки, которые следуют сразу за заголовками.
        $(':header + :header').css('color', '#ff0000');
        //14. Все заголовки с классом test, которые следуют сразу за заголовками с классом test.
        $(':header.test + :header.test').css('color', '#ff0000');
        //15. Все пустые элементы.
        $(':empty').css('color', '#ff0000');
        //16. Первый абзац <p>.
        $('p:first').css('color', '#ff0000');
        //17. Последний абзац <p>.
        $('p:last').css('color', '#ff0000');
        //18. Все <li>, которые содержат текст 'пункт'.
        $('li:contains("пункт")').css('color', '#ff0000');
        //19. Все <h2>, внутри которых есть тег <i>.
        $('h2:has(i)').css('color', '#ff0000');
        //20. Все <h2>, которые непосредственно содержат <i>.
        $('').css('color', '#ff0000');
        // задачи 21-33--------------------------------------
        //21. Третью <li>.
        $('li:nth-child(3)').css('color', '#ff0000');
        //22. Все <li> больше 10-той (отсчет с нуля в jQuery!).
        $('li:gt(9)').css('color', '#ff0000');
        //23. Все <li> меньше 10-той.
        $('li:lt(9)').css('color', '#ff0000');
        //24. Все <li> больше 10-той и саму 10-ю тоже.
        $('li:gt(8)').css('color', '#ff0000');
        //25. Получите первую <li> на странице.
        $('li:eq(0)').css('color', '#ff0000');
        //26. Получите последнюю <li> на странице.
        $('li:eq(-1)').css('color', '#ff0000');
        //27. Получите первую <li> в каждой <ol>.
        $('ol Li:first-child').css('color', '#ff0000');
        //28. Получите последнюю <li> в каждой <ol>.
        $('ol li:last-child').css('color', '#ff0000');
        //29. Получите 10-ю <li> в каждой <ol>.
        $('ol li:eq(9)').css('color', '#ff0000');
        //30. Четные <li>.
        $('li:even').css('color', '#ff0000');
        //31. Нечетные <li>.
        $('li:odd').css('color', '#ff0000');
        //32. Четные <li> в каждой <ol>.
        $('ol li:even').css('color', '#ff0000');
        //33. Нечетные <li> в каждой<ol>.
        $('ol li:odd').css('color', '#ff0000');
        //34. Сделайте родителя <li> с классом www красного цвета.
        $('').css('color', '#ff0000');
        //35. Выведите алертом содержимое всех абзацев <p> (по очереди).
        $('').css('color', '#ff0000');
        //36. Выведите алертом содержимое всех заголовков (по очереди).
        $('').css('color', '#ff0000');
        //37. Поменяйте содержимое всех <li> на их порядковый номер.
        $('').css('color', '#ff0000');
        //38. Добавьте всем <li> в конец их порядковый номер.
        $('').css('color', '#ff0000');
    })
})(jQuery)
