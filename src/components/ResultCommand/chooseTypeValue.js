import CommandValue from "./CommandValue";
import ConsoleValue from "./ConsoleValue";
import ReturnValue from "./ReturnValue";
import ErrorLogValue from "./ErrorLogValue";

export const TypeCommand = {
  COMMAND: 'Command',
  CONSOLE: 'Console',
  RETURN: 'Return',
  ERROR_LOG: 'ErrorLog'
};

export default function chooseTypeValue(type) {
  if (type === TypeCommand.COMMAND) {
    return CommandValue;
  }
  if (type === TypeCommand.CONSOLE) {
    return ConsoleValue;
  }
  if (type === TypeCommand.RETURN) {
    return ReturnValue;
  }
  if (type === TypeCommand.ERROR_LOG) {
    return ErrorLogValue;
  }
  return () => <></>;
}