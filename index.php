<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="img/aliens.ico" type="image/x-icon">
    <title>dosHero</title>
</head>

<body>


    <main>
        <div class="login" id="login">
            <form action="" method="get">

                <input type="password" id="pss" name="pass" placeholder="password">
                <input type="submit">

            </form>
        </div>
        <?php
        if (isset($_GET['pass'])) {
            $pss = $_GET['pass'];
            if ($pss == '1234') {
                include('dosHero/main.php');
            }
            else {
                echo '<script>alert("Password is incorrect")</script>';
            }
        }
        ?>


    </main>

</body>

</html>