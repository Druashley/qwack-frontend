Qwack - A Local Soundboard

Introduction

Qwack is a frontend application designed to set up a local soundboard. The goal is to create an intuitive and customizable interface that allows users to trigger audio files stored on their system. This project is still in its earliest stages, and this README will serve as a journal to document progress, ideas, and technical decisions along the way.

Vision

Qwack aims to be:

Local-First: No cloud dependencies—your sounds stay on your machine.

Minimal & Fast: A lightweight interface that loads quickly and responds instantly.

Highly Customizable: Users should be able to map sounds to buttons, hotkeys, or even external controllers.

Cross-Platform: While development is currently on Linux (Ubuntu 24.04), the long-term goal is to support macOS and Windows as well.

Current State

Right now, Qwack is in its infancy. The core ideas and structure are still being developed, but here’s what exists so far:

Frontend Framework: TBD (considering Next.js with React + TailwindCSS for a sleek UI)

Backend/Audio Handling: A simple Go server to play audio files via WebSocket messages

UI Concept: Basic layout ideas for organizing buttons and settings

Technical Stack (Tentative)

Frontend: Next.js (React 18, TypeScript, TailwindCSS)

Backend: Go WebSocket server for handling audio triggers

Database: None for now (config stored locally)

Audio Playback: FFmpeg or native browser APIs

Development Journal

Day 1 - Initial Thoughts

The idea of a local soundboard came from wanting a simple way to trigger audio files without bloated third-party apps.

First concept: A webpage with buttons that send WebSocket messages to a Go backend, which then plays the corresponding sound.

Next Steps

Finalize the frontend framework choice.

Implement a prototype UI with placeholder buttons.

Set up the WebSocket connection between the frontend and backend.

Test audio playback responsiveness.

Contributing

Since this is a personal project in its early stages, contributions are not open yet. However, feedback and suggestions are always welcome!

License

This project is currently private, but I may open-source it in the future under an MIT or GPL license.

This README will be updated regularly as Qwack evolves. Stay tuned!

