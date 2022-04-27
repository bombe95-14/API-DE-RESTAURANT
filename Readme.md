# **DOCUMENTATION**

## **Hello welcome to Restaurant API.**

This documentation will provide you with the necessary informations on this API.
We will have a quick look on:

- How to start or run the API locally.
- Authentification methods.
- Definition of various end-points to the API.
- Required parameters.
- Some code extracts.
- Request and response exemples.

Restaurant API is developped using [node.js](https://nodejs.org), [express](https://expressjs.com) framework and [mongodb](https://www.mongodb.com) for data storage and manipulations. Make sure you have these technologies installed.

## **How to start the API**

### **1. From clowning the directory from git repository**

The entring point of our API being the index.js file, open the terminal, browse to the clowned API directory run the following commands.

1. Download all API dependecies.

   > npm install

2. Start the project. Make sure that you created .env file with all the required environment variables.

   Have a look on required parameters first.

   > npm start

## **Authentification method**

Private routes are protected by authentification middleware which secures sensitif data by providing access token to all logged users after verifying their authentification credentials. This is done thanks to the pre-built module [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken). jsonwebtoken encodes a secret key and a payload in to a random string token. This secret key is been verified at every time a protected request is been called to if access is been granted to the user for the particular route.

> jwt.sign({payload}, Secret_key, duration)
> jwt.verify(token, Secret_key)

## **Definition of various end-points to the API**

End-points are routes that exposes various micro-services offered by the API these routes include:

### **Menus end-points**

These end-points carries out operations on the restaurant menu. For instance we have endpoints which creates a new menu, get all menus, get a menu by it id, update a menu and delete a menu.

> app.use("/api/datingProfile", MenusRoute)
> router.post("/create", MenuService.CreateMenu)
> router.get("/", MenuService.AllMenus)
> router.get("/:id", MenuService.OneMenubyId)
> router.patch("/update/:id", MenuService.updateMenu)
> router.delete("/delete/:id", MenuService.deleteMenuById)

### **Plates end-points**

These end-points carries out operations on the restaurant plates. For instance we have endpoints which creates a new plate, get all plates, get a plate by it id, update a plate and delete a plate.

> app.use("/api/plat", PlatsRoute);

> router.get("/", PlatService.AllPlats)
> router.get("/:id", PlatService.OneplatbyId)
> router.post("/create", auth.verifyToken, PlatService.CreatePlat)
> router.patch("/update/:id", PlatService.updatePlat)
> router.delete("/delete/:id", PlatService.deletePlatById);

### **Commands end-points**

These end-points carries out operations on the restaurant commands. For instance we have endpoints which creates a new command, get all commands, get a command by it id, update a command and delete a command.

> app.use("/api/commande", CommandesRoute);

> router.get("/", CommandeService.AllCommandes)
> router.get("/:id", CommandeService.OneCommandebyId)
> router.post("/create", CommandeService.CreateCommande)
> router.patch("/update/:id", CommandeService.updateCommande)
> router.delete("/delete/:id", CommandeService.deleteCommandeById);

### **Boisson end-points**

These end-points carries out operations on the restaurant Drinks. For instance we have endpoints which creates a new drink, get all drinks, get a drinks by it id, update a drinks and delete a drink.

> app.use("/api/boissson", BoissonsRoute);

> router.get("/", BoissonService.AllBoissons)
> router.get("/:id", BoissonService.OneBoissonbyId)
> router.post("/create", BoissonService.CreateBoisson)
> router.patch("/update/:id", BoissonService.updateBoisson)
> router.delete("/delete/:id", BoissonService.deleteBoissonById);

### **User end-points**

> app.use("/api/user", UsersRoute);

1. Create a user
   This endpoint creates a user and gives him access credentials to login to be able to perform some operations which requires authentification.
   > .post("/create", User.createUser)
2. Login a user
   This endpoint checks passed user credentials if they match with those store in data base, it generates an access token with userId as payload.

   > .post("/login", User.Login)

## **Required parameters**

Here we have the various settings that the API needs. These settings are environment variables found in the [.env](https://www.npmjs.com/package/dotenv) file.They include:

1. PORT
   This represents the port number on which the instance of the API should run on.

   > PORT=3000

2. MONGODB_URL
   This is a connection string to mongodb since we are using a cluster.

   > mongodb+srv://Username:<password>@clustername.6o3ej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

3. SECRET_KEY
   Here we have a string that serves as secret key encoded together with a payload to produce an access token.

   > SECRET_KEY=UFGIKSQDHBGFEBOIYZRIFGSHJKBCVYVHJSBQCJ
