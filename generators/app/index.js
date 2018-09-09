const Generator = require('yeoman-generator');
const slugify    = require('underscore.string/slugify');

class PorlaGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    writing() {
        this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
        this.fs.copy(this.templatePath('index.js'), this.destinationPath('index.js'));

        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            { appName: slugify(this.appname), appOwner: '' }
        );
    }

    end() {
        const packages = [ '@porla/porla' ];
        this.npmInstall(packages, { save: true });

        this.log('Porla is ready to be awesome!');
    }
};

module.exports = PorlaGenerator;
