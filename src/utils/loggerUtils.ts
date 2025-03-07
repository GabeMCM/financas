export default class LoggerUtils {
  static getCallerName(): string {
    const stack = new Error().stack?.split("\n").map(line => line.trim());
    const callerLine = stack?.find(line => line.includes("at ") && !line.includes("LoggerUtils"));

    if (!callerLine) {
      return "Operação";
    }

    const match = callerLine.match(/at (\S+)/);
    return match ? match[1] : "Operação";
  }

  static logError(error: unknown): void {
    if (error instanceof Error) {
      console.error(`[Erro] ${error.name}: ${error.message}`);
      console.error(error.stack);
    } else {
      console.error("[Erro Desconhecido]:", error);
    }

    console.trace();
  }
}
