# System Architecture

## Overview

FirstStep Health is a client side web application that generates a personalized healthcare business startup roadmap based on information entered by the user.

The application is built using React and Vite and is deployed on Vercel.

Rather than relying on external APIs or AI services, the current prototype uses structured decision logic based on verified research and official UAE guidance to generate recommendations.

---

# High Level Workflow

```text
User
   │
   ▼
Questionnaire
   │
   ▼
User Inputs
   │
   ▼
Roadmap Generation Logic
   │
   ▼
Personalized Roadmap
   │
   ▼
Official UAE Resources
```

---

# Application Flow

## Step 1

The user opens the application and selects their preferred language.

Current languages:

- English
- Arabic

---

## Step 2

The user completes a short questionnaire that captures information such as:

- Intended healthcare service
- Existing qualifications
- Available budget
- Preferred operating model
- Intended location

---

## Step 3

The application processes the responses using predefined business rules based on verified research and official UAE guidance.

The generated roadmap includes:

- Personalized introduction
- Recommended first step
- Explanation of the recommendation
- Possible approval pathway
- Required documents
- Funding opportunities
- Estimated startup costs
- Suggested timeline
- Immediate next steps
- Official government resources
- Important disclaimer

---

## Step 4

The user reviews the roadmap and follows the provided links to official UAE government resources for further verification and action.

---

# Technology Stack

## Frontend

- React
- JavaScript
- Vite
- CSS

## Deployment

- Vercel

---

# Current Architecture

The current prototype performs all roadmap generation locally within the browser.

Benefits include:

- Fast response time
- No server required
- No user account required
- No personal information stored
- Low deployment cost

---

# Security Considerations

The current prototype does not collect or permanently store personal information.

User responses remain within the browser session and are used only to generate the roadmap.

No healthcare records, financial information, or government credentials are collected.

---

# Future Architecture

Future versions of FirstStep Health may include:

- AI assisted roadmap personalization
- Government API integration where available
- User authentication
- Saved roadmaps
- User dashboards
- Progress tracking
- Analytics for service improvement

These features are planned for future development and are not part of the current prototype.

---

# Design Philosophy

The application was designed around three principles:

### Simplicity

Generate useful guidance within a few minutes using a short questionnaire.

### Transparency

Present recommendations as possible pathways and encourage users to verify all regulatory information through official UAE government sources.

### Accessibility

Reduce the complexity of navigating multiple government websites by presenting relevant information in one organized roadmap.

---

# Repository Structure

```text
src/
├── components/
├── App.jsx
├── main.jsx

public/

docs/

package.json

vite.config.js
```