const generators = require('yeoman-generator');
const slugify    = require('underscore.string/slugify');

const PorlaGenerator = generators.Base.extend({
    writing: function() {
        this.fs.copy(
            this.templatePath('bin/*'),
            this.destinationPath('bin/')
        );

        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            { appName: slugify(this.appname), appOwner: '' }
        );
    },

    end: function() {
        const packages = [ 'porla' ];
        this.npmInstall(packages, { save: true });

        this.log('Porla is ready to be awesome!');
    }
});

module.exports = PorlaGenerator;