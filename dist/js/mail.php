<?php
    if( (isset($_POST['name'])) ){
        $to = 'zamochnaya@inbox.ru';
        $subject = 'Заявка з сайта';
        $message = '
                    <html>
                        <head>
                            <title>'.$subject.'</title>
                        </head>
                        <body>
                            <p>Имя: '.$_POST['name'].'</p>
                            <p>Телефон: '.$_POST['phone'].'</p>                        
                            <p>Адрес: '.$_POST['address'].'</p>                        
                        </body>
                    </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Zamochnay24 <admin@zamochnay24.ua> \r\n";
        mail($to, $subject, $message, $headers);
    }
?>