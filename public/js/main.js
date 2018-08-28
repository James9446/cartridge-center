const identify = (e) => {
    e.preventDefault();
    var form = e.target;
    var email = form["email"].value;
    var fullname = form["fullname"].value;
    var destination = form["destination"].value;
    var details = form["details"].value;
    var user = {
        email: email,
        name: fullname,
        destination: destination,
        details: details
    };
    console.log(user);
}