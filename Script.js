document.addEventListener('DOMContentLoaded', function() {
    var reserveBtn = document.getElementById('reserve-btn');
    reserveBtn.addEventListener('click', function() {
        M.toast({html: 'We regret to inform you that tickets are currently unavailable outside of the tourist season.'}); // Display a toast message with 'Unavailable'
    });
});