# 北京市蒙通货运服务有限责任公司 — 官方网站

基于 Astro 构建的蒙通货运企业官网，涵盖公司介绍、核心优势、业务生态、京蒙物流网络可视化等完整页面。

## 技术栈

- **[Astro](https://astro.build)** — 静态站点生成框架
- **[React](https://react.dev)** — 交互式组件（Feature Cards、Navbar）
- **[Tailwind CSS v4](https://tailwindcss.com)** — 原子化样式
- **[高德地图 AMap](https://lbs.amap.com)** — 物流网络 3D 可视化
- **[Lucide Icons](https://lucide.dev)** — 图标库

## 项目结构

| 目录/文件 | 说明 |
|-----------|------|
| `public/images/` | Logo、微信二维码、营业执照等静态资源 |
| `src/components/` | Navbar.tsx, Hero.astro, Features.astro, FeatureCards.tsx, Philosophy.astro, Protocol.astro, NetworkPreview.astro, Services.astro, Footer.astro |
| `src/layouts/Layout.astro` | 全局布局（HTML head、meta、字体加载） |
| `src/pages/index.astro` | 首页（组装所有区块组件） |
| `src/pages/network.astro` | 物流网络地图页（AMap 3D 全屏可视化） |
| `src/styles/global.css` | 全局样式 & Tailwind CSS 主题配置 |
| `res/` | 原始素材目录（不参与构建） |

## 页面概览

| 路径 | 说明 |
|------|------|
| `/` | 首页：英雄区 → 核心优势 → 经营理念 → 履约流程 → 物流网络预览 → 业务生态 → 页脚 |
| `/network` | 全屏 3D 地图，展示京蒙干线 22 个节点城市的脉冲飞线可视化 |

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器 (http://localhost:4321)
npm run dev

# 构建生产版本
npm run build

# 本地预览生产构建
npm run preview
```

## 部署到 GitHub Pages

1. 在仓库 Settings → Pages 中选择 **GitHub Actions** 作为部署源。
2. 创建 `.github/workflows/deploy.yml`（参见下方配置）。
3. 推送代码后，GitHub Actions 将自动构建并部署。

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## 公司信息

- **公司名称**：北京市蒙通货运服务有限责任公司
- **统一社会信用代码**：91110115802097553M
- **地址**：北京市大兴区兴华大街（二段）3号院2号楼5层605
- **电话**：13910225509 / 13701282504
- **联系人**：常俊灵
- **邮箱**：mengtonghuoyun@163.com
