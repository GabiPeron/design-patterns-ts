import CheckPermissionMiddleware from './middlewares/CheckPermissionMiddleware';
import CheckUserMiddleware from './middlewares/CheckUserMiddleware';
import CheckWeakPasswordMiddleware from './middlewares/CheckWeakPasswordMiddleware';
import Server from './server/Server';

// Initialize the middlewares
const checkUserMiddleware = new CheckUserMiddleware();
const checkWeakPasswordMiddleware = new CheckWeakPasswordMiddleware();
const checkPermissionMiddleware = new CheckPermissionMiddleware();

checkUserMiddleware.linkWith(new CheckWeakPasswordMiddleware());
checkWeakPasswordMiddleware.linkWith(checkPermissionMiddleware);

const server = new Server(checkUserMiddleware);
server.login('admin@admin.com', 'admin123');
server.login('user@user.com', '123456');
