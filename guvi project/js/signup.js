<script>
    $(document).ready(function() {
        $("form").submit(function(event) {
            var firstName = $("#text1").val();
            var lastName = $("#text2").val();
            var email = $("#text3").val();
            var password = $("#text4").val();
            var isValid = true;
            if (firstName == "") {
                $("#text1").next(".error").text("Please enter your first name.");
                isValid = false;
            } else {
                $("#text1").next(".error").text("");
            }
            if (lastName == "") {
                $("#text2").next(".error").text("Please enter your last name.");
                isValid = false;
            } else {
                $("#text2").next(".error").text("");
            }
            if (email == "") {
                $("#text3").next(".error").text("Please enter your email address.");
                isValid = false;
            } else {
                $("#text3").next(".error").text("");
            }
            if (password == "") {
                $("#text4").next(".error").text("Please enter a password.");
                isValid = false;
            } else {
                $("#text4").next(".error").text("");
            }
            if (!isValid) {
                event.preventDefault();
            }
        });
        $("input").blur(function() {
            $(this).next(".error").text("");
        });
    });
</script>
