const generators = require('yeoman-generator');
const slugify    = require('underscore.string/slugify');

const PorlaScriptGenerator = generators.Base.extend({
    writing: function() {
        this.fs.copy(this.templatePath('bin/*'), this.destinationPath('bin/'));
        this.fs.copy(this.templatePath('src/*'), this.destinationPath('src/'));

        this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));

        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            { appName: slugify(this.appname), appOwner: '' }
        );

        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath('README.md'),
            { appName: slugify(this.appname) }
        );
    },

    end: function() {
        this.npmInstall();
        this.log('Your Porla script is ready!');
    }
});

module.exports = PorlaScriptGenerator;
