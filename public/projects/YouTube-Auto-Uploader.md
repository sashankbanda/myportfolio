### Description 📝

This project is a smart bot that automatically uploads videos from your computer to your YouTube channel. You can control everything from an Excel spreadsheet—telling the bot which video to upload, what its title and description should be, what tags to use, and when to schedule it for release.

The bot is designed to run continuously. It periodically checks the Excel file and your video folder, uploading any new videos it finds. To avoid mistakes, it keeps a log and also checks your channel to make sure it never uploads the same video twice.

---

### Tech Stack 💻

* **Language**: **TypeScript** (a powerful version of JavaScript)
* **Runtime**: **Node.js** (allows the script to run on your computer, not in a browser)
* **Key Libraries**:
    * `googleapis`: To talk to the YouTube API for uploading videos.
    * `xlsx`: To read the data from your Excel file.
    * `dotenv`: To manage your secret API keys and settings safely.
    * `fs-extra`: To work with the video files on your computer.

---

### Problem Solved 🤔

Manually uploading a large number of videos to YouTube is slow and repetitive. For content creators who produce videos in bulk, scheduling each one through the YouTube interface is a tedious chore. It's difficult to manage metadata (titles, descriptions, tags) for many videos at once.

---

### Solution ✨

This project solves the problem by creating an automated workflow:

1.  **Central Control with Excel**: You list all your videos in an Excel file. Each row represents a video and contains all its information: the file location, title, description, tags, and even the exact date and time to schedule the upload.

2.  **Automated Checks**: The program starts by reading this Excel file. For each video listed, it first checks if it has already been uploaded by consulting a log file (`uploaded_videos.json`) and by checking the titles of videos currently on your YouTube channel.

3.  **Smart Scheduling**:
    * If you specify a schedule date in the Excel file, the bot uses it.
    * If you don't, the bot is smart enough to find the last video you scheduled and sets the new video to be published a set amount of time after it (e.g., one day later), ensuring a consistent upload schedule.

4.  **Uploading**: If the video is new, the bot uploads the video file to your YouTube channel with all the details you provided in the Excel sheet.

5.  **Continuous Operation**: The entire process runs on a loop. After it finishes checking and uploading, it waits for a set period (e.g., a few hours) and then runs again, making it a "set it and forget it" tool for your YouTube channel.
