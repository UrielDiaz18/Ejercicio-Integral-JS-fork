const showdescription = document.getElementById("showDescription");
const description = document.getElementById("description");
let expanded = false;

export function showDetails(){
    showdescription.addEventListener("click", () => {
        if(!expanded){
            expanded = true;
            showdescription.textContent = "Mostrar menos...";
            description.innerHTML = `
            Kit basico para el cuidado de la piel

            <div id="fulldescription">
                <ul>
                    <li>Limpiador facial</li>
                    <li>Tónico</li>
                    <li>Crema hidratante</li>
                    <li>Protector solar</li>
                </ul>
            </div>
            <strong>Este kit es ideal para mantener una piel saludable y radiante</strong>
            `;
        } else {
            expanded = false;
            showdescription.innerText = "Mostrar más...";
            description.innerText = "Kit basico para el cuidado de la piel";
        }

    });
}
    



    
    
