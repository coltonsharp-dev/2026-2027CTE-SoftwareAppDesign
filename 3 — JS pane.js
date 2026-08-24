  /* ---- Live HTML sandbox ---- */
  var code = document.getElementById('code');
  var preview = document.getElementById('preview');
  function render(){ preview.innerHTML = code.value; }
  code.addEventListener('input', render);
  render();

  /* ---- Name greeting ---- */
  var nameInput = document.getElementById('name');
  var greet = document.getElementById('greet');
  nameInput.addEventListener('input', function(){
    var n = nameInput.value.trim();
    greet.innerHTML = n ? 'Let\'s build something great, <b>' + n + '</b>.'
                        : 'Ready when you are, <b>future developer</b>.';
  });

  /* ---- Color switcher ---- */
  var palette = [
    ['#a855f7','#c084fc'], ['#22d3ee','#67e8f9'], ['#34d399','#6ee7b7'],
    ['#fb7185','#fda4af'], ['#f59e0b','#fcd34d'], ['#818cf8','#a5b4fc']
  ];
  var sw = document.getElementById('swatches');
  palette.forEach(function(p){
    var b = document.createElement('div');
    b.className = 'sw'; b.style.background = p[0];
    b.title = 'Recolor the page';
    b.addEventListener('click', function(){
      document.documentElement.style.setProperty('--accent', p[0]);
      document.documentElement.style.setProperty('--accent-2', p[1]);
    });
    sw.appendChild(b);
  });

  /* ---- Unit roadmap ---- */
  var units = [
    ['01','Your first webpage','Build a real page from scratch. It runs in a browser the same day.'],
    ['02','Make it look good','CSS: color, type, and layout. Make it feel like yours.'],
    ['03','Make it interactive','JavaScript — buttons that do things. Your page reacts to people.'],
    ['04','Multiple pages','Link pages together into a real, navigable site.'],
    ['05','Responsive design','Looks great on a phone, a tablet, and a laptop.'],
    ['06','Design like a designer','Spacing, hierarchy, and taste that make it look pro.'],
    ['07','Components and reuse','Build a piece once, reuse it everywhere. Work smart.'],
    ['08','Forms and input','Take real input from real people.'],
    ['09','Stored data','Your app starts to remember things.'],
    ['10','Designing for everyone','Make it work for every user — accessibility.'],
    ['11','Version control with Git','Save your work like a pro. Never lose progress again.'],
    ['12','Deploy your app','Put it on the real internet with a real, shareable link.'],
    ['13','Capstone project','Your idea, start to finish — designed, built, and shipped.']
  ];
  var road = document.getElementById('roadmap');
  units.forEach(function(u){
    var el = document.createElement('div');
    el.className = 'unit';
    el.innerHTML =
      '<div class="top"><span class="n">'+u[0]+'</span><span class="t">'+u[1]+'</span>'+
      '<span class="arrow">▶</span></div><div class="d">'+u[2]+'</div>';
    el.addEventListener('click', function(){ el.classList.toggle('open'); });
    road.appendChild(el);
  });
