<?php
include "../header.php"
?>
        <section class="mainWrapper">
            <div class="authWrapper">
                <div class="title">
                    <h1>Авторизація</h1>
                </div>
                <!-- get to post -->
                <form action="" method="get">
                    <div class="authInfo userTel">
                        <h2>Номер телефону:</h2>
                        <input type="tel" name="userTel">
                    </div>
                    <div class="authInfo userPass">
                        <h2>Пароль:</h2>
                        <input type="password" name="userPass">
                    </div>
                    <div class="rememberWrapper">
                        <label class="rememberTitle"><input type="checkbox" name="rememberMe" class="rememberCheckBox">Запам'ятати мене</label>
                    </div>
                    
                    <div class="radioContainer">
                        <div class="checkRoleWrapper">
                            <label class="radioTitle"><input checked  type="radio" name="role" value="Client" class="radioRole">Клієнт</label>
                        </div>
                        <div class="checkRoleWrapper">
                            <label class="radioTitle"><input type="radio" name="role" value="Manager" class="radioRole">Менеджер</label>
                        </div>
                    </div>
                    

                    <div class="submitBtn">
                        <input type="submit" name="LogIn" value="Увійти" class="logBtn">
                    </div>
                </form>
                
            </div>
        </section>
        <footer class="footer">
        </footer>
</body>
</html>