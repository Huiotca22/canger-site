# canger-site

Сайт лаунчера [canger](https://github.com/Huiotca22/Canger) — публикуется через GitHub Pages
на <https://huiotca22.github.io/canger-site/>.

## Стек

Astro 7, статическая генерация. Клиентских фреймворков нет, на выходе **0 КБ JavaScript** —
только один CSS-файл и разметка. Вся интерактивность (копирование SHA-256, `<details>`-аккордеон)
написана на голой платформе.

Типографика — Space Grotesk и JetBrains Mono, цвет — один смысловой акцент, а не
декоративные градиенты. Все скриншоты в `public/` — реальный `canger.exe` 0.1.0 на Windows,
а не макеты.

## Структура

```
src/
  layouts/Base.astro      head, шрифты, meta-разметка
  components/*.astro      секции страницы
  styles/global.css       дизайн-токены
  pages/index.astro       сборка страницы
public/                   изображения, копируются в корень сборки
```

Корень репозитория содержит **собранный сайт** (`index.html`, `_astro/`, картинки) —
именно его отдаёт GitHub Pages. Исходники лежат в `src/`, пересборка перезаписывает корень.

## Команды

```powershell
npm install
npm run dev       # http://127.0.0.1:4321/canger-site
npm run build     # сборка в dist/
npm run preview   # проверить собранный dist как в Pages
```

После `npm run build` содержимое `dist/` нужно скопировать в корень репозитория
(кроме `node_modules`), потому что Pages отдаёт корень, а не `dist/`.

## Правка контента

Тексты лежат в компонентах `src/components/` и в `src/layouts/Base.astro` (title и description).
SHA-256 в таблице скачивания продублированы в трёх местах: `Download.astro`, заметках
релиза и в самом релизе на GitHub — при пересборке обновляются все три.

## Лицензия

MIT, как и у самого лаунчера.
