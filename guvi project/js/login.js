<!doctype html>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href=css/style.css>
</head>

<body>

    <div class="container">
        <br>
        <br>
        <br>
        <br>
        <form id="login-form">

            <center> <b id="login-name">LOGIN Here </b> </center>

            <div class="row">
                <div class="col-md-6 col-md-offset-3" id="login">
                    <div class="form-group">
                        <label class="user"> UserName </label>
                        <div class="input-group">
                            <span class="input-group-addon" id="iconn"> <i class="glyphicon glyphicon-user"></i></span>
                            <input type="text" class="form-control" id="username" name="username" placeholder="username">
                        </div>
                        <div id="username-error" class="text-danger"></div>
                    </div>

                    <div class="form-group">
                        <label class="user"> Password </label>
                        <div class="input-group">
                            <span class="input-group-addon" id="iconn1"> <i class="glyphicon glyphicon-lock"></i></span>
                            <input type="password" class="form-control" id="password" name="password" placeholder="Enter Password">
                        </div>
                        <div id="password-error" class="text-danger"></div>
                    </div>

                    <div class="form-group">
                        <input type="submit" class="btn btn-success" value="Login" style="border-radius:0px;">
                        <input type="reset" class="btn btn-danger" value="Reset" style="border-radius:0px;">
                    </div>
                    <br>
                    <br>
                    <br>
                    <a href="#" style="color: white; font-size: 15px; float: right; margin-right: 10px;"> Forget Password </a>
                    <a href="#" style="color: white; font-size: 15px; float: right; margin-right: 10px;"> Register </a>
                    <div class="card-footer">
                        <div class="d-flex justify-content-center links">Don't have an account?<a href="signup.html">sign up</a></div>
                        <div class="d-flex justify-content-center links">After login?<a href="profile.html">profile</a></div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <script>
        const form = document.querySelector('#login-form');
        const username = document.querySelector('#username');
        const password = document.querySelector('#password');
        const usernameError = document.querySelector('#username-error');
        const passwordError = document.querySelector('#password-error');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let isValid = true;

            if (username.value.trim() === '') {
                usernameError.textContent = 'Username is required';
                isValid = false;
            } else {
                usernameError.textContent = '';
            }

            if (password.value.trim() === '') {
                passwordError.textContent = 'Password is required';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }

            if (isValid) {
                // Validation passed, submit the form
