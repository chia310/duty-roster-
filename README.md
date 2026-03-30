# 每週值日生系統 (Duty Roster)

這是一個以 Vite + React + TypeScript 重構的每週值日生公佈欄專案。
原本的單頁式 HTML 頁面已被重構為現代化且易於維護的前端架構，並使用 Tailwind CSS 進行樣式管理與佈局。

## 專案結構

```
.
├── index.html                # 網頁進入點，載入字型與 FontAwesome 圖示
├── package.json              # 記錄專案相關套件、腳本與設定
├── vite.config.ts            # Vite 設定檔 (包含 Base Path 設定)
├── tailwind.config.js        # Tailwind CSS 設定檔
├── public/                   # 靜態資源資料夾
└── src/
    ├── main.tsx              # React 程式進入點
    ├── App.tsx               # 專案主要結構與狀態管理 (包括 localStorage 儲存)
    ├── index.css             # 全局樣式與 Tailwind CSS 核心載入
    ├── components/           # 所有 React UI 元件
    │   ├── Header.tsx        # 頂部標題與「編輯名單」按鈕
    │   ├── CurrentDuty.tsx   # 顯示本週值日生大看板
    │   ├── RulesBoard.tsx    # 值日生守則 (黑板風格)
    │   ├── Sidebar.tsx       # 側邊欄 (接續週次預告與小提醒)
    │   └── EditModal.tsx     # 編輯學生名單的浮動視窗 (Modal)
    └── utils/
        └── dateHelpers.ts    # 處理週次計算與日期轉換的共用函式
```

## 本機開發與指令

在開始之前，請確保您的環境中已安裝 [Node.js](https://nodejs.org/)。

### 1. 安裝依賴套件

第一次取得專案後，請先在專案根目錄執行以下指令下載所有依賴：

```bash
npm install
```

### 2. 啟動本機開發伺服器

執行以下指令，可以在本機啟動具有熱重載 (Hot-Reload) 功能的開發伺服器：

```bash
npm run dev
```
啟動後，終端機會顯示一個本機網址 (通常是 `http://localhost:5173`)，您可以在瀏覽器中開啟該網址預覽並進行測試。

### 3. 編譯生產版本 (Build)

如果您想要將專案編譯為可用於伺服器部署的靜態檔案，請執行：

```bash
npm run build
```
執行完畢後，所有打包好的靜態資源都會被輸出到 **`dist/`** 資料夾中。

---

## 網頁狀態保存機制 (localStorage)

相較於舊版的靜態網頁，這次的 React 版本擴充了狀態記憶功能：
- 當您編輯完值日生名單後，該名單會被同時寫入到瀏覽器的 **`localStorage`** 中。
- 等到下次您或任何人使用同一個瀏覽器開啟此頁面，系統會自動優先載入您先前儲存的名單。
- 此機制不會影響其他使用者的裝置（因為這是儲存在本地端瀏覽器），若需在所有裝置同步建議後續加上後端資料庫。

---

## 部署到 GitHub Pages 的方式

我們已經協助將 `gh-pages` 套件和部署用的腳本設定妥當，請按照以下步驟來部署您的網站：

1. **確認檔案設定**
   - 打開 `package.json`，確認 `"homepage": "."`。由於我們在 `vite.config.ts` 設定了 `base: './'`，這能確保使用相對路徑來載入各種資源（CSS/JS），讓網站能完美的放在任何 GitHub Repository 底下。
   
2. **初始化與推送 Git (如果您尚未綁定 GitHub)**
   如果這個資料夾還沒有推送到您的 GitHub，請執行：
   ```bash
   git init
   git add .
   git commit -m "Initialize React project"
   git remote add origin https://github.com/<您的帳號>/<您的Repository名稱>.git
   git push -u origin main
   ```

3. **執行一鍵部署指令**
   當您確定已經連結您的 GitHub Repository 後，只需要在終端機輸入：
   ```bash
   npm run deploy
   ```
   *（這會自動先執行 `npm run build`，接著把 `dist/` 裡的檔案推送到 `gh-pages` 分支）*

4. **開啟 GitHub Pages 設定**
   - 前往您的 GitHub Repository 網頁。
   - 點選右上角的 **Settings** > 左側選單的 **Pages**。
   - 在 **Build and deployment** > Source 中選擇 **Deploy from a branch**。
   - 下方的 Branch 選擇 **`gh-pages`** 分支，資料夾選擇 `/(root)`，接著點擊 Save。
   - 稍等約 1~2 分鐘，上方就會顯示您的網站已成功上線的專屬網址！
