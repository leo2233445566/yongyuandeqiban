# 永远的七班纪念网站

这是一个可以直接部署到 GitHub Pages 的免费静态纪念网站。网站入口在仓库根目录的 `index.html`，样式和脚本分别位于 `css/`、`js/`。

## 本地预览

直接双击 `index.html` 即可预览，也可以在当前目录运行：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 免费发布到 GitHub Pages

1. 在 GitHub 新建一个公开仓库，例如 `qiban-memorial`。
2. 把本文件夹里的 `index.html`、`css/`、`js/`、`images/`、`.nojekyll` 和 `README.md` 上传到仓库根目录。
3. 打开仓库的 `Settings`。
4. 进入 `Pages`。
5. 在 `Build and deployment` 中选择 `Deploy from a branch`。
6. Branch 选择 `main`，文件夹选择 `/root`，点击 `Save`。
7. 等待 1 到 3 分钟，GitHub 会生成免费网站地址，通常形如：

```text
https://你的用户名.github.io/qiban-memorial/
```

## 修改班级信息

主要内容在 `js/main.js` 顶部的 `CONFIG` 中维护，可以修改学校、班级、时间线、照片标题、同学录和留言等模拟数据。

如果要放真实照片，可以把图片放进 `images/`，再把 `CONFIG.photos` 中的 `src: null` 改成对应路径，例如：

```js
src: 'images/graduation.jpg'
```

注意：当前版本是纯前端静态网站，登录、留言、私信和时间胶囊都是本地模拟，不会保存真实数据。
