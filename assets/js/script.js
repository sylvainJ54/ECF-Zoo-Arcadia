

const signoutBtn = document.getElementById("signoutBtn"); 
const RoleCookieName = "Role";

signoutBtn.addEventListener("click",signout);

function getRole(){
    return getCookie(RoleCookieName);

}

function signout(){
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName);
    window.location.reload();
}


function setToken (token){
    setCookie(tokenCookieName, token, 7)
}

function getToken() {
    return getCookie(tokenCookieName);
}

function setCookie(name,value,days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let c of ca) {
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.startsWith(nameEQ)) return c.substring(nameEQ.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function isConnected(){
    if(getToken() == null || getToken == undefined){
        return false;
    }
    else{
        return true;
    }
}


// show and hide elements based on role

function showAndHideElementsForRoles(){
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = document.querySelectorAll ('[data-show]');

    allElementsToEdit.forEach(element =>{
        switch(element.dataset.show){
            case 'disconnected':
                if(userConnected){
                    element.classList.add("d-none")
                }
                break;
            case 'connected':
                if(!userConnected){
                    element.classList.add("d-none")
                }
                break;
            case 'admin':
                if(!userConnected || role !="admin"){
                    element.classList.add("d-none")
                }
                break;
            case 'employee':
                if(!userConnected || role !="employee" && role !="admin"){
                    element.classList.add("d-none")
                }
                break;
            case 'veterinarian':
                if(!userConnected || role !="veterinarian"){
                    element.classList.add("d-none")
                }
                break;
            
        }
    })
}

// modify services

 // Define the services object
const services = {
    'service-1': {
        id: 'service-1',
        name: 'Restauration',
        description: 'Service de restauration avec diverses options alimentaires.'
    },
    'service-2': {
        id: 'service-2',
        name: 'Visite des Habitats avec un guide (gratuit)',
        description: "Venez profiter de l'expérience de nos guides pour en apprendre plus sur vos animaux préférés."
    },
    'service-3': {
        id: 'service-3',
        name: 'Visite du Zoo en petit train',
        description: "Profitez d'un moment pour faire le tour de notre zoo en petit train."
    }
};

// Get the modal elements
document.addEventListener('DOMContentLoaded', () => {
    const modifyModal = document.getElementById('ModifyModal');
    const serviceNameSelect = document.querySelector('.form-service-name');
    const serviceDescriptionTextarea = document.querySelector('.form-service-description');

    console.log (modifyModal)
    console.log (serviceNameSelect)
    console.log (serviceDescriptionTextarea)

    // Get the table rows with service data
    const serviceRows = document.querySelectorAll('tr[data-service-id]');
    
    // Create an object to store service data
    const serviceData = {};
    
    // Loop through the table rows and store service data in the object
    serviceRows.forEach((row) => {
        const serviceId = row.getAttribute('data-service-id');
        const serviceName = row.querySelector('td.service-text').textContent;
        const serviceDescription = row.querySelector('td.service-description').textContent;
        serviceData[serviceId] = { name: serviceName, description: serviceDescription };
    });
    
    // Add event listener to the service name select
    serviceNameSelect.addEventListener('change', (e) => {
        const selectedServiceId = e.target.value;
        const selectedService = serviceData[selectedServiceId];
        if (selectedService) {
            serviceDescriptionTextarea.value = selectedService.description;
        }
    });
    
    // Add event listener to the save changes button
    document.querySelector('.btn-modal').addEventListener('click', () => {
        const selectedServiceId = serviceNameSelect.value;
        const newServiceDescription = serviceDescriptionTextarea.value;
        serviceData[selectedServiceId].description = newServiceDescription;
        // Update the table row with the new description
        const tableRow = document.querySelector(`tr[data-service-id="${selectedServiceId}"]`);
        tableRow.querySelector('td.service-description').textContent = newServiceDescription;
        // Close the modal
        modifyModal.classList.remove('show');
        modifyModal.setAttribute('aria-hidden', 'true');
    });
});
