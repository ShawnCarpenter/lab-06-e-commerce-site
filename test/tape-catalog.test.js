// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { generateTapeList } from '../generateTapeList.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li><h3>74 Jailbreak</h3><img src="assets/jailbreak-cover.jpg" alt="74 Jailbreak cover image"><p class="title">74 Jailbreak</p><p class="artist">AC/DC</p><p class="genre"></p><p>$5.99</p><button value="jailbreak">Add</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const jailbreak = {
        id: 'jailbreak',
        title: '74 Jailbreak',
        artist: 'AC/DC',
        description: 'The classic album by AC/DC',
        coverImg: 'assets/jailbreak-cover.jpg',
        genre: 'rock',
        price: 5.99,
    };
    
 
    const el = generateTapeList(jailbreak);
    const actual = el.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

 


