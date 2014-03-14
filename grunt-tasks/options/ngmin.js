module.exports = {
    options: {
        banner: '<%= config.meta.banner %>'
    },
    dist: {
        src: ['<%= config.dist %>/<%= config.fileName %>.js'],
        dest: '<%= config.dist %>/<%= config.fileName %>.min.js'
    },
    distTpls: {
        src: ['<%= config.dist %>/<%= config.fileNameTpl %>.js'],
        dest: '<%= config.dist %>/<%= config.fileNameTpl %>.min.js'
    }
};