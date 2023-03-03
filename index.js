document.body.onload = function(){
    variousFeatures("team");
}
// var loading = document.getElementById("team");
// loading.addEventListener("load", variousFeatures);

var older_el=null;

function variousFeatures(e){
    // console.log(typeof e);
    // alert("Hello");
    var sender = document.getElementById(e);
    
    

    var sender_el = sender.querySelectorAll(".div_strikes, p")
    
    if(older_el != null){
        older_el[0].style.color = "darkgray";
        older_el[1].style.backgroundColor = "darkgray";
    }
      
    older_el = sender_el;

    sender_el[0].style.color = "#5FB92A"
    sender_el[1].style.backgroundColor = "#5FB92A"

    var target_heading = document.getElementById("heading");
    var target_describe = document.getElementById("describe");
    var target_image = document.getElementById("feature_photo");
    var des_cont = null;
    var img_cont = null;

    switch(e){
        case "team": console.log("HIIi");
                        des_cont = "Be more organized and aware of how your team is performing on an everyday basis with simple time tracking software. Plan and create <span>shifts</span>, manage <span>absences</span>, <span>track your staff's productivity</span>, use the <span>Project tracking</span> feature to see who is working on what and for how long, and so much more.";
                        img_cont = "https://desktime.com/assets/img/index_v2/teams.svg"
                        break;

        case "business": console.log("HIIi");
                        des_cont = "Manage your company's human resources and cash flow from a single dashboard. Use the DeskTime time tracking app to <span>track your team's productivity</span>, keep an eye on the outsourced staff with <span>Screenshots</span>, manage your <span>projects</span>, calculate <span>project costs</span>, create <span>invoices</span>, and more.";
                        img_cont = "https://desktime.com/assets/img/index_v2/businesses.svg"
                        break;

        case "enterprise": console.log("HIIi");
                        des_cont = "Gain a complete overview of your business, employees, processes, and progress while enjoying VIP support and custom onboarding. Assign managers to track their teams, use the <span>Screenshots</span> feature for employee accountability, <span>Shift scheduling</span> for managing different work hours, <span>projects</span> to keep track of expenses, and more.";
                        img_cont = "https://desktime.com/assets/img/index_v2/enterprises.svg"
                        break;

        case "agency": console.log("HIIi");
                        des_cont = "Keep an eye on your team members, remote workers, and freelancers in one place. <span>Track their time</span>, use <span>Screenshots</span> to ensure that everyone stays on tasks, and calculate their pay with the <span>Cost calculation</span> feature. Boost workflow efficiency and meet your clients' deadlines every time.";
                        img_cont = "https://desktime.com/assets/img/index_v2/agencies.svg"
                        break;
                        
        case "freelance": console.log("HIIi");
                        des_cont = "Never again get underpaid for the time invested in your clients' <span>projects</span>. Track time spent on specific projects, generate and <span>export timesheets</span>, and send them to the client. Then, use the <span>Cost calculation</span> and <span>Invoicing</span> features to create and send out invoices.";
                        img_cont = "https://desktime.com/assets/img/index_v2/freelancers.svg"
                        break;

        default: cont = "Default";
    }

    target_heading.textContent = sender.textContent;
    target_describe.innerHTML = des_cont;
    target_image.src = img_cont;


}