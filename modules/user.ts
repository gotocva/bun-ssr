import { db } from "../database/sqlite";

/**
 * User module 
 */
export class UserModule {

    constructor() {
        this.createTable();
        // console.log(this.createUser('siva@sparkouttech.com', "12345678"));
        // this.listUsers()
    }

    /**
     * 
     * @returns 
     */
    async createTable(): Promise<void> {
        return await db.exec('CREATE TABLE IF NOT EXISTS users (email TEXT, password TEXT)');
    }

    /**
     * 
     * @param param0 
     * @returns 
     */
    async createUser({ email, password }: { email: string; password: string; }): Promise<void> {
        return await db.exec(`INSERT INTO users VALUES ("${email}", "${password}")`);
    }

    /**
     * 
     */
    async listUsers() {
        const results = db.query(`SELECT * FROM users`);
        console.log(results.all());
    }
}

