# PDF-CHAT AI ✨

An AI-powered PDF chat built with Next.js 13, Vercel's AI SDK, Langchain, and PineconeDB


## Architecture

<img width="1402" alt="Embed LLM" src="https://github.com/rajeshdavidbabu/pdf-chat-ai-sdk/assets/15684795/b1252438-f5b3-4df3-aecc-245553006a60">

## 👩‍🚀 Description

Built with:
- ✅ Next.js 13
- ✅ Vercel's AI SDK
- ✅ Shadcn-ui
- ✅ Langchain TypeScript integration
- ✅ PineconeDB as the knowledge store
- ✅ Dark Mode with persistent theme-switching

## 🗃️ Pre-requisites
- Create a free account and get an GOOGLE_AI key from [https://ai.google.dev](https://platform.openai.com/)

- Create a free account and get access to [PineconeDB](https://app.pinecone.io/)

- And populate your .env file with the required information.

## 💬 Good to know

- The PineconeDB index creation happens when we run npm run prepare:data, but its better to create it manually if you dont want the command to fail.

- If the command fails, then give sometime for pinecone index to get initialized and try to run the command again, it should work eventually.

## 🧞 Commands

All commands are run from the root of the project:

| Command               | Action                                          |
| :-------------------- | :-----------------------------------------------|
| npm install         | Installs dependencies                           |
| npm run prepare:data| Splits your PDF file under the /docs folder into chunks, embeds them, uploads them to Pinecone|
| npm run dev         | Starts the local dev server at localhost:3000 |