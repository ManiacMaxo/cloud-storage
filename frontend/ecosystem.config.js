module.exports = {
    name: 'cloud storage frontend',
    script: 'serve',
    env: {
        PM2_SERVE_PATH: './build',
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_PORT: 3003,
        NODE_ENV: 'production'
    }
}
