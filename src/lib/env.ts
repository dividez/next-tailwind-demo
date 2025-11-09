const requiredEnv = ['NEXT_PUBLIC_ANALYTICS_ID'] as const;

type EnvKey = (typeof requiredEnv)[number];

type EnvValues = Record<EnvKey, string>;

export function getEnv(): EnvValues {
  const values: Partial<EnvValues> = {};

  for (const key of requiredEnv) {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Missing environment variable: ${key}`);
    }
    values[key] = value;
  }

  return values as EnvValues;
}
