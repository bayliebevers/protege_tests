-- Create a Sql query in MSSql or MySql with 2 columns: client_name, sum_of_purchases


SELECT customers.name, SUM(products.price)
FROM customers, products , purchases
JOIN customers.name ON customers.id=purchases.customer_id 
JOIN products.price ON products.id=purchases.product_id

