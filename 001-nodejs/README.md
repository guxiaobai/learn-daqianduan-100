## 001 - Node.js

**Docker**

`docker pull node:14-alpine`

**macOS**

```
brew install node@14
echo 'set -g fish_user_paths "/usr/local/opt/node@14/bin" $fish_user_paths' >> ~/.config/fish/config.fish
```

**Ubuntu**

```bash
sudo apt-get install apt-transport-https

curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo apt-key add -
VERSION=node_14.x
DISTRO="$(lsb_release -s -c)"
echo "deb https://deb.nodesource.com/$VERSION $DISTRO main" | sudo tee /etc/apt/sources.list.d/nodesource.list
echo "deb-src https://deb.nodesource.com/$VERSION $DISTRO main" | sudo tee -a /etc/apt/sources.list.d/nodesource.list

sudo apt-get update
sudo apt-get install nodejs
```

### Series

* [Debugging Guide](./debugging-getting-started.md)


### 参考资料

* [https://nodejs.org/en/](https://nodejs.org/en/)
* [https://hub.docker.com/\_/node](https://hub.docker.com/_/node)
* [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)
* [nodesource/distributions](https://github.com/nodesource/distributions)
* [https://nodejs.org/api/](https://nodejs.org/api/)
* [Node.js入门到企业Web开发中的应用 - 慕课网](https://github.com/guxiaobai/learn-course-100/tree/main/com.imooc/c-146)