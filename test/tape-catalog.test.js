// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

/* 
"<li>
                <h3>'74 Jailbreak EP by AC/DC</h3>
                <img src="/assets/220px-Ac-dc-74-jailbreak-cover.jpg" alt="74 Jailbreak cover image">
                <p class="title">74 Jailbreak</p>
                <p class="artist">AC/DC</p>
                <p class="genre">Rock</p>
                <p class="price">$5.99</p>
                <button value="1">Add</button>
            </li>"
*/
