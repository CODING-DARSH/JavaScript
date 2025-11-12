document.getElementById('update-button').onclick = function() {

    // Task 1: Update the main title's text
    document.querySelector('header h1').innerText = 'Updated DOM Manipulation Tasks';

    // Task 2: Change paragraph content using innerHTML
    document.querySelector('.data-text').innerHTML =
        'This paragraph was updated using <strong>innerHTML</strong> with bold text!';

    // Task 3: Get and display the innerText of a list item
    const listItemText = document.querySelector('.item').innerText;
    console.log('First list item text: ' + listItemText);

    // Display it on the page
    const displayArea = document.querySelector('.output-area');
    displayArea.innerHTML += '<p>First list item: "' + listItemText + '"</p>';

    // Task 4: Add a new element using innerHTML
    const contentSection = document.getElementById('content-section');
    contentSection.innerHTML += '<div>This is a new element added using innerHTML</div>';

    // Task 5: Display the subtitle text below the button using innerText
    const subtitleText = document.getElementById('title-to-change').innerText;
    const button = document.getElementById('update-button');
    button.insertAdjacentHTML('afterend', '<p>Subtitle: ' + subtitleText + '</p>');

    // Task 6: Replace the entire list using innerHTML
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML =
        '<li class="item">New Item One</li>' +
        '<li class="item">New Item Two</li>' +
        '<li class="item">New Item Three</li>' +
        '<li class="item">New Item Four</li>';

    // Task 7: Add a new <div> inside the content section using innerHTML
    contentSection.innerHTML +=
        '<div><h3>Newly Added Div</h3><p>This div was added using innerHTML.</p></div>';

    // Task 8: Get a paragraph's text and display it using an alert box
    const paragraphText = document.querySelector('.data-text').textContent;
    alert('Paragraph Text: ' + paragraphText);

    // Task 9: Append a new <li> item to the existing list using innerHTML
    listContainer.innerHTML += '<li class="item">New Appended Item</li>';

    // Task 10: Update the main heading again using textContent
    document.querySelector('header h1').textContent = 'Final Updated DOM Tasks';
};
