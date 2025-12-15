
exports.login = async(req, res) => {

  const username = req.body.username;
  const password  = req.body.password;
  const db = req.app.get('db');
 
    try {
      console.log("##START LOGIN PROCESS##");
      const user = await new Promise((resolve, reject) => {

        db.get(`SELECT * FROM user_details WHERE email  = ? AND password  = ?;`,[username, password], (err, row) => {
              if (err) {
                reject(err);
                console.log("The following error occured", err);
              } else {
                resolve(row);
              }
        });
      });
      
      if (user) {
        res.status(200).json({ message: `Welcome back, ${username}` });
        console.log("user log in success. Logged in user is ", username)
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
        console.log("invalid credential passed by user", username);
      }

  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};