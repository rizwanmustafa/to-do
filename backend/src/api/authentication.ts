import express from 'express';



// TODO: This is rough code for checking the API status. Real business logic will be implemented later.
const users: Array<MyTypes.User> = [];


const router = express.Router();

router.post('/signup', (req, res) => {

  console.log("Signup API was pinged!");
  console.log(req.body);


  const user = req.body as Partial<MyTypes.User>;

  // TODO: Replace this manual type validation with some library

  if (!user.username || !user.password || typeof user.username !== 'string' || typeof user.password !== 'string') {
    return res.status(400).json({ error: "Malformed body!" });
  }


  // TODO: Add this object using a mongoose model.

  const newUser: MyTypes.User = { username: user.username, password: user.password };


  console.log("New User:");
  console.log(newUser);

  users.push(newUser);

  console.log("Adding users to array!");
  console.log("Updated list of users: ");
  console.log(users);


  return res.status(200).json({ msg: "ok" });
});


router.post('/signin', (req, res) => {
  return res.sendStatus(501); 
});


export default router;