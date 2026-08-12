# AskLume 首页协作开发交接

> 本文件是给 Antigravity 的执行说明。收到本文件后，请从“执行目标”开始自主执行；除非遇到登录、权限、合并冲突或需求不明确，否则不要让用户手工运行命令。

## 执行目标

在同事的电脑上获取 AskLume 首页当前最新改版，启动本地开发环境，随后根据用户提出的新要求继续修改。所有修改必须提交并推送到同一个协作分支，以便自动更新现有 Pull Request。

## 项目信息

- GitHub 仓库：`https://github.com/eclipsez/asklume-homepage.git`
- 协作分支：`codex/premium-card-redesign`
- Pull Request：`https://github.com/eclipsez/asklume-homepage/pull/3`
- 技术栈：React 19、TypeScript、Vite、CSS Modules、Motion、Vitest、Playwright
- Node.js：`^20.19.0` 或 `>=22.12.0`

## 第一步：定位或获取项目

先询问用户希望把项目放在哪个本地目录，或在当前工作区寻找已有的 `asklume-homepage` 仓库。

### 如果本地还没有仓库

执行：

```bash
git clone https://github.com/eclipsez/asklume-homepage.git
cd asklume-homepage
git fetch origin
git switch --track origin/codex/premium-card-redesign
```

如果本地分支已存在，则改用：

```bash
git switch codex/premium-card-redesign
git pull --ff-only origin codex/premium-card-redesign
```

### 如果本地已有仓库

进入仓库后先检查状态：

```bash
git status --short
git branch --show-current
```

- 如果有未提交修改，不要覆盖、删除或暂存它们；先向用户说明并等待选择。
- 如果工作区干净，执行：

```bash
git fetch origin
git switch codex/premium-card-redesign
git pull --ff-only origin codex/premium-card-redesign
```

## 第二步：安装并启动

确认 Node.js 版本满足要求，然后执行：

```bash
npm install
npm run dev
```

读取终端显示的本地地址，在浏览器打开。确认页面包含主标题“让品牌被AI看见、理解与选择。”，且页面不是空白。

如果默认端口被占用，使用 Vite 提供的新端口，不要关闭用户的其他程序。

## 第三步：继续修改时必须遵守

1. 当前视觉稿和现有页面是唯一设计依据，保持低调、克制、国际化的高级质感。
2. 首页中的渐变背景、毛玻璃 Banner、玻璃流体卡片、字体层级、留白和响应式结构不得无故降级。
3. “客户案例/品牌展示条”已经删除，不要恢复。
4. 核心优势保持三张玻璃艺术卡片。
5. 三大信息支柱保持 `01 / 02 / 03` 的编号结构和卡片之间的流程关系。
6. 鼠标效果必须克制：允许轻微上浮、局部光晕和玻璃素材视差，不要使用夸张旋转或连续漂浮。
7. 手机端必须保持单列、无横向溢出，正文和操作控件不得被装饰素材遮挡。
8. 尊重 `prefers-reduced-motion`，减少动态时立即显示内容并关闭位移效果。
9. 不要提交 `node_modules`、`dist`、`test-results` 或本地临时文件。
10. 修改前先理解现有组件和测试；不要整体推翻已经通过验收的实现。

## 第四步：完成修改后的检查

至少执行：

```bash
npm run test:run
npm run build
npm run test:visual
```

如果视觉确实因本次需求发生变化，可以在人工确认新效果后执行：

```bash
npm run test:visual:update
npm run test:visual
```

不得为了让测试通过而删除关键断言、降低视觉差异阈值或跳过失败用例。

## 第五步：提交并上传

先检查差异，确保只包含本次修改：

```bash
git status --short
git diff --check
git diff
```

然后使用能准确描述改动的提交信息：

```bash
git add <本次修改的文件>
git commit -m "feat: 简要描述本次修改"
git push origin codex/premium-card-redesign
```

不要直接推送到 `main`，不要强制推送。推送成功后，提交会自动出现在 Pull Request #3 中。

## 发生冲突或协作更新时

开始新一轮工作前先获取同事更新：

```bash
git status --short
git pull --ff-only origin codex/premium-card-redesign
```

如果 `--ff-only` 失败或出现冲突，停止自动修改，向用户说明冲突文件和原因，不要使用 `git reset --hard`、强制覆盖或强制推送。

## 给用户的完成报告

完成后用简洁中文报告：

- 改了哪些视觉或功能
- 本地预览地址
- 三项检查是否通过
- 最新提交编号
- 是否已成功推送至 `codex/premium-card-redesign`
- Pull Request：`https://github.com/eclipsez/asklume-homepage/pull/3`

