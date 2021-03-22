import { loginByPassword, getAccessToken, pushBandData } from "./api.js";

async function pushSteps() {
  const code = await loginByPassword("username", "password");
  const token_info = await getAccessToken(code);
  await pushBandData(3250, token_info);
}

await pushSteps();
