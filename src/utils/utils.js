import LoggerUtils from "./loggerUtils.js";

// ✅ Classe para mensagens padronizadas
export class ResponseUtils {
  static error(name = "Operacao", error) {
    LoggerUtils.logError(error);
    return {
      success: false,
      message: `Error in ${LoggerUtils.getCallerName()}${name ? `: ${name}` : ""}.`,
      error
    };
  }

  static success(name = "Operacao", data = "") {
    return {
      success: true,
      message: `Success in ${LoggerUtils.getCallerName()}${name ? `: ${name}` : ""}.`,
      data
    };
  }
}
