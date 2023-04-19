cd /d %~dp0
start cmd /c ng s
cd src\data
start cmd /c json-server --watch data.json
