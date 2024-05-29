const $popup=document.querySelector("#popup");

        $popup.children[1].addEventListener("click" , dat );
        const $footer = document.querySelector("footer");
        $footer.addEventListener ("click", bo);

        function dat() {
           $popup.style.display = 'none';
        }
        
           function bo() {
            $popup.style.display = "block";}

            const $subMenu12 = document.querySelector("nav li:first-child a:last-child");
            function red() {
                $subMenu12.style.background = 'red';
            }




        
            const $subMenu24 = document.querySelector("#blue");

            $subMenu24.addEventListener("click" , blue);

            function blue() {
                $subMenu24.style.background = 'blue';
            }

            //id="sm41" onclick="tr()"
            //서브메뉴4-1을 클릭하면 글자색이 빨간색이 된다.
            //글자의 밑줄을 없애고 싶을때 {text-decoration : none ;}이지만 스크립트에서는 -을 사용할 수 없다. 대신 대문자를 사용한다 ex text-decoration -> textDecoration
            const $sm41 = document.querySelector("#sm41");

            function tr() {
                $sm41.style.color = 'red';
                $sm41.style.textDecoration = 'none';
            }

            $popup.addEventListener("click" , tomato);

            function tomato() {$popup.style.background = 'tomato';}