### Description
This project is a website that automatically turns spoken audio into written text. You can upload an audio file (like an MP3 or WAV), and the website will listen to it and type out everything that's said. While it's working, you can see live updates on its progress. Once it's finished, it gives you the complete text and a button to download it as a PDF document.



***

### Techstack 💻
The project uses two main parts that work together: a **frontend** (the website you see and interact with) and a **backend** (the server that does all the heavy lifting).

* **Frontend (Client-Side):**
    * **React.js:** A popular library for building the user interface—all the buttons, progress bars, and text boxes you see on the screen.
    * **HTML/CSS:** Used for the structure and styling of the website to make it look good.

* **Backend (Server-Side):**
    * **Flask (Python):** A lightweight framework that runs the server. It handles file uploads, processes the audio, and sends back the results.
    * **OpenAI Whisper:** This is the **AI brain** of the operation. It's a powerful model that listens to the audio and converts speech into accurate text.
    * **Other Python Libraries:** Tools like `pydub` to handle different audio formats and `fpdf` to create the final PDF file.

***

### Problem 🤔
Manually transcribing audio is **slow, tedious, and expensive**. If you have recordings of meetings, interviews, lectures, or podcasts, typing them out by hand can take hours. There's a need for a simple tool that can automate this process quickly and accurately.

***

### Solution ✨
This application provides an easy-to-use, automated solution. Here’s how it works step-by-step:

1.  **Upload:** You select an audio file from your computer on the website and click "Upload." A progress bar shows you the upload status in real time.

2.  **Processing on the Server:**
    * The Flask server receives the audio file.
    * It first converts your file into a standard `.wav` format to ensure the AI can read it properly.
    * Since the AI works best with shorter audio clips, the server intelligently splits your long audio file into smaller, 30-second chunks with a slight overlap to avoid missing any words.

3.  **AI Transcription:**
    * The server sends these small audio chunks one by one to the **OpenAI Whisper** model.
    * As the AI transcribes each chunk, the server sends live status updates back to your browser (e.g., "Transcribing chunk 3/10..."). You see these updates appear on the screen.

4.  **Final Result:**
    * Once all chunks are transcribed, the server stitches the text pieces together to form the complete transcript.
    * It then generates a **PDF file** containing this final text.
    * The website displays the full transcription and a "Download PDF" button, allowing you to save the document.