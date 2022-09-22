import { disco } from "./directory.js"


console.log(disco);

(function(){

    const activeView = document.getElementById("pageView");

    const popGridView = () => {
        
        disco.map((album, idx) => {
            console.log(idx)
            makeTile(album);
        })
    }

    const makeTile = (item) => {
        // console.log(item.artlink);
        let newView = document.createDocumentFragment();
        const gridDiv = document.createElement("article");
        gridDiv.classList.add("tile");

        const tilePic = document.createElement("img");
        // tilePic.src = `/goods/${item.artLink}`;
        tilePic.src = item.webLink;
        gridDiv.appendChild(tilePic);

        const bigInfo = document.createElement("p");
        bigInfo.classList.add("big-info");
        bigInfo.innerText = `${item.artist} - ${item.title}`;
        gridDiv.appendChild(bigInfo);



        // console.log(item)
        // item.map(infos => {
        //     const titleRow = document.createElement("p");
        //     titleRow.innerText = infos;
        //     titleRow.classList.add(`tile-${infos}`);

        //     gridDiv.appendChild(titleRow);

        // })

        newView.appendChild(gridDiv);
        document.getElementById("pageView").appendChild(newView)

    }


    popGridView();
})();
