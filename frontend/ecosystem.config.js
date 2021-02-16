module.exports = {
    name: 'cloud storage frontend',
    script: 'serve',
    watch: true,
    env: {
        PM2_SERVE_PATH: './build',
        PM2_SERVE_SPA: 'true',
        NODE_ENV: 'production'
    }
}
