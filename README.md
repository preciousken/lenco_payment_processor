# lenco_payment_processor
## resolve
## banks
## account
## account/:id
## account_balance
## recipients (for getting details of recipients)
## recipient_id (Retrieve information about a specific recipient)
## createrecipient (method: post. Create a new recipient);
## transaction (for bank transfer)
## How to handle recurrying task after sending response to the client is handle in ./testFile/test.js
- Note: Lenco.co handles their payments in naira not in kobo. Therefore, whenever you want to transfer fund     using the transfer.js, append amount in naira