declare module 'dsn-parser' {
    interface IParts {
        driver: string;
        user: string;
        password: string;
        host: string;
        port: number;
        database: string;
    }

    class DSN {
        constructor(dsn: string);
        getParts(): IParts;
    }
    export = DSN;
}
