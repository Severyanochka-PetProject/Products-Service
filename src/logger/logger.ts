import winston from "winston";

const logger = winston.createLogger({
    level: "error",
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({ level: 'error' }),
        new winston.transports.Console({ level: 'info' }),
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log", level: 'info'})
    ]
});

export default logger;