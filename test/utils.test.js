// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findByID, calcLineItem } from '../app/store-utils.js';
const test = QUnit.test;


test('findById should accept an itemId and an array of objects. It should return the object that matches that ID or null if there are no matches', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const jailbreak = {
        id: 'jailbreak',
        title: '74 Jailbreak',
        artist: 'AC/DC',
        description: 'The classic album by AC/DC',
        coverImg: 'images/jailbreak-cover.jpg',
        genre: 'Rock',
        price: 5.99,
    };
    
    const backInBlack = {
        id: 'backInBlack',
        title: 'Back in Black',
        artist: 'AC/DC',
        description: 'The first album featuring Brian Johnson',
        coverImg: 'images/back-in-black.png',
        genre: 'Rock',
        price: 5.99,
    };
    
    const londonCalling = {
        id: 'londonCalling',
        title: 'London Calling',
        artist: 'The Clash',
        description: 'The critically acclaimed album by The Clash',
        coverImg: 'images/london-calling.jpg',
        genre: 'Punk',
        price: 5.99,
    };
    
    const louderThanLove = {
        id: 'louderThanLove',
        title: 'Louder Than Love',
        artist: 'SoundGarden',
        description: 'Soundgarden\'s major label debut',
        coverImg: 'images/louder-than-love.png',
        genre: 'Grunge',
        price: 5.99,
    };
    
    const transContinentalHustle = {
        id: 'transContinentalHustle',
        title: 'Trans-Continental Hustle',
        artist: 'Gogol Bordello',
        description: 'Punk rock with accordions',
        coverImg: './images/Trans-ContinentalHustle.jpg',
        genre: 'Folk-Punk',
        price: 14.98,
    
    };
    
    const rumSodomyAndTheLash = {
        id: 'rumSodomyAndTheLash',
        title: 'Rum Sodomy & the Lash ',
        artist: 'The Pogues',
        description: 'Shane McGowan at his drunken best.',
        coverImg: 'images/Rum_sodomy_and_the_lash.jpg',
        genre: 'Folk-Punk',
        price: 11.98
    };
    
    
    
    
    const tapes = [
        jailbreak,
        backInBlack,
        londonCalling,
        louderThanLove,
        transContinentalHustle,
        rumSodomyAndTheLash
    ];
    const expected1 = rumSodomyAndTheLash;

    const expected2 = null;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual1 = findByID('rumSodomyAndTheLash', tapes);
    const actual2 = findByID('', tapes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});

test('calcLineItem should take a price and a quantity and return a total rounded to two places.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const price = 5.99;
    
    const expected1 = 11.98;
    const expected2 = 5.99;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual1 = calcLineItem(price, 2);
    const actual2 = calcLineItem(price, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});

 


 


