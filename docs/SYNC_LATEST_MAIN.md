# AskLume 项目本地更新与状态恢复指南

> **适用场景**：当远程 `main` 已合并最新 Pull Request，或者需要重置本地代码库到 GitHub 官方 `main` 主干的最新健康版本时使用。

## 🤖 针对 AI Agent (Antigravity) 的自动执行指令

如果你在 Antigravity 中运行此任务，请按以下步骤依次执行终端命令并验证结果：

### 步骤 1：放弃本地临时修改并切换至 main
```bash
git switch main
git reset --hard origin/main 2>/dev/null || git reset --hard
```

### 步骤 2：拉取 GitHub 远程仓库最新 main 主干
```bash
git fetch origin main
git pull origin main
```

### 步骤 3：安装/同步依赖项目
```bash
npm install
```

### 步骤 4：运行测试与类型编译验证
```bash
npm run test:run
npm run build
```

### 步骤 5：启动本地 Dev 开发服务器
```bash
npm run dev
```

---

## 校验标准 (Verification Checklist)

- [ ] `git status` 显示 `On branch main` 且 `working tree clean`
- [ ] `npm run test:run` 所有 43 项单元测试 100% 通过 (12/12 test files)
- [ ] `npm run build` 无 TypeScript 或 Vite 构建报错
- [ ] 浏览器访问 `http://localhost:5173/` 正常呈现，且顶部带有版本对比切换栏
