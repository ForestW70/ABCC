import { disco, artTile } from "./directory.js"


console.log(artTile);

(function(){

    const activeView = document.getElementById("pageView");

    const popGridView = () => {
        
        disco.map((album, idx) => {
            // console.log(idx)
            makeTile(album);
        })

        artTile.map((art, idx) => {
            // console.log(idx);
            makeTile(art);
        })
    }

    const makeTile = (item) => {
        // console.log(item.artlink);
        let newView = document.createDocumentFragment();
        const gridDiv = document.createElement("article");
        gridDiv.classList.add("tile");

        const tilePic = document.createElement("img");
        tilePic.src = item.webLink;
        gridDiv.appendChild(tilePic);

        const bigArtist = document.createElement("p");
        bigArtist.classList.add("big-artist");
        bigArtist.innerText = item.artist;
        gridDiv.appendChild(bigArtist);

        const bigTitle = document.createElement("p");
        bigTitle.classList.add("big-title");
        bigTitle.innerText = item.title;
        gridDiv.appendChild(bigTitle);

        newView.appendChild(gridDiv);
        document.getElementById("pageView").appendChild(newView)

    }

    const tileDivs = document.querySelectorAll(".tile");
    
    tileDivs.forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();
            console.log(btn);
        })
    })



    popGridView();
})();
