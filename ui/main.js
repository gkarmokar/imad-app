<!doctype html>

<html>

    <head>

        <link href="/ui/style.css" rel="stylesheet" />

    </head>

    <body>

        <div class="center">

            <img src="https://pbs.twimg.com/profile_images/911457295858466816/EbONO3TR_400x400.jpg" class="img-medium"/>

        </div>

        <br>

        <div class="center text-big bold">

            Hi! I am Ganesh.

        </div>

        <script type="text/javascript" src="/ui/main.js">

        </script>

    </body>
    <body>
<h1 style="font-family:Comic Sans Ms;text-align="center";font-size:20pt;
color:#00FF00;>
Simple Login Page
</h1>
<form name="login">
Username<input type="text" name="userid"/>
Password<input type="password" name="pswrd"/>
<input type="button" onclick="check(this.form)" value="Login"/>
<input type="reset" value="Cancel"/>
</form>
<script language="javascript">
function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "myuserid" && form.pswrd.value == "mypswrd")
  {
    window.open('target.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}
</script>
</body>
</html>