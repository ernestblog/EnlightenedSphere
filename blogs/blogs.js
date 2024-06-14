
const sidebar = document.querySelector('.sidebar');
        const toggleButton = document.querySelector('.menuBtn');
        const sidebarLinks = document.querySelectorAll('.sidebar a');

        function toggleSidebar() {
            if (sidebar.style.display === 'none' || sidebar.style.display === '') {
                sidebar.style.display = 'block';
            } else {
                sidebar.style.display = 'none';
            }
        }

        toggleButton.addEventListener('click', toggleSidebar);

        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                sidebar.style.display = 'none';
            });
        });

/*
const closeSidebar = document.querySelector('.hideMenu');
closeSidebar.addEventListener('touchstart', function (event){
   event.preventDefault;
   hideMobileMenu();
}) */

// send email

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tica.ante19@gmail.com",
        Password : "6B48D1F22197EC2BD794E51B4F3CD3C18E18",
        To : 'tica.ante003@gmail.com',
        From : document.querySelector('.subInput').value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

// search 

function searchArticles() {
    const searchInput = document.querySelector('.searchInput').value.toLowerCase();
    const articles = document.querySelectorAll('.contUl .item');

    articles.forEach(article => {
        const title = article.querySelector('.headline').textContent.toLowerCase();

        if (title.includes(searchInput)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

document.querySelector('.searchInput').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) { // Check if Enter key is pressed
        searchArticles();
    }
});


// show dropdown
function showDropdown() {
   const dropDown = document.querySelector('.dropDown');
   dropDown.style.display = 'flex';
  }


  function toggleDropdown() {
    
    const dropDown = document.querySelector('.dropDown');
    if (dropDown.style.display === 'flex') {
      dropDown.style.display = 'none';
    } else {
      dropDown.style.display = 'flex'; 
    }
  }
  

  document.querySelector('.sortBtn').addEventListener('click', toggleDropdown);
  
  const dropDown = document.querySelector('.dropDown');
  function hideDropdown() {
    dropDown.style.display = 'none';
  }




// from to

 const blogList = document.querySelector('.contUl');
      // Get the buttons
      const newestButton = document.querySelector('.fromOld');
      const oldestButton = document.querySelector('.fromNew');

      // Sort newest to oldest when the "Newest to Oldest" button is clicked
      newestButton.addEventListener('click', () => {
          sortBlogCards(true);
          console.log('oldest-proslo');
      });

      // Sort oldest to newest when the "Oldest to Newest" button is clicked
      oldestButton.addEventListener('click', () => {
          sortBlogCards(false);
          console.log('newest-proslo');
      });

      // Function to sort blog cards
      function sortBlogCards(newestFirst) {
          // Get all blog cards
          const cards = Array.from(blogList.querySelectorAll('.item'));

          // Sort the cards based on the date
          cards.sort((cardA, cardB) => {
              const dateA = getDateValue(cardA.querySelector('.date').textContent);
              const dateB = getDateValue(cardB.querySelector('.date').textContent);
              if (newestFirst) {
                  return dateB - dateA; // Sort in descending order (newest to oldest)
              } else {
                  return dateA - dateB; // Sort in ascending order (oldest to newest)
              }
          });

          // Re-append sorted cards to the blog list
          cards.forEach(card => {
              blogList.appendChild(card);
              console.log('apendano');

          });
      }

      // Function to convert date string to JavaScript Date object
      function getDateValue(dateString) {
          const [day, month, year] = dateString.split('/');
          return new Date(`${year}-${month}-${day}`);
      }

