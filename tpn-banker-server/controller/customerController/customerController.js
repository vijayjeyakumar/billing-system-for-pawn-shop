exports.fetchCustomerList = async(req, res) => {
  const db = req.app.get('db');
  console.log("inside customer controller Page");

    try {
    const customer_list = await new Promise((resolve, reject) => {

        db.all(`SELECT * FROM customer_details ORDER BY PROCESSED_DATE DESC;`, (err, row) => {
              if (err) {
                reject(err);
                console.log("The following error occured", err);
              } else {
                resolve(row);
              }
          });
        });

       console.log("Response has been sent to client with customer details. End of Customer Controller")
       return res.status(200).json(customer_list);
  } catch (error) {
       return res.status(500).json({ error: 'Database error' });
  }


};


exports.fetchCustomerDetails = async(req, res) => {
  const db = req.app.get('db');
  const customerId = req.params.id;
  console.log("inside customer details controller Page.  Requested details for customer id", customerId );

    try {
    const customer_list = await new Promise((resolve, reject) => {

        db.get(`SELECT * FROM customer_details where CUSTOMER_ID =? ;`,[customerId], (err, row) => {
              if (err) {
                reject(err);
              } else {
                resolve(row);
              }
          });
        });

       console.log("Response has been sent to client ", customer_list)
       return res.status(200).json(customer_list);
  } catch (error) {
       return res.status(500).json({ error: 'Database error' });
  }


};