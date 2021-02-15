module.exports = {
    name: 'cloud storage frontend',
    script: 'serve',
    watch: true,
    env: {
        PM2_SERVE_PATH: './build',
        PM2_SERVE_PORT: 3003,
        NODE_ENV: 'production'
    }
}
