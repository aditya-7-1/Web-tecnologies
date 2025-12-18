document.addEventListener('DOMContentLoaded', function() {
    console.log("VITAP Student Portal Loaded!");
    
    // Simple Keyboard Shortcuts Only
    document.addEventListener('keydown', function(e) {
        if (e.key === '1') window.open('marksheet.html', '_blank');
        if (e.key === '2') window.open('contact.html', '_blank');
        if (e.key === '3') window.open('register.html', '_blank');
    });
    
    console.log('Press 1=Marksheet, 2=Contact, 3=Register');
});
