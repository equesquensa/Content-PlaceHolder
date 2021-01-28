const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')


setTimeout(getData, 2500)

function getData(){

  header.innerHTML = '<img src="img/hpblack.jpg" alt=""></img>'
  title.innerHTML = 'Music is The Essence Of Life'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore harum dolor id, enim hic.'
  profile_img.innerHTML = '<img src="img/orishas.jpg" alt="">'
  name.innerHTML = 'Orishas'
  date.innerHTML = 'Oct 08, 2020'


  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}

