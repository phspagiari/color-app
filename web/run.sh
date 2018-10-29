# replace api endpoint
API_ENDPOINT=${API_ENDPOINT:-http://localhost:3000}

sed -i "s#http://localhost:3000#$API_ENDPOINT#g" /usr/share/nginx/html/main.js

# start nginx
nginx -g 'daemon off;'
