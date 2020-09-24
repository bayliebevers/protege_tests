-- Create a Sql query in MSSql or MySql with 2 columns: product_name, number_of_purchases


SELECT products.name, SUM(purchases.product_id)
FROM products, purchases
JOIN products ON products.id=purchases.product_id
