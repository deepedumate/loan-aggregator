module.exports = {
  apps: [{
    name: 'edumate-app',
    script: 'npx',
    args: 'serve -s dist -l 4000',
    interpreter: 'none',
    cwd: './',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 4000
    }
  }]
};