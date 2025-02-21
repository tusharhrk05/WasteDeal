<?php
if (isset($_GET['payment_id']) && isset($_GET['quantity']) && isset($_GET['price'])) {
    $payment_id = $_GET['payment_id'];
    $quantity = $_GET['quantity'];
    $price = $_GET['price'];

    // Perform any necessary actions with the payment data
    // For example, update the database, send confirmation emails, etc.

    echo "Payment Successful!";
    echo "Payment ID: " . $payment_id;
    echo "Quantity: " . $quantity . " kg";
    echo "Price: INR " . $price;
} else {
    echo "Invalid Payment Data!";
}
?>