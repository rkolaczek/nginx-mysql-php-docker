var fs = require('fs'),
    gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

require('gulp-stats')(gulp);

plugins.del = require('del');
plugins.path = require('path');


var paths = {
    src: 'src/',
    dist: 'dist/'
};

var tasks = require('./gulp-tasks/tasks')(gulp, plugins, paths);
require('./gulp-tasks/aliases')(gulp, plugins, paths, tasks);