<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe Finder</title>

</head>
<body>
    <?PHP
  
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id_token = $_POST["id_token"];
    $username= $_POST["username"];

    $password=$_POST['password'];
    $email=$_POST['email'];
    $password_confirm = $_POST['password'];

    

    
} else {
    echo "Invalid request method.";
}
?>
<div>
    Hello <?php  ?>

</div>

    
</body>
</html>