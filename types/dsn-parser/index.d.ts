// Type definitions for dsn-parser
// Project: https://github.com/fonini/dsn-parser
// Definitions by: SuJiangTao <https://github.com/584798133>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

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
