# AskLume 官网首页

AskLume 官网的高保真响应式首页，支持桌面端和手机端。

## 第一次使用

### 1. 接受仓库邀请

登录 GitHub，接受 `eclipsez/asklume-homepage` 的协作邀请。

### 2. 下载项目

```bash
git clone https://github.com/eclipsez/asklume-homepage.git
cd asklume-homepage
```

### 3. 安装并启动

电脑需要安装 Node.js 22 或更高版本。

```bash
npm install
npm run dev
```

终端会显示一个本地网址，通常是：

```text
http://localhost:5173/
```

用浏览器打开即可查看网站。

## 常用检查

```bash
# 检查功能是否正常
npm run test:run

# 检查网站能否正式构建
npm run build
```

## 两人如何配合

不要直接在 `main` 主分支上修改。每次修改都使用一个独立分支：

1. 开始前同步最新的 `main`。
2. 创建自己的修改分支。
3. 完成修改并运行测试。
4. 推送分支并创建 Pull Request。
5. 由另一位成员检查和确认。
6. 确认无误后合并到 `main`。

完整步骤、命令示例和冲突处理方式请看：

[双人协作指南](docs/COLLABORATION.md)

## 项目技术

- React 19
- TypeScript
- Vite
- CSS Modules
- Motion
- Vitest 与 Playwright
