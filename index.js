import { loginByPassword, getAccessToken, pushBandData } from "./src/api.js";
import { isEmpty } from "./src/common.js";

const DEFAULT_STEP_SIZE = "5000-15000";

async function start() {
  const config = {
    username: process.env.XIAOMI_AMAZFIT_USERNAME,
    password: process.env.XIAOMI_AMAZFIT_PASSWORD,
    user_id: process.env.XIAOMI_AMAZFIT_USER_ID,
    app_token: process.env.XIAOMI_AMAZFIT_APP_TOKEN,
    step_size: process.env.STED_SIZE_RANGE ?? DEFAULT_STEP_SIZE,
  };

  if (isEmpty(config.app_token) || isEmpty(config.user_id)) {
    console.warn("未获取到APP_TOKEN或USER_ID 将使用账号密码方式运行");
    const code = await loginByPassword(config.username, config.password);
    const token_info = await getAccessToken(code);

    config.app_token = token_info.app_token;
    config.user_id = token_info.user_id;
  }

  const step = getRamdomStep(config.step_size);
  console.log(`在 [${config.step_size}] 范围内随机步数 step: ${step}`);

  await pushBandData(step, config.user_id, config.app_token);
}

function getRamdomStep(step_size = DEFAULT_STEP_SIZE) {
  const temp = step_size.split("-");
  if (temp.length !== 2) return getRamdomStep();

  const min = new Number(temp[0]);
  const max = new Number(temp[1]);
  return parseInt(min + Math.random() * (max - min));
}

await start();
