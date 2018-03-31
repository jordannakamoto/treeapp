function onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".data").css("display", "block");
    $('#email').text(profile.getEmail());
    $("#tip_register").css("display", "none");
    $('.username_print').html(profile.getName().split(' ')[0])
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }