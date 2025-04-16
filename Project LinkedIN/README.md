# LinkedIn Profile Enhancer Widget

A Chrome extension that enhances LinkedIn profile pages by injecting a dynamic widget displaying company-specific insights like match score and account status.

## 🚀 Features

- 🔍 Automatically injects a floating widget into LinkedIn profile pages
- 📊 Displays:
  - **Company Name** (bold text)
  - **Match Score** (0–100 with progress bar)
  - **Account Status** (colored tag: green for "Target", red for "Not Target")
- 🎛 Toggle widget visibility (Show/Hide) using `chrome.storage`
- 📦 Uses static JSON data for demo purposes
- 💡 Built with plain JavaScript (ES6+), HTML, and CSS
- 📱 Responsive UI (max width: 300px)

---

## 🧩 Tech Stack

- JavaScript (ES6+)
- HTML & CSS
- Chrome Extensions API
- `content.js` for DOM injection
- `chrome.storage` for local data persistence

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/linkedin-profile-enhancer-widget
   cd linkedin-profile-enhancer-widget
Load the extension in Chrome:
Open chrome://extensions/
Enable Developer Mode
Click Load unpacked
Select the project directory
## `💡 How It Works`
When viewing a LinkedIn profile, the content.js script automatically runs and injects a styled widget onto the page.
The widget displays data from a static JSON structure:
```
{
  "companyName": "TechCorp",
  "matchScore": 86,
  "accountStatus": "Target"
}
```
Match score is shown via a progress bar.
Account status is color-coded:
`🟢 Green: "Target" &
🔴 Red: "Not Target"`
A toggle button allows users to show or hide the widget, and the state is saved using chrome.storage.
## `📁 Project Structure`
```
├── manifest.json
├── content.js
├── styles.css
├── widget.html
└── icons/
```
