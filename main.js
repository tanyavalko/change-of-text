let getSel = x => document.querySelector(x);
let getSelAll = x => document.querySelectorAll(x);

//change pages
getSel('.btn-edit').addEventListener('click', function () {
    getSel('.first-page').style.display = 'none';
    getSel('.second-page').style.display = 'block';
});
getSel('.btn-save').addEventListener('click', function () {
    getSel('.second-page').style.display = 'none';
    getSel('.first-page').style.display = 'block';
    getSel('.container-first-page .content-group-first').innerHTML = getSel('.content-group-second').innerText;
})

//first page
getSel('.btn-bold').addEventListener('click', function () {
    if (this.dataset.status === "0") {
        getSel('.container-first-page').style.fontWeight = 'bold';
        this.dataset.status = 1;
    } else {
        getSel('.container-first-page').style.fontWeight = 'normal';
        this.dataset.status = 0;
    }
});
getSel('.btn-italic').addEventListener('click', function () {
    if (this.dataset.status === "0") {
        getSel('.container-first-page').style.fontStyle = 'italic';
        this.dataset.status = 1;
    } else {
        getSel('.container-first-page').style.fontStyle = 'normal';
        this.dataset.status = 0;
    }
});
getSel('.btn-underline').addEventListener('click', function () {
    if (this.dataset.status === "0") {
        getSel('.container-first-page').style.textDecoration = 'underline';
        this.dataset.status = 1;
    } else {
        getSel('.container-first-page').style.textDecoration = 'none';
        this.dataset.status = 0;
    }
});
getSel('.btn-through').addEventListener('click', function () {
    if (this.dataset.status === "0") {
        getSel('.container-first-page').style.textDecoration = 'line-through';
        this.dataset.status = 1;
    } else {
        getSel('.container-first-page').style.textDecoration = 'none';
        this.dataset.status = 0;
    }
});
getSel('.btn-left').addEventListener('click', function () {
    getSel('.container-first-page').style.textAlign = 'left';
});
getSel('.btn-center').addEventListener('click', function () {
    getSel('.container-first-page').style.textAlign = 'center';
});
getSel('.btn-right').addEventListener('click', function () {
    getSel('.container-first-page').style.textAlign = 'right';
});


// Color for div
let arrColor = ['#fff', '#E32636', '#CD9575', '#464451', '#6A5ACD', '#614051',
    '#6E5160', '#CCCCFF', '#79553D', '#BDECB6', '#003153', '#30D5C8',
    '#A5260A', '#FFDB8B', '#F984E5', '#FFDF84', '#FFCA86', '#8CCB5E',
    '#FFDC33', '#47A76A', '#000'];

for (let i = 0; i < arrColor.length; i++) {
    getSelAll('.text-colors-group div')[i].dataset.color = arrColor[i];
    getSelAll('.text-colors-group div')[i].style.backgroundColor = arrColor[i];
}

for (let i = 0; i < arrColor.length; i++) {
    getSelAll('.bg-colors-group div')[i].dataset.color = arrColor[i];
    getSelAll('.bg-colors-group div')[i].style.backgroundColor = arrColor[i];
}

//choose size in top panel
let formFontSize = document.forms['form-fontSize'];
for (let i = 0; i < formFontSize.length; i++) {
    formFontSize.elements[i].addEventListener('click', function () {
        let valFontSize = this.value;
        getSel('.container-first-page').style.fontSize = valFontSize;
    })
}

//choose colors of text in top panel
for (let i = 0; i < getSel('.text-colors-group').children.length; i++) {
    getSel('.text-colors-group').children[i].addEventListener('click', function () {
        let colorText = this.dataset.color;
        getSel('.container-first-page').style.color = colorText;
    });
}
//choose colors of bg in top panel
for (let i = 0; i < getSel('.bg-colors-group').children.length; i++) {
    getSel('.bg-colors-group').children[i].addEventListener('click', function () {
        let colorBg = this.dataset.color;
        getSel('.container-first-page').style.backgroundImage = '';
        getSel('.container-first-page').style.backgroundColor = colorBg;
    });
}
//choose image of bg in top panel
for (let i = 0; i < getSel('.tab-img').children.length; i++) {
    getSel('.tab-img').children[i].addEventListener('click', function () {
        let srcImg = this.getAttribute("src");
        getSel('.container-first-page').style.backgroundImage = `url(${srcImg})`;
        getSel('.container-first-page').style.backgroundSize = 'cover';
        getSel('.container-first-page').style.backgroundRepeat = 'no-repeat';
    });
}

// choose image from file
getSel('#inputFile').addEventListener('change', function (event) {
    let url = URL.createObjectURL(event.target.files[0]);
    getSel('.container-first-page').style.backgroundImage = `url(${url})`;
    getSel('.container-first-page').style.backgroundSize = 'cover';
    getSel('.container-first-page').style.backgroundRepeat = 'no-repeat';
});

//sign in
getSel('.btn-sign').onclick = function (ev) {
    for (let i = 0; i < getSelAll('.form-sign input').length; i++) {
        if (getSelAll('.form-sign input')[i].value === '') {
            ev.preventDefault();
            getSelAll('.form-sign input')[i].style.borderColor = 'red';
            getSel('.form-sign .text-validate-empty').innerText = 'Value is empty';
            getSel('.form-sign .text-validate-empty').style.color = 'red';
            getSel('.form-sign .text-validate-empty').style.fontSize = '15px';
        } else if (getSelAll('.form-sign input')[i].value !== 'admin') {
            ev.preventDefault();
            getSelAll('.form-sign input')[i].style.borderColor = 'red';
            console.log(getSelAll('.form-sign input')[i].style.borderColor);
            getSel('.form-sign .text-validate-empty').innerText = 'Please check your password or login';
            getSel('.form-sign .text-validate-empty').style.color = 'red';
            getSel('.form-sign .text-validate-empty').style.fontSize = '15px';
        }
    }
}


//second page
getSel('.text-group-second').innerText = getSel('.text-group-first').innerHTML;


//create table
let valBorderStyle = '';
getSel('#type-border').addEventListener('change', function () {
    valBorderStyle = this.value;
});
let valBorderColor = '';
getSel('#color-border').addEventListener('change', function () {
    valBorderColor = this.value;
});


let countTr = getSel('#count-tr');
let countTd = getSel('#count-td');
let widthTd = getSel('#width-td');
let heightTd = getSel('#height-td');
let widthBorder = getSel('#width-border');

console.log(getSelAll('#modalTable .form-control'));

getSel('.btn-create-table').addEventListener('click', function () {

    let check = true;
    if (countTr.value === '' || !isNumber(+countTr.value)) {
        countTr.classList.add('form-control-invalid');
        check = false;
    } else {
        countTr.classList.remove('form-control-invalid');

    }

    if (countTd.value === '' || !isNumber(+countTd.value)) {
        countTd.classList.add('form-control-invalid');
        check = false;
    } else {
        countTd.classList.remove('form-control-invalid');
    }

    if (widthTd.value === '' || !isNumber(+widthTd.value)) {
        widthTd.classList.add('form-control-invalid');
        check = false;
    } else {
        widthTd.classList.remove('form-control-invalid');

    }

    if (heightTd.value === '' || !isNumber(+heightTd.value)) {
        heightTd.classList.add('form-control-invalid');
        check = false;
    } else {
        heightTd.classList.remove('form-control-invalid');

    }

    if (widthBorder.value === '' || !isNumber(+widthBorder.value)) {
        widthBorder.classList.add('form-control-invalid');
        check = false;
    } else {
        widthBorder.classList.remove('form-control-invalid');

    }

    if (valBorderStyle === '') {
        getSel('#type-border').classList.add('form-control-invalid');
        check = false;
    } else {
        getSel('#type-border').classList.remove('form-control-invalid');

    }

    if (valBorderColor === '') {
        getSel('#color-border').classList.add('form-control-invalid');
        check = false;
    } else {
        getSel('#color-border').classList.remove('form-control-invalid');

    }

    if(!check) {
        getSel('#modalTable .text-validate-empty').innerText = 'Value is invalid';
        getSel('#modalTable .text-validate-empty').style.color = 'red';
        getSel('#modalTable .text-validate-empty').style.fontSize = '15px';
    }

    if (check) {
        getSel('#modalTable .text-validate-empty').innerText = '';
        createTable(valBorderStyle, valBorderColor);
    }


});

getSel('.btn-reset').addEventListener('click', function () {
    for (let i = 0; i < getSelAll('#modalTable .form-control').length; i++) {
        getSelAll('#modalTable .form-control')[i].value = '';
    }
    getSel('#type-border').value = '';
    getSel('#color-border').value = '';
});

function createTable(brStyle, brColor) {
    let outerTable = document.createElement('div');
    let elTable = document.createElement('table');
    let countTr = getSel('#count-tr').value;
    let countTd = getSel('#count-td').value;
    let tr;
    let td;
    for (let i = 0; i < countTr; i++) {
        tr = document.createElement('tr');
        elTable.appendChild(tr);
        for (let j = 0; j < countTd; j++) {
            td = document.createElement('td');
            td.style.width = getSel('#width-td').value + 'px';
            td.style.height = getSel('#height-td').value + 'px';
            td.style.borderWidth = getSel('#width-border').value + 'px';
            td.style.borderStyle = brStyle; // brstyle
            td.style.borderColor = brColor; // brcolor
            td.innerText = 'TD';
            tr.appendChild(td);
        }
    }
    outerTable.appendChild(elTable);
    getSel('.container-second-page .content-group-second').appendChild(document.createTextNode(outerTable.innerHTML));
}

//create list
//create ol list
let valLiOlStyle = '';
getSel('#type-list-ol').addEventListener('change', function () {
    valLiOlStyle = this.value;
});

let countLiOl = getSel('#count-li-ol');

getSel('.btn-create-ol-list').addEventListener('click', function(){
    let check = true;

    if(countLiOl.value  === '') {
        countLiOl.classList.add('form-control-invalid');
        check = false;
    } else {
        countLiOl.classList.remove('form-control-invalid');        
    }

    if(valLiOlStyle === '') {
        getSel('#type-list-ol').classList.add('form-control-invalid');
        check = false;
    } else {
        getSel('#type-list-ol').classList.remove('form-control-invalid');
    }

    if(!check) {
        getSel('#modalOl .text-validate-empty').innerText = 'Value is invalid';
        getSel('#modalOl .text-validate-empty').style.color = 'red';
        getSel('#modalOl .text-validate-empty').style.fontSize = '15px';
    }

    if(check) {
        getSel('#modalOl .text-validate-empty').innerText = '';
        createList('ol', countLiOl, valLiOlStyle);
    }
    
});

getSel('.btn-reset-ol').addEventListener('click', function () { 
    countLiOl.value = '';
    getSel('#type-list-ol').value = '';
});


//create ul list
let valLiUlStyle = '';
getSel('#type-list-ul').addEventListener('change', function () {
    valLiUlStyle = this.value;
});

let countLiUl = getSel('#count-li-ul');

getSel('.btn-create-ul-list').addEventListener('click', function(){
    let check = true;

    if(countLiUl.value  === '') {
        countLiUl.classList.add('form-control-invalid');
        check = false;
    } else {
        countLiUl.classList.remove('form-control-invalid');        
    }

    if(valLiUlStyle === '') {
        getSel('#type-list-ul').classList.add('form-control-invalid');
        check = false;
    } else {
        getSel('#type-list-ul').classList.remove('form-control-invalid');
    }

    if(!check) {
        getSel('#modalUl .text-validate-empty').innerText = 'Value is invalid';
        getSel('#modalUl .text-validate-empty').style.color = 'red';
        getSel('#modalUl .text-validate-empty').style.fontSize = '15px';
    }

    if(check) {
        getSel('#modalUl .text-validate-empty').innerText = '';
        createList('ul', countLiUl, valLiUlStyle);
    }
    
});

getSel('.btn-reset-ul').addEventListener('click', function () { 
    countLiUl.value = '';
    getSel('#type-list-ul').value = '';
});

function createList(typeList, countLi, liStyle) {
    let elList = document.createElement(typeList); // ul or ol
    let countList = countLi.value;
    let li;
    let outerList = document.createElement('div');
    for (let i = 0; i < countList; i++) {
        li = document.createElement('li');
        li.style.listStyleType = liStyle;
        li.innerText = 'this is create List'
        elList.appendChild(li);
    }
    outerList.appendChild(elList);
    getSel('.container-second-page .content-group-second').appendChild(document.createTextNode(outerList.innerHTML));
}

// check if number
function isNumber(value) {
    return (value instanceof Number || typeof value === 'number') && !isNaN(value);
}



