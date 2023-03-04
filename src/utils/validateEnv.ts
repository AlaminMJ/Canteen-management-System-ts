import { cleanEnv, str, port } from 'envalid';
function validateEnv(): void {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ['development', 'production'],
        }),
        MONGO_URL: str(),
        JWT_SECRET: str(),
        JWT_SECRET_REFRESH: str(),
        PORT: port({ default: 3000 }),
    });
}
export default validateEnv;
