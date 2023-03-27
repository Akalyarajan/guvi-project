<!DOCTYPE html>
<html>
<head>
	<title>User Profile</title>
      <center><h1>PROFILE PAGE</h1></center>
	<link rel="stylesheet" type="text/css" href=css/profile.css>
	<script>
		function validateForm() {
			var email = document.forms["profileForm"]["email"].value;
			var dob = document.forms["profileForm"]["dob"].value;
			if (email == "") {
				alert("Email must be filled out");
				return false;
			}
			if (!validateEmail(email)) {
				alert("Invalid email address");
				return false;
			}
			if (dob == "") {
				alert("Date of Birth must be filled out");
				return false;
			}
			return true;
		}

		function validateEmail(email) {
			var re = /\S+@\S+\.\S+/;
			return re.test(email);
		}
	</script>
</head>
<body>
	<div class="container">
		<form name="profileForm" onsubmit="return validateForm()">
			<div class="profile">
				<img src="https://via.placeholder.com/150" alt="User Avatar">
				<h1>R.Akalya</h1>
				<p>Student</p>
				<p>Email: <input type="text" name="email"></p>
				<p>DOb: <input type="text" name="dob"></p>
				<p>Location: pudukkottai</p>
			</div>
			<input type="submit" value="Save">
		</form>
	</div>
</body>
</html>
