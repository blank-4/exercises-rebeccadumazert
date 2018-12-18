  // Solution varies from version prescribed by Wes Bos
  function playSound (e) {
    console.log(e);
    // sélectionne le son correspondant à la touche appuyée
    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // sélectionne la div qui correspond à la touche appuyée
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // ".key[data-key=" + e.keyCode + "]"
    // s'il n'y a pas d'audio, alors return (sort de la fonction et arrête là)
    if (!audio) return;// handle null keys
    // je mets l'audio à 0 sec
    audio.currentTime = 0; // allow fast play
    // je joue l'audio
    audio.play();
    // ajoute la classe playing à la div
    key.classList.add('playing');
  }

  function endSound (e) {
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log("end " + key)
    if(!key) return;
    key.classList.remove('playing');
  }

  document.addEventListener('keydown', playSound);
  document.addEventListener('keyup', endSound);