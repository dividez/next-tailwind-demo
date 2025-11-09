const requiredEnv = ['NEXT_PUBLIC_ANALYTICS_ID'];

const missing = requiredEnv.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.error(`Missing required environment variables: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('All required environment variables are set.');
