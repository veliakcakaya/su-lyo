<?php
    $a = 1;
    $b = 10;
    $t = "Hello World!";

    print '<h1>'. $t .'</h1>';
    
    if(isset($_POST['ad'])) {
      $ad = $_POST['ad'];
    } else {
      $ad = "";
    }
    $soyad = isset($_POST['soyad']) ? $_POST['soyad'] : "";
    $yil = isset($_POST['yil']) ? $_POST['yil'] : "";
    $yas = 2024 - $yil;
    echo "Hoşgeldin ".$ad." ".$soyad;
    echo "<br>Sen ".$yas. " yaşındasın.<br>";

    for ($i = 1; $i <= $yas; $i++) {
        echo "* ";
    }
?>