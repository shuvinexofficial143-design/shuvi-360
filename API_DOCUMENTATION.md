# API
GET /api/health: application-only JSON status, explicitly reports database not configured. No authenticated APIs or write endpoints yet. Future lead/meeting endpoints require server-side Zod validation, consent, rate limiting and persisted success; private APIs require session, role and resource authorization.
