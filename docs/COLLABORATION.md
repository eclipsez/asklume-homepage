# AskLume 双人协作指南

这份指南适用于仓库成员 `eclipsez` 和 `CAE-expedition`。

## 核心规则

只需要记住三条：

1. 开始修改前，先同步最新代码。
2. 每一项修改使用独立分支，不直接修改 `main`。
3. 合并前由另一位成员检查一次。

## 推荐分工

- 修改人：完成设计或代码修改、运行检查、说明改了什么。
- 检查人：打开预览、检查桌面端和手机端、确认没有影响其他区域。
- 每次任务可以互换角色，不需要固定谁负责开发。

## 一次完整修改的流程

### 1. 同步最新代码

```bash
git switch main
git pull origin main
```

### 2. 创建修改分支

分支名用简短英文说明这次修改：

```bash
git switch -c feature/improve-benefit-cards
```

常用前缀：

- `feature/`：增加功能或视觉效果。
- `fix/`：修复问题。
- `content/`：修改文案或图片。

### 3. 启动网站并修改

```bash
npm install
npm run dev
```

浏览器打开终端显示的网址。修改过程中同时检查桌面端和手机端。

### 4. 提交前检查

```bash
npm run test:run
npm run build
```

两项都成功后再提交。

### 5. 保存修改

```bash
git status
git add 需要提交的文件
git commit -m "说明这次修改"
```

提交说明示例：

```text
improve benefit card interactions
fix mobile navigation spacing
update homepage service copy
```

### 6. 推送分支

```bash
git push -u origin 当前分支名
```

例如：

```bash
git push -u origin feature/improve-benefit-cards
```

### 7. 创建 Pull Request

在 GitHub 仓库页面点击 `Compare & pull request`，填写：

- 改了什么。
- 为什么修改。
- 如何检查。
- 如果涉及视觉，附上桌面端和手机端截图。

然后邀请另一位成员检查。

### 8. 检查与合并

检查人需要确认：

- 页面能正常打开。
- 目标效果符合预期。
- 桌面端与手机端都没有布局异常。
- 测试与构建通过。
- 没有误改无关内容。

确认后，在 GitHub 点击 `Approve`，再合并到 `main`。

## 开始下一项修改前

上一个 Pull Request 合并后，本地重新同步：

```bash
git switch main
git pull origin main
```

然后再创建一个新的分支。不要长期重复使用已经合并的旧分支。

## 如果两个人修改了同一个位置

先不要强制覆盖，也不要删除对方的代码。按下面操作：

```bash
git switch main
git pull origin main
git switch 你的分支名
git merge main
```

如果出现冲突，先和另一位成员确认应该保留哪一版，再解决冲突、重新测试并提交。无法确认时，暂停合并并在 Pull Request 中说明。

## 紧急修复

即使是紧急问题，也建议使用 `fix/问题名称` 分支。修复完成后由另一位成员快速检查，再合并到 `main`，避免主分支出现无法追踪的修改。

## 发布前的共同检查

- 首页主要文案正确。
- Banner 和图标正常显示。
- 桌面端、平板和手机端没有横向溢出。
- 菜单、按钮和链接可以操作。
- `npm run test:run` 通过。
- `npm run build` 通过。
