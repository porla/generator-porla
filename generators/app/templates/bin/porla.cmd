@echo off
call npm install
SETLOCAL
SET PATH=node_modules\.bin;node_modules\porla\node_modules\.bin;%PATH%

node_modules\.bin\porla.cmd %* 
