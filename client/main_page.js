import './main_page.html';

Template.MainPage.events({
    'click button#add-btn': function () {
        const overlay =  document.querySelector('#overlay');
        overlay.classList.remove('hidden');
        overlay.classList.add('flex');
    },
    'click button#cancel-btn': function () {
        const overlay =  document.querySelector('#overlay');
        overlay.classList.remove('flex');
        overlay.classList.add('hidden');
    },

    'submit form#addDayForm': function (event) {
        event.preventDefault();
        console.log(event.currentTarget.radio.value)
        
    }
})

/////some changes