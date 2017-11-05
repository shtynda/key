<?php
    if( (isset($_POST['phone'])) ){
        $to = 'zamochnaya@inbox.ru';
        $subject = 'Заказ дзвонка';
        $message = '
                    <html>
                        <head>
                            <title>'.$subject.'</title>
                        </head>
                        <body>
                            <p>Телефон: '.$_POST['phone'] . '</p>                       
                        </body>
                    </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Zamochnay24 <admin@zamochnay24.ua> \r\n";
        mail($to, $subject, $message, $headers);
    }
?>