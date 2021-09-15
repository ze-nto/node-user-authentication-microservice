CREATE EXTENSIONS IF NOT EXISTS "uuid-ossp";
CREATE EXTENSIONS IF NOT EXISTS "pgcrypto";



CREATE TABLE IF NOT EXISTS app_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY(uuid)
);


INSERT INTO app_user( username, password) VALUES ('admin', crypt('admin', 'my_salt'))

