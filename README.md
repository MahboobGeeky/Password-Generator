# 🔐 Password Generator (React)

A customizable password generator built using React and Tailwind CSS.  
Users can generate strong passwords with adjustable length and optional inclusion of numbers and special characters.

---

## 🚀 Features

- Generate random secure passwords
- Adjustable password length (4–30 characters)
- Option to include numbers
- Option to include special characters
- One-click copy to clipboard
- Auto-select password text when copied
- Real-time password regeneration on settings change

---

## 🛠️ Built With

- React (Functional Components)
- React Hooks
  - useState
  - useEffect
  - useRef
- Tailwind CSS
- JavaScript (ES6+)

---

## 📂 Project Structure
src/
│
├── App.css
├── App.jsx 
└── main.jsx

---

## ⚙️ How It Works

- Password is generated dynamically using a character pool.
- The character pool updates based on selected options (numbers/special characters).
- `useEffect` automatically regenerates password when:
  - Length changes
  - Number option changes
  - Character option changes
- `useRef` is used to access the input field and select the password text when copied.
- Clipboard API is used to copy the password.

---

## 📸 Preview


---

## 📦 Installation

1. Clone the repository: git clone https://github.com/MahboobGeeky/Password-Generator.git
2. Navigate into project folder: cd Password-Generator
3. Install dependencies: npm install
4. Run the project: npm run dev

## 👨‍💻 Author

Mahboob
