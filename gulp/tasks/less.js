import * as gulpLessObgect from 'gulp-less';

import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'; // Сжатие CSS файла
import webpcss from 'gulp-webpcss'; // Вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиа запросов

var gulpless = gulpLessObgect.default

export const less = () => {
    return app.gulp.src(app.path.src.less, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                // title: "LESS",
                message: "LESS Error <%= error.message %>"
            })))
        .pipe(app.plugins.replace(/.header/g, '/* 12345*/ .header'))
        .pipe(gulpless())
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(
            app.plugins.if(
                app.isBuild,
                groupCssMediaQueries()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowsersList: ["last 3 versions"],
                    cascade: true
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpcss(
                    {
                        webpClass: ".webp",
                        noWebpClass: ".no-webp"
                    }
                )
            )
        )
        .pipe(app.gulp.dest(app.path.build.css)) // не сжатый модуль CSS
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()
            )
        )
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}
