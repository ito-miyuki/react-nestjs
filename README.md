# Todo App with React + NestJS

このプロジェクトは、フロントエンドに **React (TypeScript)**、バックエンドに **NestJS** を使用したシンプルなToDoアプリです。現在、**Docker対応は作業中**です。

## ✨ 機能

- 🔐 ユーザーログイン機能
- ✅ ToDoの作成・完了、未完了の更新・削除
- 🔍 ToDoの検索機能

## 🛠 セットアップ手順
現在、**Docker対応は作業中**のため、postgresSQL起動にのみ使用できます。

以下の手順で開発環境を構築できます。

# リポジトリをクローン
```bash
git clone https://github.com/ito-miyuki/react-nestjs.git
cd your-repo-name
```

# フロントエンドの起動
```
cd frontend
npm install
npm run dev
```

# 別ターミナルでバックエンドを起動
```
cd backend
npm install
docker compose up
npm run start:dev
```

