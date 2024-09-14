
# SKYNET

## Project Overview

This project is an AI-powered chatbot integrated with Umbraco CMS. The chatbot allows users to automatically create content based on their requests. The administrator dashboard is built using Lit, and the chatbot is powered by GPT language models.

for thec frontend code use this repository https://github.com/julian-gallo-nexer/Skynet/

## Technologies Used

CMS: Umbraco 14

Frontend: Lit (for the dashboard interface)

Backend: Umbraco

AI: GPT models

Languages: C#, JavaScript

#### Frameworks and Libraries: 
- Umbraco for content management

- Lit for building web components

- GPT API for the AI chatbot

## Features
#### AI Chatbot:

- Responds to user inquiries.
- Automatically generates content based on user requests.

#### Admin Dashboard:
- Lit-based interface to manage chatbot interactions.
- Customize responses and content settings.


## Installation and Setup

### Prerequisites

- Node.js v20.15 and npm
- .NET 8
- Umbraco CMS 14
- Access to GPT API

### Installation Instructions
Clone this repository:

```bash
Copiar c�digo
git clone https://github.com/your-repo/chatbot-umbraco.git
```

Navigate to the project directory:

```bash
Copiar c�digo
cd skynet
```

Install frontend dependencies:

```bash
Copiar c�digo
npm install
```

Make sure you have your Umbraco credentials and GPT API access configured.

#### Run the project:

For the frontend (compliate in the umbraco proyect):
```bash
Copiar c�digo
npm buid
```

For the backend (Umbraco):
```bash
Copiar c�digo
dotnet run
```
    
## Usage/Examples

Open the admin dashboard to configure the chatbot.
The chatbot will be available on the public site, allowing users to interact with the AI.
The AI will generate and publish content based on user requests in Umbraco CMS.

