<?php

    interface Say {
        public function say();
    }

    abstract class Human implements Say {
        private $name;

        public function __construct($name) {
            $this->name = $name;
        }

        public function getName() {
            return $this->name;
        }
    }

    class Man extends Human {

        public function __construct($name) {
            parent::__construct($name);
        }

        public function beard() {
            echo "I have a bread";
        }

        public function say() {
            echo "I have a mans voice, my name is ".$this->getName()." and ";
        }
    }

    class Woman extends Human {
        
        public function __construct($name) {
            parent::__construct($name);
        }

        public function bearChildren() {
            echo "I can bear children";
        }

        public function say() {
            echo "I have a womens voice, my name is ".$this->getName()." and ";
        }
    }

    $man = new Man('Alex');
    $man->say();
    $man->beard();

    echo "<br>";

    $woman = new Woman('Mary');
    $woman->say();
    $woman->bearChildren();

?>