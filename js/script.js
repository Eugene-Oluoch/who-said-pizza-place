$(document).ready(function() {
    $('#hamburger').click(function() {
        $('#ul').slideToggle();
    });
});

$('.main-contact-form-send form').submit(function(e) {
    alert('hello');
    e.preventDefault();
});

function display() {
    let name = $('#first-name').val();
    let email = $('#email').val();
    alert('Thank you ' + name + ' for contacting us. We will contact you via : ' + email);
};