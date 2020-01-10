const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug(`Hola Mundo de Node`);
logger.info(`Información de último momento, Node.js es lo más!!`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!!`);