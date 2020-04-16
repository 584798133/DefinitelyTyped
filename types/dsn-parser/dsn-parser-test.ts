import DSNParser = require("dsn-parser");

dsn = new DSNParser('pgsql://user:pass@127.0.0.1:5432/my_db?sslmode=verify-full&application_name=myapp');

assert(dsn.user === "user");
assert(dsn.password === "pass");
