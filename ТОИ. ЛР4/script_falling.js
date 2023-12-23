function create_snowflake() {
  var snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 30 + 10 + 'px';
  var colors_snow = ["#AAAACC","#DDDDFF","#CCCCDD","#F3F3F3","#F0FFFF"];
  var random_color_snow = colors_snow[Math.floor(Math.random() * colors_snow.length)];
  snowflake.style.color = random_color_snow;
  snowflake.innerHTML = '❄';
  return snowflake;
}

function create_leaf() {
  var leaf = document.createElement('div');
  leaf.classList.add('leaf');
  leaf.style.left = Math.random() * window.innerWidth + 'px';
  leaf.style.animationDuration = Math.random() * 2 + 2 + 's';
  leaf.style.opacity = Math.random();
  leaf.style.fontSize = Math.random() * 30 + 10 + 'px';
  leaf.innerHTML = '🍁';
  return leaf;
}

function snowfall() {
  var snow_area = document.getElementById('falling_elements');
  var number_of_snow = 50;
  var interval_snow = 100;

  var i = 0;
  var snowfall_interval = setInterval(function() {
    if (i < number_of_snow) {
      snow_area.appendChild(create_snowflake());
      i++;
    } else {
      clearInterval(snowfall_interval);
    }
  }, interval_snow);
}

function leaffall() {
	var leaf_area = document.getElementById('falling_elements');
	var number_of_leaf = 50;
  var interval_leaf = 100;

  var i = 0;
  var leaffall_interval = setInterval(function() {
    if(i < number_of_leaf) {
      leaf_area.appendChild(create_leaf());
      i++;
    } else {
      clearInterval(leaffall_interval);
    }
  }, interval_leaf);
}

document.getElementById('snowflakes_btn').addEventListener('click', function() {
  document.querySelectorAll('.leaf').forEach(function(leaf) {
    leaf.remove();
  });
  snowfall();
});

document.getElementById('leaf_btn').addEventListener('click', function() {
  document.querySelectorAll('.snowflake').forEach(function(snowflake) {
    snowflake.remove();
  });
  leaffall();
});

snowfall();
