// Créer un événement au scroll // DONE

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut // DONE

// Faire apparaitre l'image de la partie improvise // DONE

// Faire apparaitre la popup quand on est en bas du site //DONE

// Bonus : quand on clicke sur la popup elle disparait pour toujours


const nav = document.querySelector('nav')
const img1 = document.getElementById("imgImprovise")
const end = document.getElementById("popup")
console.log(end)


window.addEventListener("scroll",() => {
    let scrollStatus = window.scrollY
    console.log("scroll: " + scrollStatus)


    if(scrollStatus > 10)
    {
        nav.style.height = "60px"
    }
    else{
        nav.style.height = "90px"
    }
    if(scrollStatus > 50){
        img1.style.opacity = 1
    }
    else{
        img1.style.opacity = 0
    }

    if(scrollStatus > 600){
        end.style.opacity = 1;
        end.style.transform = "translateX(0px)"
        
        
    }

})

end.addEventListener("click",() => {
    end.style.display = "none"
})