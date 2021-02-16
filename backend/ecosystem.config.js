module.exports = {
    name: 'cloud storage backend',
    script: 'src/index.ts',
    watch: true,
    exp_backoff_restart_delay: 100,
    error_file: 'err.log',
    log_file: 'access.log',
    time: true,
    env: {
        NODE_ENV: 'production'
    }
}
