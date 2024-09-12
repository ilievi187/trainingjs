#!/bin/bash

# This script runs sudo openvpn with a specified username

# Replace 'username' with the actual username
username="username"

# Replace 'path_to_ovpn_file' with the actual path to your .ovpn file
path_to_ovpn_file="/path/to/your.ovpn"

# Use 'expect' command to provide the password
expect -c "
spawn sudo openvpn --config $path_to_ovpn_file
expect \"*?assword:*\"
send -- \"$username\r\"
expect \"*?assword:\"
send -- \"your_password\r\"
interact"