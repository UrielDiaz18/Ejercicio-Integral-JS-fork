const statusBadge = document.getElementById("statusBadge");
const changeStatus = document.getElementById("changeStatus");
const statusText = document.getElementById("statusText");
let available = true;

export function changeAvailability(){
    changeStatus.addEventListener("click", () => {
        if(available){
            available = false;
            statusBadge.innerText = "No disponible";
            statusText.innerText= "No disponible";
            statusBadge.style.color="var(--color-danger)";
            statusText.style.color="var(--color-danger)";
            statusBadge.style.backgroundColor="var(--color-danger-light)";
        } else {
            available = true;
            statusBadge.innerText = "Disponible";
            statusText.innerText= "Disponible";
            statusBadge.style.color="var(--color-success)";
            statusText.style.color="var(--color-success)";
            statusBadge.style.backgroundColor="var(--color-success-light)";
        }
    });
}