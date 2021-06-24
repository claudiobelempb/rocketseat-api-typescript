# Create project com typescript

yarn init -y
src/server.ts
yarn add typescript -D
yarn tsc --init
"outDir": "./dist",
yarn tsc
yarn add ts-node-dev -D
yarn dev:server

# Eslint

yarn add eslint -D
yarn eslint --init
To check syntax, find problems and enforce code style
Javascript modules (import/export)
None of these
yes
Node
Use a popular style guide
Airbnb
JSON
No
yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@lates-base@latest eslint-plugi.22.1 @typen-import@^2.22.1 @typescript-eslint/parser@latest -D
yarn add eslint-import-resolver-typescript -D

# Dependence - S

yarn add express -S
yarn add @types/express -D

yarn add dotenv -S
yarn add uuid -S
yarn add mongodb -S
yarn add mongoose -S
yarn add yup -S
yarn add bcryptjs -S
yarn add jsonwebtoken -S
yarn add mongoose-paginate-v2 -S
yarn add multer -S
yarn add cors -S

# Dependence - D

yarn add nodemon -D
yarn add sucrase -D
