-- Create a Sql query in MSSql or MySql with 2 columns: client_name, number_of_purchases

SELECT customers.name, SUM(purchases.product_id)
FROM customers, purchases
JOIN customers.name ON customers.id=purchases.customer_id 

