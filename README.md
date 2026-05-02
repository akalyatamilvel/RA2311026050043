# Campus Notifications Microservice

## Project Structure

- logging_middleware/
- notification_app_be/
- notification_app_fe/
- notification_system_design.md

## Logging Middleware
Created reusable logging middleware to send logs to the evaluation API.

Logs include:
- stack
- level
- package
- message

## Backend
- Fetches notifications from API
- Sorts notifications based on priority:
  - Placement
  - Result
  - Event
- Returns top notifications based on recency

## Frontend
Built using React + JavaScript

Features:
- Display notifications
- Filter by notification type
- Responsive UI
- Desktop and mobile views



## Tech Stack
- React
- JavaScript
- Node.js
- Axios
- CSS

## Output
Screenshots of API response and frontend UI are included.
