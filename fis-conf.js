// 设置工程的根目录为src文件夹
fis.project.setProjectRoot('src');
fis.processCWD = fis.project.getProjectPath();

// 如果是dist命令则先删除旧的输出文件夹里面的内容
fis.project.currentMedia() === 'dist' 
    && fis.util.del(fis.project.getProjectPath('../public'));





// 为'/modules/common'和'/modules/lib'指定别名
fis.hook('commonjs', {
    packages: [
        {
            name: 'common',
            location: '/modules/common'
        },
        {
            name: 'lib',
            location: '/modules/lib'
        }
    ]
});

// 根目录下的文件都不发布，需要发布的内容在后面再重新配置
fis.match('/*', {
    release: false
});

// pages和modules下的所有js都需要处理识别CommonJS，但压缩文件和部分文件除外
fis.match('/{pages,modules}/(**).js', {
    isMod: true
}).match('**.min.js', {
    isMod: false
}).match('/modules/lib/{zepto,mod,jquery}*.js', {
    isMod: false
})

// 使用babel处理es6/es7，但modules/lib中的除外
fis.match('/{pages,modules}/**.js', {
    parser: fis.plugin('babel')
}).match('/modules/lib/**.js', {
    parser: null
});

// 如果使用了.tpl后缀，则将其编译为模版
fis.match(/\/(.+)\.tpl$/, {
    isMod: true,
    rExt: 'js',
    id: '$1_tpl',
    release: '$0.tpl',
    parser: fis.plugin('imweb-tpl')
});

// sass的编译
fis.match('*.scss', {
        rExt: '.css',
        parser: fis.plugin('node-sass')
    })
    .match('_*.scss', {
        release: false
    })
    .match('*.{scss,css}', {
        useSprite: true,
        postprocessor: [
            fis.plugin('autoprefixer', {
                browsers: ['Android >= 2.3', 'iOS >= 6'],
                cascade: true
            })
        ]
    });

//文章封面和作者头像等动态图片地址不加hash
fis.match(/static\/images\/.*\.(jpeg|jpg|png)$/,{
    useHash: false
})

// 如果采用Ques进行处理
// fis.match('/pages/**.html', {
//     isQPage: true
// });
// 

//src/modules下面的所有js资源都是组件化资源
// fis.match("src/modules/**", {
//     isMod: true,
//     release: '/static/$0'
// });


// fis.match("/component_modules/*.js", {
//     isMod: true,
//     useMap: true,
//     release: '/static/$0'
// });

//component组件资源id支持简写
// fis.match(/^\/components\/component\/(.*)$/i, {
//     id : '$1'
// });

//page里的页面发布到根目录
// fis.match("components/page/(*.html)",{
//     release: '/$1',
//     useCache : false
// });
//page里的页面发布到根目录
fis.match("pages/(*)/*(.html)",{
    release: '/$1$2',
    useCache : false
});


fis.match('::packager', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        useInlineMap: true // 资源映射表内嵌
    }),
    packager: fis.plugin('map'),
    spriter: fis.plugin('csssprites', {
        layout: 'matrix',
        margin: '15'
    })
    
}).match('**/*.{css,scss}', {
    packTo: '/static/pkg/all.css' //css打成一个包
})

//生产环境下CSS、JS压缩合并
//使用方法 fis3 release prod
fis.media('prod')
    .match('**.js', {
        optimizer: fis.plugin('uglify-js')
    })
    .match('component_modules/*.js',{
        packTo: '/static/pkg/common.js' 
    })
    .match('components/**/*.js',{
        packTo: '/static/pkg/app.js'
    })
    .match('**.css', {
        optimizer: fis.plugin('clean-css')
    });
