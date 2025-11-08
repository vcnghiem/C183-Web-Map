mapboxgl.accessToken = 'pk.eyJ1IjoidmluY2VudG5naGllbSIsImEiOiJjbWg5Y2s2c3IwODR1MmpvbTJzM3Q5eTZqIn0.mRB-MTymbA4NHuNsZw5n3Q';

const map = new mapboxgl.Map({
  container: 'map', 
    style: 'mapbox://styles/vincentnghiem/cmhn0x9rv001x01sr7efrg5p9', 
  center: [-122.25939733965606, 37.871244106045195], 
  zoom: 14.75
    });
const myButton = document.getElementById('myButton');

const messageParagraph = document.getElementById('message');

myButton.addEventListener('click', () => {
  messageParagraph.textContent = 'One night last November during my freshman year, after a filling and unexpectedly satisfying dinner with my friends at the Cafe 3 dining hall on Southside, I returned to the intesection of Bancroft and Telegraph Avenues, where I had locked my bike to a nearby post an hour or so prior, to find my bike stolen. This commenced one of the lowest periods of my life, so much so that I went to the student gym for the first time in an attempt to get my mind off of the theft. The following weekend, I went to the Ashby Flea Market at the Ashby BART Station—apparently a probable destination for my nicked bike according to advice I found on Reddit—and I left with nothing...except a $5 Ralph Lauren coat, an admittedly great find. It was not until a few days later, walking to a fraternity party on a cold night with my friends to accompany them in conducting interviews of resident brothers for their project on the soundscapes of frat culture, that I stumbled upon my bike securely locked to a post a mere block away from my dorm. I could barely believe it, and I remained in that state of euphoric disbelief and renewed appreciation for my bike for the following months until April of this year, when my bike was stolen once again outside of the student union building—in point-blank view of a security camera, no less. Yet ever since then, I have not had the same luck as I did that one November night, and my bike has yet to return to me. I hope it is intact and receiving the care and attention it deserves, wherever it is and whoever is riding it.';
});