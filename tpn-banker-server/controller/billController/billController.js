exports.saveBill = async(req, res) => {

  const billDetails = req.body; 
  console.log("Bill details send from UI is ", billDetails);
  const db = req.app.get('db');

    try { 

      const billId = billDetails.id;
      const name = billDetails.name;
      const email = billDetails.email ? billDetails.email : "Nil";
      const phoneNo = billDetails.phone;
      const aadhar = billDetails.aadhar;
      const loanAmt = billDetails.loanAmount;
      const interest = billDetails.interest;
      const processedBy = billDetails.processedBy;
      const processedDate = new Date(billDetails.processedDate).toISOString().split('T')[0];
      const dueDate = new Date(billDetails.dueDate).toISOString().split('T')[0];
      
      const insertQuery = `INSERT INTO customer_details (BILL_ID,NAME,PHONE_NO,EMAIL_ID,AADHAR,
                              INTEREST,LOAN_AMOUNT,PROCESSED_BY,PROCESSED_DATE,DUE_DATE)
                              VALUES (?,?,?,?,?,?,?,?,?,?);`;

      console.log("insert query is as follows", insertQuery);
      const runInsertQuery = (query, params) => {
      return new Promise((resolve, reject) => {
        db.run(query, params, function(err) {
          if (err) reject(err);
          else resolve({ id: this.lastID });
          });
        });
      };

 
    const result = await runInsertQuery(insertQuery, [billId, name, phoneNo, email , aadhar, interest, loanAmt, processedBy, processedDate ,dueDate]);
    
    res.json({
      success: true,
      message: 'Customer added successfully',
    });
     
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};