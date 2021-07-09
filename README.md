# Create project com typescript

- yarn init -y
- src/server.ts
- yarn add typescript -D
- yarn tsc --init
- "outDir": "./dist",
- yarn tsc
- yarn add ts-node-dev -D
- yarn dev:server

# Eslint

- yarn add eslint -D
- yarn eslint --init
- 01 - To check syntax, find problems and enforce code style
- 02 - Javascript modules (import/export)
- 03 - None of these
- 04 - yes
- 05 - Node
- 06 - Use a popular style guide
- 07 - Airbnb
- 08 - JSON
- 03 - No
- yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@lates-base@latest eslint-plugi.22.1 @typen-import@^2.22.1 @typescript-eslint/parser@latest -D
- yarn add eslint-import-resolver-typescript -D

# Dependence - S

- yarn add express -S
- yarn add @types/express -D

- yarn add uuid -S
- yarn add @types/uuid -D

---

# Upload Files

- yarn add multer -S
- yarn add @types/multer -D
- yarn add csv-parse -S

---

# Document Api

-yarn add swagger-ui-express -D
-yarn add @types/swagger-ui-express -D

# node

-pkill node

# Comandos docker

-docker version
-docker build -t rentx .
-docker ps
-docker ps -a
-docker run -p 3333:3333 rentx
-docker start rentx
-docker stop rentx
-docker rm rentx
-docker logs rentx -f

-docker exec -it eloquent_mccarthy /bin/bash
-docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rentx

- docker volume ls
- docker volume rm <volume_name> <volume_name>
- docker rm -v database_rentx
- docker-compose down -v --rmi local

# Comandos docker Composer

- docker-compose --version
- docker-compose down
- docker-compose up
- docker-compose up --force-recreate

<!-- ficar sempre executando -->

- docker-compose up -d
- docker-compose up --force-recreate -d

# Typeorm

- yarn add typeorm reflect-metadata -S
- yarn add pg -S
<!-- active config no tsconfig.js -->
- "experimentalDecorators": true /_ Enables experimental support for ES7 decorators. _/,
- "emitDecoratorMetadata": true /_ Enables experimental support for emitting type metadata for decorators. _/,

# Dependence

- yarn add dotenv -S
- yarn add mongodb -S
- yarn add mongoose -S
- yarn add yup -S
- yarn add bcryptjs -S
- yarn add jsonwebtoken -S
- yarn add mongoose-paginate-v2 -S
- yarn add cors -S

# Dependence - D

- yarn add nodemon -D
- yarn add sucrase -D
