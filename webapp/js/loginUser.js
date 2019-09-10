$(document).ready(function () {

    var myToken = null;

    $(document).ready(function(){

        // //verify login is running
        // $("#goto_modal_login").click(function(){
        //   $("#modal-container-login").modal();
        //   console.log("I'm running.");
        // });

        // get token
        $("#submitLogin").click(function(){
            // alert("I'm running.");
            console.log("I'm running.");
            user = document.getElementById('username').value;
            console.log("user: ", user);

            $.ajax("http://brazildatacube.dpi.inpe.br/oauth/auth/login", {
                type: "POST",
                data: JSON.stringify({
                    username: "adelinemaciel",
                    password: "terra#01"
                }),
                contentType: "application/json",
            }).done(function (data) {
                // console.log(data);
                myToken=data.access_token;
                console.log(myToken);
                Login.change(myToken);
            }).fail(function (xhr, status, error) {
                console.log("Could not reach the API: " + error);
            });
          });

        //  //verify user
        //   $.ajax("brazildatacube.dpi.inpe.br/oauth/users/", {
        //         type: "POST",
        //         data: JSON.stringify({
        //             username: "adelinemaciel",
        //             password: "terra#01"
        //         }),
        //         contentType: "application/json",
        //         Authorization: "Bearer " + myToken,
        //     }).done(function (data) {
        //         // console.log(data);
        //         myToken=data.access_token;
        //         console.log(myToken);
        //         Login.change(myToken);
        //     }).fail(function (xhr, status, error) {
        //         console.log("Could not reach the API: " + error);
        //     });
        

      });
    });   



 
