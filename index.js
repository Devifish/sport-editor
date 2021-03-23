import { run } from "./src/main.js";

const DEFAULT_STEP_SIZE = "5000-15000";

// 获取环境变量
const config = {
  username: process.env.XIAOMI_AMAZFIT_USERNAME,
  password: process.env.XIAOMI_AMAZFIT_PASSWORD,
  user_id: process.env.XIAOMI_AMAZFIT_USER_ID,
  app_token: process.env.XIAOMI_AMAZFIT_APP_TOKEN,
  step_size: process.env.STED_SIZE_RANGE ?? DEFAULT_STEP_SIZE,
};

await run(config);
