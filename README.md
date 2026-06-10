# 🧠 Syntax — AI-Powered Data Structures & Algorithms Chatbot

[![Python](https://img.shields.io/badge/Python-3.x-blue?logo=python)](https://python.org)
[![Claude](https://img.shields.io/badge/Powered%20by-Claude%20AI-orange)](https://anthropic.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)
[![Difficulty](https://img.shields.io/badge/Levels-Beginner%20%7C%20Intermediate%20%7C%20Advanced-green)]()

An intelligent, instructor-style chatbot that teaches **Data Structures & Algorithms** the way a great mentor would — with hints before answers, visual diagrams, adaptive difficulty, and hands-on practice.

> _"Don't just give the answer. Teach the thinking."_

---

## 📋 Table of Contents

- [Features](#-features)
- [How It Works](#-how-it-works)
- [Supported Topics](#-supported-dsa-topics)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Usage Examples](#-usage-examples)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 📖 DSA Concept Explanations
Clear, structured explanations for all core DSA topics — arrays, linked lists, trees, graphs, hashing, stacks, queues, recursion, dynamic programming, greedy algorithms, and more.

### 🪜 Step-by-Step Problem Solving
The chatbot behaves like a real instructor:
```
1. Gives a hint to nudge your thinking
2. Walks through the thought process
3. Reveals the full solution only when ready
```
No hand-holding. No spoilers. Just guided learning.

### 💻 Multi-Language Code Generation
Get working, well-commented code in your preferred language:

| Language | Supported |
|----------|-----------|
| Python   | ✅        |
| Java     | ✅        |
| C++      | ✅        |
| C        | ✅        |

### 📊 Visualization Support
Text-based diagrams and pseudo-visuals for:
- Binary trees and BSTs
- Recursion call stacks
- Dynamic programming tables
- Graph traversal (BFS/DFS)
- Linked list structure

### 🎯 Difficulty Levels
Switch modes anytime:
- 🟢 **Beginner** — fundamentals, intuition-first explanations
- 🟡 **Intermediate** — pattern recognition, complexity analysis
- 🔴 **Advanced** — optimization, edge cases, competitive-level problems

### 🧪 Quizzes & Practice Problems
- Timed coding challenges
- Multiple choice concept quizzes
- Curated practice problem sets by topic and difficulty

### 🐛 Code Debugging
Paste your code and the chatbot will:
- Identify logical errors in your DSA implementation
- Explain *why* it's wrong, not just what's wrong
- Suggest targeted fixes and best practices

---

## 🔄 How It Works

```
User asks a question or pastes a problem
         │
         ▼
  Chatbot identifies topic & difficulty
         │
         ▼
  Hint → Thought Process → Solution
         │
         ▼
  Code generated in chosen language
         │
         ▼
  Visual diagram (if applicable)
         │
         ▼
  Follow-up quiz or related problem offered
```

---

## 📚 Supported DSA Topics

| Category              | Topics Covered                                              |
|-----------------------|-------------------------------------------------------------|
| **Linear Structures** | Arrays, Strings, Linked Lists, Stacks, Queues, Deques      |
| **Trees**             | Binary Trees, BST, AVL, Segment Trees, Tries, Heaps        |
| **Graphs**            | BFS, DFS, Dijkstra, Bellman-Ford, Floyd-Warshall, MST      |
| **Recursion**         | Base cases, Call stack, Backtracking, Divide & Conquer     |
| **Dynamic Programming** | Memoization, Tabulation, Classic DP problems             |
| **Sorting & Searching** | Merge, Quick, Heap sort, Binary Search, Two Pointers     |
| **Hashing**           | Hash maps, Collision handling, Frequency problems          |
| **Greedy**            | Activity selection, Interval scheduling, Huffman coding    |
| **Bit Manipulation**  | XOR tricks, Bitmasking, Power of two checks                |

---

## 🛠️ Tech Stack

| Component       | Technology                        |
|-----------------|-----------------------------------|
| AI Engine       | Claude API / OpenAI GPT           |
| Backend         | Python                            |
| Interface       | CLI / Web (Flask or Streamlit)    |
| Code Execution  | Judge0 API / local sandbox        |
| Visualization   | Text-based ASCII / Matplotlib     |

---

## 🚀 Getting Started

### Prerequisites
- Python 3.8 or higher
- An API key for your chosen AI provider (Claude / OpenAI)
- pip

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dsa-tutor-chatbot.git
cd dsa-tutor-chatbot
```

### 2. Create and Activate a Virtual Environment

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
AI_API_KEY=your_api_key_here
DIFFICULTY=beginner        # beginner | intermediate | advanced
DEFAULT_LANGUAGE=python    # python | java | cpp | c
```

### 5. Run the Chatbot

```bash
python main.py
```

---

## 💬 Usage Examples

**Explain a concept:**
```
You: Explain how a min-heap works.
Bot: A min-heap is a complete binary tree where every parent node is
     smaller than its children. The root always holds the minimum value...
     [diagram shown]
```

**Solve a problem (hint mode):**
```
You: How do I find the longest common subsequence of two strings?
Bot: 💡 Hint: Think about what happens when the last characters match
     vs when they don't. Can you break this into smaller subproblems?
```

**Debug code:**
```
You: [pastes broken binary search implementation]
Bot: Found it — your mid calculation on line 6 can cause integer overflow.
     Change `(low + high) / 2` to `low + (high - low) / 2`. Here's why...
```

**Generate code:**
```
You: Show me BFS in Java.
Bot: Here's a clean BFS implementation with comments explaining each step...
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add: your feature description"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Ideas for contributions:
- New DSA topic coverage
- Better ASCII visualization for graphs
- Web UI improvements
- Support for additional programming languages

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Built with ❤️ for every student who ever stared at a LeetCode problem for 3 hours.

---

> ⭐ Star this repo if it helped you crack that interview or ace that exam!
