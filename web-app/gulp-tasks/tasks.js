module.exports = function (gulp, plugins, paths) {
    return {
        clean: function () {
            return plugins.del([
                paths.dist + '**/*'
            ]);
        },
        copy: function () {
            return gulp.src(paths.src + 'index.html')
                .pipe(gulp.dest(paths.dist));
        }
    };
};