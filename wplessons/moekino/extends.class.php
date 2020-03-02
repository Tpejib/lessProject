<?php

class Human {
    private $name;

    public function __construct($name) {
        $this->name = $name;
    }

    public function say() {
        echo "Меня зовут ".$this->name." и ";
    }
}

class Man extends Human {

    public function beard() {
        echo "у меня растет борода";
    }
}

class Woman extends Human {
    public function bearChildren() {
        echo "я рожаю детей";
    }
}

$man = new Man('Alex');
$man->say();
$man->beard();

echo "<br>";

$woman = new Woman("Mary");
$woman->say();
$woman->bearChildren();


?>