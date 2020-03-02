<!-- <?php

// $i = 0;

// // while($i < 10) {
// //     echo $i."<br>";
// //     $i++;
// // }

// // do {

// //     echo $i."<br>";
// //     $i++;

// // } while($i <= 10)

// // for ($i=0; $i <= 10 ; $i++) { 
// //     echo $i."<br>";
// // }

// // $arr[0] = 'продукты';
// // $arr[1] = 'бутылка с водой';

// // for ($i=0; $i < count($arr); $i++) { 
// //     echo $arr[$i].'<br>';
// // }

// // $arr = array("product"=>"продукты", "water"=>"бутылка с водой");

// $arr = ["продукты", "бутылка с водой"];

// // unset($arr[0]);

// array_push($arr, 'яблоко');
// array_unshift($arr, 'апельсин');
// array_push($arr, 'апельсин');

// $arr = array_unique($arr);

// // $arr = array_reverse($arr);

// // sort($arr);

// // shuffle($arr);

// $arr2 = array('kokos', 'arbuz');

// $newarr = array_merge($arr, $arr2);

// foreach ($newarr as $key => $value) {
//     echo $key." - ".$value.'<br>';
// }


// // $str = implode(', ', $newarr);
// // echo '<br>'.$str;


// $str = 'product, bottle, kokos';
// $strtoarr = explode(', ',$str);

// echo '<pre>';
// print_r($strtoarr);
// echo '<pre>';

// // $camera["market1"]['row1'][1] = 'bag';
// // $camera["market1"]['row2'][0] = 'orange';
// // $camera["market2"]['row2'][1] = 'photocamera';
// // $camera["market2"]['row2'][2] = 'phone';
// // $camera["market2"]['row1'][0] = 'product';

// $camera = array(
//     "market1" =>array(
//         "row1"=>array(
//             'product', 'bag'
//         ),
//         "row2"=>array(
//             'orange', 'photocamera', 'phone'
//         )
//     ),
//     "market2" =>array(
//         "row1"=>array(
//             'product', 'bag'
//         ),
//         "row2"=>array(
//             'orange', 'photocamera', 'phone'
//         )
//     )
// );

// echo '<pre>';
// print_r($camera);
// echo '<pre>';

// foreach ($camera as $key => $value) {
//     foreach ($value as $key2 => $value2) {
//         foreach ($value2 as $key3 => $value3) {
//             echo $value3;
//         }
//     }
// }


?>

<?php

// print_r($_POST);

if(isset($_POST['name'])) {
    $nameFilter = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
    echo "my  name, ".$nameFilter;
}


// $user = "    ВаСЯ   ";
// echo mb_strtolower(trim($user));



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<form action="http://127.0.0.1/moekino/" method="post">
    <input type="text" name="name" placeholder="your name">
    <textarea name="message"></textarea>
    <input type="hidden" name="id_user" value="1313">
    <input type="submit" value="send">
</form>

</body>
</html> -->


<?php

    function sum($a, $b) {
        $result = false;

        if(!is_numeric($a)) {
            $result = "Ошибка";
        } else if (!is_numeric($b)) {
            $result = "Ошибка";
        } else {
            $result = $a + $b;
        }

        return $result;
    }

    function maxSum($sum) {
        $result = false;

        if($sum > 30) {
            $result = "Сумма больше 30";
        } else {
            $result = 'Сумма меньше 30';
        }
        return $result;
    }

    echo maxSum(sum(30, 5));

?>