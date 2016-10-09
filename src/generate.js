(function() {
    var fs = require('fs');
    var path = require('path');
    module.exports = {
        init: init
    };

    function init(name) {
        fs.exists(name, function(result) {
            if (!result) {
                fs.mkdirSync(name);
            }
            generateFiles(name);
        });
    }

    function generateFiles(name) {
        generateModuleJS(name);
        generateHtml(name);
        generateContorller(name);
        generateService(name);
        generateRouter(name);
    }

    function generateModuleJS(name) {
        writeFile(name, '.js', 'ModuleJS', true);
    }

    function generateHtml(name) {
        writeFile(name, '.html', 'Html');
    }

    function generateContorller(name) {
        writeFile(name, 'Ctrl.js', 'Contorller');
    }

    function generateService(name) {
        writeFile(name, 'Service.js', 'Service');
    }

    function generateRouter(name) {
        writeFile(name, 'Router.js', 'Router');
    }

    function writeFile(name, suffix, tag, isIndex) {
        var filename = isIndex ? 'index' : 'Base';
        var name = isIndex ? 'index' : name;
        var filepath = path.resolve(__dirname, '..', 'template', filename + suffix);

        var temp = fs.readFileSync(filepath);
        var newFileText = temp.toString().replace(/Base/g, name);

        if (tag == 'Router') {
            var lowerCaseName = name.replace(/([A-Z])/g, "-$1").toLowerCase();
            if (lowerCaseName[0] == '-')
                lowerCaseName = lowerCaseName.replace('-', '');
            newFileText = newFileText.replace('/base', "/" + lowerCaseName);
        }

        fs.writeFile(name + '/' + name + suffix, newFileText, function(err) {
            if (err) {
                return console.error(err);
            }
            console.log(tag + "写入成功！");
        });
    }



})();
