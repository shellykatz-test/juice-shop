# syntax=docker/dockerfile:1
# Standalone Node.js container for security scanning demonstration
# Unique identifier: ARNICA-NODE-STANDALONE-v3.8.2
# Build timestamp: 2025-12-17T15:45:00Z
# Purpose: Self-contained Node.js container for vulnerability detection
# This Dockerfile requires no external files and builds completely standalone

FROM node:14.17.0-alpine AS builder
LABEL maintainer="nodedev@example.com"
LABEL project="node-security-demo"
LABEL version="3.8.2"
LABEL build-date="2025-12-17"
LABEL description="Standalone Node.js container with intentional vulnerabilities"

# Install build dependencies without version pinning
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    git \
    curl \
    wget \
    openssl

WORKDIR /app

# Create package.json with vulnerable dependencies inline
COPY <<'ARNICA_FILE' /app/package.json
{
  "name": "security-demo-app",
  "version": "3.8.2",
  "description": "Standalone demo application for container scanning",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "4.17.1",
    "body-parser": "1.19.0",
    "lodash": "4.17.15",
    "moment": "2.29.1",
    "axios": "0.21.0",
    "jsonwebtoken": "8.5.1",
    "bcrypt": "5.0.0",
    "dotenv": "8.2.0",
    "cookie-parser": "1.4.5",
    "cors": "2.8.5",
    "helmet": "4.4.1",
    "morgan": "1.10.0",
    "uuid": "8.3.2",
    "validator": "13.5.2",
    "ws": "7.4.0",
    "request": "2.88.0",
    "jquery": "3.4.1",
    "minimist": "1.2.5",
    "node-fetch": "2.6.0",
    "serialize-javascript": "3.0.0",
    "yargs-parser": "18.1.0",
    "ini": "1.3.5",
    "tar": "4.4.13",
    "underscore": "1.12.0",
    "handlebars": "4.7.6",
    "pug": "2.0.4",
    "ejs": "3.1.5",
    "marked": "1.1.1",
    "mustache": "4.0.1"
  },
  "devDependencies": {
    "nodemon": "2.0.7"
  },
  "engines": {
    "node": "14.x",
    "npm": "6.x"
  }
}
ARNICA_FILE

# Install dependencies with known vulnerabilities
RUN npm install --production --no-audit

# Install additional vulnerable global packages for SCA detection
RUN npm install -g --force --no-audit \
    npm@6.14.8 \
    yarn@1.22.4 \
    grunt@1.3.0 \
    gulp@4.0.2

# Create main application file with security vulnerabilities
COPY <<'ARNICA_FILE' /app/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const lodash = require('lodash');
const axios = require('axios');
const handlebars = require('handlebars');
const marked = require('marked');

const app = express();
const PORT = process.env.PORT || 8080;

// Hardcoded secrets (vulnerability)
const JWT_SECRET = 'hardcoded-jwt-secret-key-12345';
const API_KEY = 'sk_live_abcdefghijklmnopqrstuvwxyz';
const DB_PASSWORD = 'SuperSecret123!';

// Middleware with insecure configuration
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
app.use(cors({ origin: '*', credentials: true }));
app.use(morgan('combined'));

// Vulnerable endpoint: command injection
app.get('/exec', (req, res) => {
  const cmd = req.query.cmd || 'echo hello';
  try {
    const output = execSync(cmd, { encoding: 'utf8' });
    res.send({ success: true, output });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Vulnerable endpoint: path traversal
app.get('/file', (req, res) => {
  const filename = req.query.name;
  const filePath = path.join(__dirname, filename);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(404).send({ error: 'File not found' });
    res.send({ content: data });
  });
});

// Vulnerable endpoint: eval usage
app.post('/calculate', (req, res) => {
  const expression = req.body.expression;
  try {
    const result = eval(expression);
    res.send({ result });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Vulnerable endpoint: template injection
app.post('/render', (req, res) => {
  const template = req.body.template;
  const compiled = handlebars.compile(template);
  res.send(compiled(req.body.data));
});

// Vulnerable endpoint: markdown rendering
app.post('/markdown', (req, res) => {
  const markdown = req.body.markdown;
  const html = marked(markdown);
  res.send({ html });
});

// Endpoint exposing sensitive info
app.get('/config', (req, res) => {
  res.json({
    jwt_secret: JWT_SECRET,
    api_key: API_KEY,
    database: {
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: DB_PASSWORD
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.send({ status: 'ok', timestamp: new Date().toISOString() });
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Demo Application Running - Version 3.8.2');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
ARNICA_FILE

# Create additional vulnerable utility file
COPY <<'ARNICA_FILE' /app/utils.js
const crypto = require('crypto');

// Weak cryptography (vulnerability)
function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

// Insecure random generation
function generateToken() {
  return Math.random().toString(36).substring(2);
}

// Weak encryption
function encrypt(text, key) {
  const cipher = crypto.createCipher('des', key);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

module.exports = { hashPassword, generateToken, encrypt };
ARNICA_FILE

# Create environment file with secrets
COPY <<'ARNICA_FILE' /app/.env
NODE_ENV=production
PORT=8080
DATABASE_URL=postgresql://admin:SuperSecret123@db.example.com:5432/proddb
JWT_SECRET=hardcoded-jwt-secret-key-12345
API_KEY=sk_live_abcdefghijklmnopqrstuvwxyz
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLEKEY
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLESECRET
REDIS_PASSWORD=redis_password_123
SMTP_PASSWORD=smtp_pass_456
ADMIN_TOKEN=admin_super_secret_token_789
ARNICA_FILE

# Production stage with vulnerabilities
FROM node:12.22.0-alpine

# Install runtime packages without version pinning (SCA will flag these)
RUN apk add --no-cache \
    bash \
    curl \
    wget \
    netcat-openbsd \
    openssl \
    ca-certificates

# Create application directory
WORKDIR /app

# Copy application from builder including all vulnerable node_modules
COPY --from=builder /app /app

# Create log directory with overly permissive permissions (vulnerability)
RUN mkdir -p /app/logs && \
    chmod 777 /app/logs && \
    chmod 666 /app/.env

# Expose multiple ports
EXPOSE 8080
EXPOSE 3000
EXPOSE 9229

# Set environment variables
ENV NODE_ENV=production
ENV LOG_LEVEL=debug
ENV ENABLE_DEBUG=true
ENV MAX_OLD_SPACE_SIZE=2048

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Running as root user (vulnerability) - no USER directive specified
# This allows full system access and is a critical security issue

# Start application
CMD ["node", "server.js"]