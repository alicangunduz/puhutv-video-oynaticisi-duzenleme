// Video alanını alıyorum.
const player = document.getElementById('dyg-player-new-player_html5_api');

// Tüm keydown olaylarını yakalıyorum.
document.addEventListener('keydown', (event) => {
  switch (event.code) {
    // Eğer space tuşuna basılırsa videoyu duraklatıyorum veya oynatıyorum.
    case 'Space':
      if (player.paused) { // Eğer video duraklatılmışsa oynatıyorum.
        player.play();
      } else {
        player.pause();
      }
      break;
    // Eğer sol ok tuşuna basılırsa 10 saniye geri alıyorum.
    case 'ArrowLeft':
      player.currentTime -= 10;
      break;
    // Eğer sağ ok tuşuna basılırsa 10 saniye ileri alıyorum.
    case 'ArrowRight':
      player.currentTime += 10;
      break;
    // Eğer yukarı ok tuşuna basılırsa sesi yükseltiyorum.
    case 'ArrowUp':
      player.volume += 0.1;
      break;
    // Eğer aşağı ok tuşuna basılırsa sesi düşürüyorum.
    case 'ArrowDown':
      player.volume -= 0.1;
      break;
    // Eğer F tuşuna basılırsa videoyu tam ekran yapılıyor.
    case 'KeyF':
        player.requestFullscreen();
        break;
    // Eğer M tuşuna basılırsa videoyu mute yapıyorum.
    case 'KeyM':
        if (player.muted) { // Eğer video mute ise mute kaldırıyorum.
            player.muted = false;
        } else {
            player.muted = true;
        }
        break;
        // Diğer keydown olayları için default olarak bir şey yapmıyorum.
    default:
      break;
  }
});
