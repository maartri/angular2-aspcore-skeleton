var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    merge = require('merge2'),
    sourcemaps = require('gulp-sourcemaps');
    del = require('del');

var tsProject = ts.createProject('tsconfig.json');

var paths = {
    source: './wwwroot/app',
    output: '',
    def: ''
}

gulp.task('ts-compile', function(){
    var tsResult = tsProject.src(paths.source + '/**/*.ts')
        .pipe(sourcemaps.init({loadMaps:true}))
        .pipe(ts(tsProject));  

    return tsResult.js
        .pipe(sourcemaps.write({includeContent:false,sourceRoot:''}))
        .pipe(gulp.dest(''));
 });

//  gulp.task('ts-compile', function(){
//     var tsResult = tsProject.src(paths.source + '/**/*.ts')
//         .pipe(sourcemaps.init({loadMaps:true}))
//         .pipe(ts(tsProject));  

//     return tsResult.js
//         .pipe(sourcemaps.write('./wwwroot/app'))
//         .pipe(gulp.dest(''));
//  });

gulp.task('srcmaps',['ts-compile'],function(){
     gulp.src(paths.source + '/**/*.js')
                    .pipe(ts(tsProject))
                    .pipe(sourcemaps.init({loadMaps:true})) 
                    .pipe(sourcemaps.write(''))
                    .pipe(gulp.dest('./wwwroot/app'));
 });

 gulp.task('remove', function(cb){
        return del(['./wwwroot/app/**/*.js','./wwwroot/app/**/*.js.map'],cb);
 })

//  gulp.watch('watch',function(){
//      gulp.watch(paths.source,['ts-compile']);
//  })