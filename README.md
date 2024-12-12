This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# portofolio

# ファイル構成について

- 全てのページは app/配下におく
  - ルートは page.tsx
  - それ以外のページは、ページ名/page.tsx
  - page が呼ぶのは,components/pages の該当ファイルのみ
- components/pages
  - API との接続やロジックはここで持つ
  - それぞれの page 内でのみ使用する data や utils はこの中に置く
- components/organisms
  - ロジックを持つ共通コンポーネント
- components/molecues
  - ロジックを持たない共通コンポーネント
- fragments
  - そのファイル内でのみ使われるコンポーネント
  - 別のファイルでも使われる場合は organisms か molecules に移動する
- hooks
  - 複数 page に渡る hooks を置く
- utils
  - 複数箇所で使われる定数や関数など。
  - 関数に関しては必ずテストを書く
