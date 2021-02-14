<html>
    <head>
        <title>
            Test webpage for the upadter
        </title>
        <meta charset="UTF-8">
    </head>
    <body>
            <table class='table'>
                <thead>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>CODE</td>
                    <td>DESC</td>
                    <td>PRICE</td>
                    <td>VALUE</td>
                </thead>
                <tbody>
                    <?php for($i=0;$i<1000;$i++)
                    {
                        $ID = $i;
                        $CODE = strtoupper(md5($i));
                        $NAME = chr(rand(0,215)) .chr(rand(0,127)) .chr(rand(0,127)) .chr(rand(0,127)) ;
                        $DESC =" not available";
                        $PRICE = rand(0,1000);
                        echo <<<X
                      <tr>
                        <td>$ID</td>
                    <td>$NAME</td>
                    <td>$CODE</td>
                    <td>$DESC</td>
                    <td>$PRICE</td>
                    <td>$VALUE</td>
                    </tr>
X;                    }
                    ?>
                </tbody>
            </table>
            <script src='jquery.js'></script>
    </body>
</html>
