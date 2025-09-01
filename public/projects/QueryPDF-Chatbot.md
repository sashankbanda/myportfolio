### Key Features
* **Multi-PDF Upload:** Process several documents at once.
* **AI-Powered Q&A:** Ask natural language questions about your documents.
* **Source Citations:** Get answers with verifiable page numbers.
* **Side-by-Side View:** Read your PDF and chat with the AI on the same screen.

***
### Description

This is a **"Chat with your PDF"** web application. 📄💬

You can upload one or more PDF documents through a web page. After uploading, the application processes the documents and takes you to a chat screen. On this screen, you can see the content of your PDFs on one side and a chat window on the other. You can then ask questions in plain English, and an AI will answer them based *only* on the information found in your uploaded documents. The AI also provides citations, showing you the exact page number and document where it found the answer.

The application also includes a nice dark/light mode theme toggle for user comfort. ☀️🌙

---

### Techstack 💻

* **Backend (The "Brain" 🧠):**
    * **Python:** The main programming language for the server.
    * **Flask:** A simple web framework to handle requests from the user's browser (like file uploads and questions).
    * **LangChain:** A library that helps connect and manage the different AI components.
    * **Groq API (Gemma2 model):** Provides the powerful and fast Large Language Model (LLM) that understands and generates answers to your questions.
    * **Google Gemini API:** Used to create "embeddings," which turn the text from the PDFs into a numerical format that the AI can understand and search through efficiently.
    * **FAISS:** A special database that stores the numerical version of your PDF text, allowing for very fast searching to find the most relevant information for any given question.

* **Frontend (The "Face" 👀):**
    * **React:** A JavaScript library for building the user interface you see and interact with in your web browser.
    * **Axios:** A tool for sending requests from the frontend (your browser) to the backend (the Python server).
    * **React-PDF:** A component used to display the PDF documents directly on the web page.

---

### Problem 🤔

Imagine you have a very long and complicated PDF document, like a research paper, a legal contract, or a technical manual. Finding specific information inside it can be slow and difficult. You might have to read through many pages or use a simple "find" function (Ctrl+F) that only works for exact keywords, not for concepts or related ideas.

---

### Solution ✨

This project solves that problem by creating an intelligent search and summary tool for your documents. Here's how it works step-by-step:

1.  **Upload:** You select one or more PDFs from your computer on the website.
2.  **Processing:** The backend server takes your PDFs and reads all the text. It breaks this text into smaller, manageable chunks.
3.  **Understanding (Vector Embedding):** It uses Google's AI to convert each text chunk into a special numerical code (a "vector"). This code represents the *meaning* of the text, not just the words. All these codes are stored in the super-fast FAISS database.
4.  **Asking a Question:** You type a question into the chatbox (e.g., "What were the main conclusions of the study?").
5.  **Finding Relevant Info (Retrieval):** The backend converts your question into the same kind of numerical code. It then uses the FAISS database to instantly find the text chunks from the PDF whose codes are the most similar in meaning to your question's code.
6.  **Generating an Answer:** The backend sends your question along with the relevant text chunks it found to the Groq AI. It instructs the AI, "Answer this question using *only* this information I've provided."
7.  **Displaying the Result:** The AI generates a clear answer and sends it back to you. The answer is displayed in the chat, along with clickable links to the source pages in the PDF, so you can easily verify the information yourself.