// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { generateTapeList } from '../app/generateTapeList.js';
const test = QUnit.test;

test('generateTapeList should read a javascript object and return an HTML element that matches what we want on the page.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="album"><h3 class="item-heading">74 Jailbreak</h3><img src="assets/jailbreak-cover.jpg" alt="74 Jailbreak cover image" class="cover-photo"><p class="artist">AC/DC</p><p class="title">74 Jailbreak</p><p class="genre">rock</p><p class="price">$5.99</p><button value="jailbreak">Add</button></li>';
    
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

 


