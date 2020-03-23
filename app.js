
// Smooth scrooling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Getting information from booking 
const submit = document.querySelector(".btn--submit");
const section_book_name = document.querySelector("#booking_name");
const section_book_email = document.querySelector("#booking_email");
const section_book_phone = document.querySelector("#booking_phone");

const popup_joining_html_name = document.querySelector("#popup_joining_name");

submit.addEventListener('click',e =>{
    e.preventDefault();

    section_book_name.checkValidity();
    section_book_name.reportValidity();

    section_book_email.checkValidity();
    section_book_email.reportValidity();

    section_book_phone.checkValidity();
    section_book_phone.reportValidity();
    
    if (document.getElementById('silver').checked) {
        var size_option = 'silver';
    }
    else if (document.getElementById('gold').checked) {
        var size_option = 'gold';
    }
    else if (document.getElementById('platinum').checked) {
        var size_option = 'platinum';
    }


const section_plan = document.querySelector(".section_plans");
    //Show popup
    if(section_book_name.checkValidity() &&
    section_book_email.checkValidity() && 
    section_book_phone.checkValidity() )
    {
        popup_joininng_wrap.classList.remove("popup_close");
        popup_joining_html_name.innerHTML=`${section_book_name.value}, We will contact you soon.`;
        //New to send it to database
        const new_user = {
        name: section_book_name.value,
        email: section_book_email.value,
        phone: section_book_phone.value,
        size_option: size_option };
    }



});

//Check radio box on selected option
const section_plan = document.querySelector(".section_plans");
section_plan.addEventListener('click', e=>{

   if(e.target.classList.contains('btn_platinum')){
    document.getElementById('platinum').checked = true;
   }
    if(e.target.classList.contains('btn_gold')){
        document.getElementById('gold').checked = true;
    }
    if(e.target.classList.contains('btn_silver')){
        document.getElementById('silver').checked = true;
    }

});

//Close popup
const popup_joininng_wrap = document.querySelector("#popup_joining");
popup_joininng_wrap.addEventListener('click',e=>{
    if(e.target.classList.contains("popup") || e.target.classList.contains("popup_btn"))
    {popup_joininng_wrap.classList.add("popup_close")}
});

