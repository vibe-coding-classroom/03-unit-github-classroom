Viewed 03-unit-github-classroom.html:1-697

針對 **`03-unit-github-classroom` (Classroom 與 Vibe Coding 實務)** 單元，由於這是銜接入門與進階開發的「關鍵橋樑」，其作業 (Assignments) 涵蓋了從 AI 提示詞到工程自動化的全維度。

以下是針對這 **9 個核心任務** 在 GitHub Classroom 部署的整合性建議：

### 1. 部署模式建議：單一大型專案 (Monolith Portfolio)
建議將這 9 個任務整合在 **同一個 GitHub Classroom 作業** 中。
*   **作業名稱**：`vibe-coding-professional-standard`
*   **優點**：學員在同一個倉庫中能完整體現從「定義 (Vibe)」到「實作 (Commit)」再到「自動化 (CI/CD)」的思考進化過程。

---

### 2. 各模組部署策略與技術細節

#### 🟦 Module 1：定義與願景 (AI 素養)
*   **任務 1-2 糾正幻覺 (Hallucination Audit)**：
    *   **範本部署**：提供一個 `buggy_code.js`（內容可以是一個有 Bug 的陣列排序或 API 呼叫函數）。
    *   **驗證方式**：要求學生將「修正用 Prompt」寫在 `AUDIT.md` 並提交修復後的代碼。
*   **任務 1-3 微粒子提交 (Micro-commits)**：
    *   **要求**：明確限制此任務必須由至少 **3 個獨立的 Commit** 組成（例如：UI 結構、CSS 樣式、邏輯綁定）。
    *   **導師評核**：在 Classroom 儀表板檢查 Commit 節奏，這能確認學生不是直接從 AI 複製整大塊代碼。

#### 🟪 Module 2：工作流實踐 (Git Flow)
*   **任務 2-3 紅燈轉綠燈 (Autograding Fix)**：
    *   **部署技巧**：範本倉庫中的測試檔案 (`tests/check.test.js`) 預設應為 **「失敗」** 狀態。
    *   **過關標準**：學生必須經歷「Push -> 紅燈 -> 線上查報錯 -> 修正 -> Push -> 綠燈」的過程。
    *   **驗證**：查看 Actions 歷史，必須有至少一次失敗（紅叉）後轉成功的紀錄。

#### 🟩 Module 3：自動化與矩陣 (工程思維)
*   **任務 3-1 規格說明書 (Spec-First)**：
    *   **範本部署**：提供一個結構良好的 `SPEC.md` 空範本，引導學生練習 Markdown 的表格與代碼塊語法。
*   **任務 3-2 安全性審計**：
    *   **部署技巧**：在範本代碼中故意寫入一個 **Hardcoded API Key**。
    *   **驗證**：檢查學生是否將該 Key 移至 `.env` 或 `secrets` 中，並在審計報告中提出說明。

---

### 3. 推薦範本倉庫結構 (GitHub Classroom Template)
```text
.
├── .github/workflows/    # 預置的自動評分腳本
├── src/                  
│   └── buggy_code.js     # 任務 1-2 的偵錯對象
├── docs/                 
│   ├── VIBE.md           # 任務 1-1 填寫處
│   ├── SPEC.md           # 任務 3-1 填寫處
│   └── AUDIT.md          # 任務 3-2 填寫處
├── tests/                
│   └── lab.test.js       # 任務 2-3 的紅燈測試腳本
└── package.json          # 預設開發依賴
```

### 💡 導師評核建議：
本單元不應只看「最後有沒有 ✅」，更要看「**Git 歷史紀錄**」。一個專業的 Vibe Coder 會留下清晰的對話/修正足跡。建議導師在 **Feedback Pull Request** 中，針對學生的 `AUDIT.md`（修正 AI 幻覺的邏輯）給予具體回饋，這對提升學生的「定義力」非常有幫助。
