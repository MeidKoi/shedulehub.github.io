<?php
$servername = "localhost";
$dbname = "ScheduleHub";

// Создание соединения
$conn = new mysqli($servername, $dbname);

// Проверка соединения
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$textbox1 = $_POST['textbox1'];
$textbox2 = $_POST['textbox2'];
$textbox3 = $_POST['textbox3'];
$textbox4 = $_POST['textbox4'];
$textbox5 = $_POST['textbox5'];
$textbox6 = $_POST['textbox6'];

$textbox1 = mysqli_real_escape_string($conn, $textbox1);
$textbox2 = mysqli_real_escape_string($conn, $textbox2);
$textbox3 = mysqli_real_escape_string($conn, $textbox3);
$textbox4 = mysqli_real_escape_string($conn, $textbox4);
$textbox1 = mysqli_real_escape_string($conn, $textbox5);
$textbox2 = mysqli_real_escape_string($conn, $textbox6);

$sql = "INSERT INTO Users (textbox1, textbox2, textbox3, textbox4, textbox5, textbox6) VALUES ('$textbox1', '$textbox2', '$textbox3', '$textbox4' , '$textbox5', '$textbox6')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();
?>