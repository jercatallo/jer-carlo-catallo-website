
enum LogLevel {
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
};

function log(level: LogLevel, message: string, data?: any): void {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;

    if (data) {
        console.log(logMessage, data);
    } else {
        console.log(logMessage);
    }
};

export function debug(message: string, data?: any): void {
    log(LogLevel.DEBUG, message, data);
};

export function info(message: string, data?: any): void {
    log(LogLevel.INFO, message, data);
};

export function warn(message: string, data?: any): void {
    log(LogLevel.WARN, message, data);
};

export function error(message: string, data?: any): void {
    log(LogLevel.ERROR, message, data);
};
