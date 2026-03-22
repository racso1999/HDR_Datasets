# HDR Datasets App

Here is my web application, which displays all of the raw data in an HTML table. The app runs on Next.js for both the frontend and backend. I used Tailwind for styling.

I wanted to showcase a fast, lightweight solution to the problem with no unnecessary features. I kept AI usage to a minimum (see `ai-usage.txt`) to demonstrate foundational knowledge of JavaScript and Next.js.

I built a quick tokenised search engine where Terms are matched based on individual word matches. This creates an intuitve filtering workflow and keeps things slick.


## Docker Quick Start

### Option 1: Docker Compose

```bash
docker compose up --build
```

App URL: `http://localhost:3001`

Stop:

```bash
docker compose down
```

### Option 2: Dockerfile

```bash
docker build -t hdr-datasets:latest .
docker run --rm -p 3001:3000 --name hdr-datasets-app hdr-datasets:latest
```

App URL: `http://localhost:3001`