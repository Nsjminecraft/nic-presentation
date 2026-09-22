# NIC Presentation

A premium web presentation about **Network Interface Cards** — built for an English 10 class project.

Dark-mode, animated, scroll-driven presentation with 12 sections covering what NICs are, how they work, their components, specs, manufacturers, and the future of networking.

## Tech Stack

- **Frontend:** React 18 + Vite + Tailwind CSS + Framer Motion
- **Backend:** Flask (serves the built React app)

## Sections

1. Hero
2. What is a NIC?
3. Types of NICs
4. Standards (Ethernet, Wi-Fi)
5. How It Works (data flow)
6. Inside a NIC (interactive diagram)
7. Technical Specifications
8. Manufacturers & Costs
9. Future Advancements
10. Fun Facts
11. Bibliography
12. Quiz (2 questions)

## Quick Start

```bash
# Build the frontend
cd frontend
npm install
npm run build

# Run the backend
cd ../backend
pip install -r requirements.txt
python run.py
```

Open [http://localhost:5000](http://localhost:5000).

Or just run:

```bash
./start.sh
```

## Dev Mode

```bash
cd frontend
npm run dev   # Vite dev server on :5173
```

## Structure

```
├── backend/
│   ├── app.py          # Flask app
│   ├── requirements.txt
│   └── run.py
├── frontend/
│   ├── src/
│   │   ├── components/ # Sidebar, ProgressBar, SectionWrapper
│   │   ├── sections/   # 12 presentation sections
│   │   └── hooks/      # useActiveSection, useScrollProgress
│   ├── tailwind.config.js
│   └── vite.config.js
├── start.sh
└── STUDY_GUIDE.md
```

## License

MIT
