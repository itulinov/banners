import banner from "@img/banner.svg"


/**
 * получить исходник файла по названию
 * @param {string} name - название картинки
 * @param {any}
 */
export default (name) => {
    const files = {
        banner,
    }

    return files[name]
}
