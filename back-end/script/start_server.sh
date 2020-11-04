#!/bin/bash
export PM2_HOME= /home/ubuntu/.pm2
pm2 delete ucs
cd /home/ubuntu/ucs/
pm2 start --name ucs npm -- start
