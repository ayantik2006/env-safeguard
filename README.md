# env-safeguard

A lightweight Node.js utility to validate environment variables at startup and prevent runtime errors caused by missing or misconfigured `.env` values.

---

## Installation

```bash
npm install env-safeguard
```

---

## Features

- Validate required environment variables
- Detect missing variables
- Validate data types (`string`, `number`, `boolean`)
- Generate `.env.example` automatically
- Clear and readable error messages
- Lightweight and easy to use

---

## Usage

```javascript
const { checkEnv } = require("env-safeguard");

checkEnv({
  PORT: "number",
  MONGO_URI: "string",
  DEBUG: "boolean"
});
```

If the environment variables are valid, your application will continue running normally.

---

## Example `.env`

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/mydb
DEBUG=true
```

---

## Example Error Output

❌ Environment validation failed

```
Missing variables:
- JWT_SECRET

Invalid types:
- PORT must be a number`
```


---

## Supported Types

| Type | Description |
|-----|-------------|
| string | Any text value |
| number | Numeric value |
| boolean | Must be `true` or `false` |

---

## License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute this software with proper attribution.

---

## Author

**Ayantik Sarkar**

- GitHub: https://github.com/ayantik2006  
- LinkedIn: https://www.linkedin.com/in/ayantiksarkar

---

## Acknowledgements

Thanks to the open-source community for building tools that make Node.js development easier.

Special thanks to developers who rely on environment-based configuration and inspired the idea behind **env-safeguard**.

---

## Contributing

Contributions, issues, and feature requests are welcome.  
Feel free to open a pull request or create an issue.

---

⭐ If you find this package helpful, consider giving it a star on GitHub!