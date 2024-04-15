
async function Get_slider_info() {
  try {
    var Slider_counter = 0;
    var Left = document.getElementById('Left');
    var Right = document.getElementById('Right');
    var Slider_info = await fetch('../package.json');
    var Pagintaion_box = document.getElementById('Pagination');
var Pagination_counter = 1;
var Pagination_data = [];
    Data = await Slider_info.json();
    Data.Home.Main_slider.map(()=> {
      var Pagination = document.createElement('div');
       Pagination.classList.add(`Pagination${Pagination_counter}`)
       Pagintaion_box.append(Pagination)
       var Pagination_span = document.createElement('span')
       Pagination_span.innerText = Pagination_counter
       Pagination.append(Pagination_span);
       Pagination_counter++;
      Pagination_data.push(Pagination)
    })
    anime({
      targets:'#Pagination > div',
      translateY:[300,0],
      duration:1000,
      delay:anime.stagger(100)
    })
    
  
    var Slider_box = document.getElementById('Slider_page');
    function Slider_page(index) {
      Pagination_data.map((item)=> {
        item.classList.remove('Active')
        item.classList.add('Disable')
      })
      Pagination_data[index].classList.remove('Disable')
      Pagination_data[index].classList.add('Active')
      Slider_box.innerHTML = '';
      var Slide = document.createElement('div');
      Slide.classList.add('Slide');
      Slider_box.append(Slide);
      var Background_box = document.createElement('div');
      Background_box.classList.add('Background_box');
      var Background1 = document.createElement('div');
      Background1.style.background = `url(${Data.Home.Main_slider[0].background})`;
      Background1.style.backgroundSize = 'cover';
      Background1.style.backgroundPosition = 'center'
      Background1.classList.add('Background1')
      Background_box.append(Background1);
      var Background2 = document.createElement('div');
      Background2.style.background = `url(${Data.Home.Main_slider[1].background})`;
      Background2.style.backgroundSize = 'cover';
      Background2.style.backgroundPosition = 'center'
      Background2.classList.add('Background2')
      Background_box.append(Background2);
      var Background3 = document.createElement('div');
      Background3.style.background = `url(${Data.Home.Main_slider[2].background})`;
      Background3.style.backgroundSize = 'cover';
      Background3.style.backgroundPosition = 'center'
      Background3.classList.add('Background3');
      Background1.classList.toggle('Background');
      Background2.classList.toggle('Background');
      Background3.classList.toggle('Background');
      Background_box.append(Background3);
      if (index == 0) {

        Background2.style.zIndex = 0;
        Background3.style.zIndex = 0;
        Background1.style.zIndex = 1;
        Background2.style.animation = 'Hide .5s  forwards'
        Background3.style.animation = 'Hide .5s forwards'
        Background1.style.animation = 'Visible .5s  forwards'
      }
      else if (index == 1) {
        Background2.style.zIndex = 1;
        Background3.style.zIndex = 0;
        Background1.style.zIndex = 0;
        Background2.style.animation = 'Visible .5s ease-in-out forwards'
        Background3.style.animation = 'Hide .5s ease-in-out forwards'
        Background1.style.animation = 'Hide .5s ease-in-out forwards'
      }
      else {
        Background2.style.zIndex = 0;
        Background3.style.zIndex = 1;
        Background1.style.zIndex = 0;
        Background2.style.animation = 'Hide .5s ease-in-out forwards'
        Background3.style.animation = 'Visible .5s ease-in-out forwards'
        Background1.style.animation = 'Hide .5s ease-in-out forwards'
      }

      Slide.append(Background_box);
      var Info_box = document.createElement('div');
      Info_box.classList.add('Info_box');
      Slide.append(Info_box);
      var Title_box = document.createElement('div');
      Title_box.classList.add('Title_box');
      Info_box.append(Title_box);
      var Title = document.createElement('h1');
      Title.innerText = Data.Home.Main_slider[index].title;
      Title_box.append(Title);
      var Button_box = document.createElement('div');
      Button_box.classList.add('Button_box');
      Info_box.append(Button_box);
      var Btn1 = document.createElement('button');
      Btn1.classList.add('Btn1');
      Btn1.innerText = 'VIEW MORE';
      Button_box.append(Btn1);
      var Btn2 = document.createElement('button');
      Btn2.classList.add('Btn2');
      Btn2.innerText = 'SHOP NOW';
      Button_box.append(Btn2);
      var tl = anime.timeline({

        duration: 1500
      });

      // Add children
      tl
        .add({
          targets: Title,
          translateX: [1000, 0],
          scale:[0,1],
          
        })
        .add({
          targets: [Btn1, Btn2],
          opacity: [0, 1],
          translateY: [200, 0]
        })

       

    }

   
   var Interval = setInterval(() => {
      if(Slider_counter < Data.Home.Main_slider.length - 1) {
        Slider_counter++;
        Slider_page(Slider_counter)
      }
      else if(Slider_counter == Data.Home.Main_slider.length - 1) {
        Slider_counter =0;
        Slider_page(Slider_counter)
      }
    
    
    }, 4000);
    Slider_page(Slider_counter);
    Pagination_data.map((item)=> {
      
     
      item.addEventListener('click',(event)=> {

        if (event.target.closest('.Pagination1')) {
           clearInterval(Interval);
           Slider_counter = 0;
           Slider_page(Slider_counter)
        }
        else if(event.target.closest('.Pagination2')) {
          clearInterval(Interval);
          Slider_counter = 1;
          Slider_page(Slider_counter)
        }
        else {
          clearInterval(Interval);
          Slider_counter = 2;
          Slider_page(Slider_counter)
        }
      })
    })
    
    Right.addEventListener('click', () => {
      if (Slider_counter < Data.Home.Main_slider.length - 1) {
        clearInterval(Interval)
        Slider_counter++;
        Slider_page(Slider_counter)
      }
      else if(Slider_counter == Data.Home.Main_slider.length - 1) {
        clearInterval(Interval)
        Slider_counter = 0;
        Slider_page(Slider_counter)
      }
    })
    Left.addEventListener('click', () => {
      if (Slider_counter > 0) {
        clearInterval(Interval)
        Slider_counter--;
        Slider_page(Slider_counter)
      }
      else if(Slider_counter == 0) {
        clearInterval(Interval);
        Slider_counter = Data.Home.Main_slider.length -1;
        Slider_page(Slider_counter)
      }
    })
  }
  catch (error) {
    console.log(error);
  }
}
Get_slider_info()


