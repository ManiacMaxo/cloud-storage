module.exports = {
    name: 'cloud storage backend',
    script: 'yarn',
    args: 'build-and-serve',
    watch: true,
    env: {
        NODE_ENV: 'production'
    }
}
