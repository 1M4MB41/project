'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt("Один из последних просмотренных фильмов?", ''),
    d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);





// Место для первой задачи
function firstTask() {
    let a = 5;
    while (a < 11) {
        console.log(a);
        a++;
    }

}

// Место для второй задачи
function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i == 13) {
            break;
        }
        console.log(i);
    }


}

// Место для третьей задачи
function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }


}

// Место для четвертой задачи

// Цикл, который нужно переписать:


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        }
        else {
            console.log(i);
        }
        i++;
    }

}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    let j = 5;

    for (let i = 0; j == 10; i++) {
        arrayOfNumbers[i] = j;
        j++;
    }

    // Не трогаем
    return arrayOfNumbers;
}

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}


  * 
 ***
*****



    first: for (let i = 0; i < 3; i++) {
        console.log(`First level: ${i}`);
        for (let j = 0; j < 3; j++) {
            console.log(`Second level: ${j}`);
            for (let k = 0; k < 3; k++) {
                if (k === 2) continue first;
                console.log(`Third level: ${k}`);

            }
        }
    }

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}

console.log(result);
console.log(arr);

let r = 4;
console.log(typeof (r));

const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++)
    if (typeof (data[i]) === 'number') {
        data[i] *= 2;
    } else if (typeof (data[i]) === 'string') {
        data[i] += ' - done';
    }
console.log(data);


let result = '';
let space = '';
const maxStar = 5;
const levels = 3;

first: for (let i = 1; i <= maxStar; i++) {
    if (i % 2 == 0) continue first;
    for (let j = 1; j <= levels - i; j++)
        result += ' ';
    for (let k = 0; k < i; k++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);
  *
 ***
*****