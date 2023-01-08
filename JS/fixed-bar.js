// Step by step progress bar circles script
  
  var c = document.querySelector('.c')
  var c_1 = document.querySelector('.c-1');
  var c_2 = document.querySelector('.c-2');
  var c_3 = document.querySelector('.c-3');
  var connector = document.querySelector('.inside');
  var connector_1 = document.querySelector('.inside-1');
  var connector_2 = document.querySelector('.inside-2')
  let description = document.querySelector('.description')
  let description_1 = document.querySelector('.description-1')
  let description_2 = document.querySelector('.description-2')
  let description_3 = document.querySelector('.description-3')
    
  description,c.addEventListener('click', () => {
    c.classList.add('forwards');
    connector.classList.remove('forwards');
    c_1.classList.remove('forwards');
    connector_1.classList.remove('forwards');
    c_2.classList.remove('forwards');
    connector_2.classList.remove('forwards');
    c_3.classList.remove('forwards');
    description.classList.add('clicked');
    description_1.classList.remove('clicked');
    description_2.classList.remove('clicked');
    description_3.classList.remove('clicked');
  });

  c_1.addEventListener('click', () => {
    c.classList.add('forwards');
    connector.classList.add('forwards');
    c_1.classList.add('forwards');
    connector_1.classList.remove('forwards');
    c_2.classList.remove('forwards')
    connector_2.classList.remove('forwards');
    c_3.classList.remove('forwards');
    description.classList.remove('clicked');
    description_1.classList.add('clicked');
    description_2.classList.remove('clicked');
    description_3.classList.remove('clicked');
  });
  
  c_2.addEventListener('click', () => {
    c.classList.add('forwards');
    connector.classList.add('forwards')
    c_1.classList.add('forwards');
    connector_1.classList.add('forwards');
    c_2.classList.add('forwards');
    connector_2.classList.remove('forwards');
    c_3.classList.remove('forwards');
    description.classList.remove('clicked');
    description_1.classList.remove('clicked');
    description_2.classList.add('clicked');
    description_3.classList.remove('clicked');
  });

  c_3.addEventListener('click', () => {
    c.classList.add('forwards');
    connector.classList.add('forwards');
    c_1.classList.add('forwards');
    connector_1.classList.add('forwards');
    c_2.classList.add('forwards');
    connector_2.classList.add('forwards');
    c_3.classList.add('forwards');
    description.classList.remove('clicked');
    description_1.classList.remove('clicked');
    description_2.classList.remove('clicked');
    description_3.classList.add('clicked');
  });

  // Step by step progress bar descriptions script

  description.addEventListener('click', () => {
    c.classList.add('forwards');
    connector.classList.remove('forwards');
    c_1.classList.remove('forwards');
    connector_1.classList.remove('forwards');
    c_2.classList.remove('forwards');
    connector_2.classList.remove('forwards');
    c_3.classList.remove('forwards');
    description.classList.add('clicked');
    description_1.classList.remove('clicked');
    description_2.classList.remove('clicked');
    description_3.classList.remove('clicked');
  });

  description_1.addEventListener('click', () => {
    c.classList.add('forwards');
    connector.classList.add('forwards');
    c_1.classList.add('forwards');
    connector_1.classList.remove('forwards');
    c_2.classList.remove('forwards')
    connector_2.classList.remove('forwards');
    c_3.classList.remove('forwards');
    description.classList.remove('clicked');
    description_1.classList.add('clicked');
    description_2.classList.remove('clicked');
    description_3.classList.remove('clicked');
  });

  description_2.addEventListener('click', () => {
    c.classList.add('forwards');
    connector.classList.add('forwards')
    c_1.classList.add('forwards');
    connector_1.classList.add('forwards');
    c_2.classList.add('forwards');
    connector_2.classList.remove('forwards');
    c_3.classList.remove('forwards');
    description.classList.remove('clicked');
    description_1.classList.remove('clicked');
    description_2.classList.add('clicked');
    description_3.classList.remove('clicked');
  })

  description_3.addEventListener('click', () => {
    c.classList.add('forwards');
    connector.classList.add('forwards');
    c_1.classList.add('forwards');
    connector_1.classList.add('forwards');
    c_2.classList.add('forwards');
    connector_2.classList.add('forwards');
    c_3.classList.add('forwards');
    description.classList.remove('clicked');
    description_1.classList.remove('clicked');
    description_2.classList.remove('clicked');
    description_3.classList.add('clicked');
  })

// Fixed bar on scroll script

  window.onscroll = function() {fixed_bar()};

  var fixed_progress = document.getElementById('fixed-bar');

  var fixed = fixed_progress.offsetTop;

  function fixed_bar() {
    if (window.pageYOffset > fixed) {
      fixed_progress.classList.add("fixed");
    } else {
      fixed_progress.classList.remove("fixed");
    }
  }
