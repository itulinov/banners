/**
 * Логирование
 * @param {string} value - значение для логирования
 * @param {string} name - название файла лога
 */
function addLog(value, name) {
    var sLogName = name
    if (sLogName == undefined) {
        sLogName = 'banners_lib'
    }

    EnableLog(sLogName)
    LogEvent(sLogName, value)
}

/**
 * Очистить кеш библиотеки
 * @param {boolean} isDev - подключить библиотеку для разработки
 * @return {XmElem}
 */
function clear(isDev) {
    var path = 'x-local://wt/web/custom_projects/banners/'
    var file = 'banners_lib.js'
    if (isDev === true) {
        file = 'banners_lib_dev.js'
    }

    DropFormsCache(path + file)
    return OpenCodeLib(path + file)
}

/**
 * Получение данных для страницы меню
 * @param {string} documentId - идентификатор раздела портала
 * @param {number} userId - идентификатор пользователя
 * @param {string} mode - элемент шаблона для перехода к дочернему разделу
 * @return {array}
 */
function getBanners(documentId, userId, mode) {

    return []
}
