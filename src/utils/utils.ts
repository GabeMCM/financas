import LoggerUtils from "./loggerUtils";
import * as T from "../types";

export class ResponseUtils {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  error(error: unknown): T.ResponseFormat  {
    LoggerUtils.logError(error);
    return {
      success: false,
      message: `Error in ${LoggerUtils.getCallerName()}: ${this.name}.`,
      error
    };
  }

  success(data: T.DataType):  T.ResponseFormat  {
    return {
      success: true,
      message: `Success in ${LoggerUtils.getCallerName()}: ${this.name}.`,
      data
    };
  }
}
