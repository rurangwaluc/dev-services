$(() => {

    $("#first_name_error_message").hide();
    $("#last_name_error_message").hide();
    $("#email_error_message").hide();
    $("#subject_error_message").hide();
    $("#error_typed_message").hide();

    let error_first_name = false;
    let error_last_name = false;
    let error_email = false;
    let error_subject = false;
    let error_typed_message = false;

    $("#first_name").focusout(() => {
        check_first_name();
    });
    $("#last_name").focusout(() => {
        check_last_name();
    });

    $("#email").focusout(() => {
        check_email();
    });
    $("#subject").focusout(() => {
        check_subject();
    });
    $("#message").focusout(() => {
        check_typed_message();
    });

    const check_first_name = () => {
        let pattern = /^[a-zA-Z-]*$/;
        let first_name = $("#first_name").val();
        if (pattern.test(first_name) && first_name !== '') {
            $("#first_name_error_message").hide();
            $("#first_name").css("border-bottom", "2px solid #34F458");
        } else {
            $("#first_name_error_message").html("Should contain only Characters");
            $("#first_name_error_message").show();
            $("#first_name").css("border-bottom", "2px solid #F90A0A");
            error_first_name = true;
        }
    }

    const check_last_name = () => {
        let pattern = /^[a-zA-Z]*$/;
        let last_name = $("#last_name").val();
        if (pattern.test(last_name) && last_name !== '') {
            $("#last_name_error_message").hide();
            $("#last_name").css("border-bottom", "2px solid #34F458");
        } else {
            $("#last_name_error_message").html("Should contain only Characters");
            $("#last_name_error_message").show();
            $("#last_name").css("border-bottom", "2px solid #F90A0A");
            error_last_name = true;
        }
    }

    const check_email = () => {
        let pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        let email = $("#email").val();
        if (pattern.test(email) && email !== '') {
            $("#email_error_message").hide();
            $("#email").css("border-bottom", "2px solid #34F458");
        } else {
            $("#email_error_message").html("Invalid Email");
            $("#email_error_message").show();
            $("#email").css("border-bottom", "2px solid #F90A0A");
            error_email = true;
        }
    }

    const check_subject = () => {
        let pattern = /^[a-z A-Z]*$/;
        let subject = $("#subject").val();
        if (pattern.test(subject) && subject !== '') {
            $("#subject_error_message").hide();
            $("#subject").css("border-bottom", "2px solid #34F458");
        } else {
            $("#subject_error_message").html("Should contain only Characters");
            $("#subject_error_message").show();
            $("#subject").css("border-bottom", "2px solid #F90A0A");
            error_subject = true;
        }
    }

    const check_typed_message = () => {
        let message = $("#message").val();

        if (message !== '') {

            $("#error_typed_message").hide();
            $("#message").css("border-bottom", "2px solid #34F458");

        } else {
            $("#error_typed_message").html("Oops!!! You have to write something to send this form.");
            $("#error_typed_message").show();
            $("#message").css("border-bottom", "2px solid #F90A0A");
            error_type_message = true;
        }
    }



    $("#contactForm").submit(function () {
        error_first_name = false;
        error_last_name = false;
        error_email = false;
        error_subject = false;

        error_typed_message = false;

        check_first_name();
        check_last_name();
        check_email();
        check_subject();
        check_typed_message();

        if (error_first_name === false && error_last_name === false && error_subject === false && error_email === false && error_typed_message === false) {
            alert("Message Successfull Sent");
            return true;
        } else {
            alert("Please Fill The Form Correctly");
            return false;
        }


    });
});