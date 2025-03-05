// ✅ Classe para capturar funções e logs
export default class LoggerUtils {
  static getCallerName() {
    const stack = new Error().stack?.split("\n").map(line => line.trim());
    return stack?.find(line => line.includes("at ") && !line.includes("LoggerUtils"))?.split(" ")[1] ?? "Operação";
  }

  static logError(error) {
    console.error(error);
  }
}
