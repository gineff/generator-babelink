'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({

  devDependencies: function () {
    var _pack =  JSON.parse(this.readFileAsString(this.templatePath('package.json')));
    this.mkdir('node_modules');
    for(var key in _pack.devDependencies) {
      if(_pack.devDependencies.hasOwnProperty(key)) {
        fs.symlink(path.resolve(this.templatePath(),'node_modules', key), path.resolve(this.destinationPath(), 'node_modules', key), 'junction', function() {});
      }
    }

  },
  install: function () {
    //this.installDependencies();
  }
});
