const buttons = document.querySelectorAll(".buttons")
const caroussel = document.querySelectorAll(".caroussel")

buttons.forEach((button)=> {
    button.addEventListener("click", (e)=> {
        const modif = e.target.id === "next"? 1 : -1;
        const active = document.querySelector(".active");

        newIndex = modif + [...caroussel].indexOf (active);

        if (newIndex < 0) newIndex = [...caroussel].length - 1;
        if (newIndex>= [...caroussel].length) newIndex = 0;
        caroussel[newIndex].classList.add("active")
        active.classList.remove("active");
        
    });
});

