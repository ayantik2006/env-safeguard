const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");

function checkEnv(envs) {
  const missingVars = [];
  const mismatchedDataTypes = [];

  for (let env in envs) {
    if (!process.env[env]) {
      missingVars.push(env);
    } else {
      const value = process.env[env];

      switch (envs[env]) {
        case "boolean":
          if (!(value === "true" || value === "false"))
            mismatchedDataTypes.push(env + " must be boolean");
          break;
        case "number":
          if (isNaN(Number(value)))
            mismatchedDataTypes.push(env + " must be number");
          break;
        case "string":
          if (!isNaN(Number(value)))
            mismatchedDataTypes.push(env + " must be string");
          break;
        default:
          mismatchedDataTypes.push(env + " has invalid data type");
      }
    }
  }

  if (missingVars.length !== 0 || mismatchedDataTypes.length !== 0) {
    console.log("\n❌ Environment validation failed");
    console.log("--------------------------------");
  } else {
    generateEnvExample(envs);
  }

  if (missingVars.length !== 0) {
    console.log("Missing variables:");
    for (let vars of missingVars) {
      console.log("  • " + vars);
    }
  }

  console.log("");

  if (mismatchedDataTypes.length !== 0) {
    console.log("Mismatched variables:");
    for (let vars of mismatchedDataTypes) {
      console.log("  • " + vars);
    }
  }

  console.log("");

  process.exit(1);
}

function generateEnvExample(envs) {
  let content = "";

  for (let key in envs) {
    content += `${key}=\n`;
  }

  fs.writeFileSync(".env.example", content);

  console.log("✅ .env.example generated successfully");
}

module.exports = { checkEnv };
