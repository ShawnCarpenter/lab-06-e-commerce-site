// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderLineItem } from '../app/render-line-item.js';
const test = QUnit.test;

test('renderLineItem takes in a product and a quantity and returns a table row element.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<tr class="items-row"><td>London Calling</td><td class="currency">$5.99</td><td>2</td><td class="currency">$11.98</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const londonCalling = {
        id: 'londonCalling',
        title: 'London Calling',
        artist: 'The Clash',
        description: 'The critically acclaimed album by The Clash',
        coverImg: 'images/london-calling.jpg',
        genre: 'Punk',
        price: 5.99,
    };
    
 
    const el = renderLineItem(londonCalling, 2);
    const actual = el.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

 

