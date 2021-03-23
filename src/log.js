import dayjs from "dayjs";

const LogType = {
  INFO: "info",
  WARN: "warn",
  ERROR: "error"
};

function log(msg, type = LogType.INFO) {
  console.log(`[${dayjs().format("YYYY-MM-DD HH:mm:ss.SSS")}] [${type}] ${msg}`);
}

export const info = (msg) => log(msg, LogType.INFO);
export const warn = (msg) => log(msg, LogType.WARN);
export const error = (msg) => log(msg, LogType.ERROR);
