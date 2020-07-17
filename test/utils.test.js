// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findByID, calcLinePrice, calcOrderTotal, getTapes, } from '../app/store-utils.js';

const test = QUnit.test;
const tapes = getTapes();

test('findById should accept an itemId and an array of objects. It should return the object that matches that ID or null if there are no matches', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const rumSodomyAndTheLash = {
        id: 'rumSodomyAndTheLash',
        title: 'Rum Sodomy & the Lash ',
        artist: 'The Pogues',
        description: 'Shane McGowan at his drunken best.',
        coverImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Rum_sodomy_and_the_lash.jpg/220px-Rum_sodomy_and_the_lash.jpg',
        genre: 'Folk-Punk',
        price: 11.98
    };

    const expected1 = rumSodomyAndTheLash;

    const expected2 = null;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual1 = findByID('rumSodomyAndTheLash', tapes);
    const actual2 = findByID('no', tapes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual1, expected1);
    expect.deepEqual(actual2, expected2);
});

test('calcLinePrice should take a price and a quantity and return a total rounded to two places.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const price = 5.99;
    
    const expected1 = 11.98;
    const expected2 = 5.99;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual1 = calcLinePrice(price, 2);
    const actual2 = calcLinePrice(price, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});

test('calcOrderTotal should take a cart and a product list and return a total rounded to two places.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 17.97;
    const testCart = [
        { id: 'jailbreak', quantity: 1 },
        { id: 'backInBlack', quantity: 2 }
    ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = calcOrderTotal(testCart, tapes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
   
});
 


 


