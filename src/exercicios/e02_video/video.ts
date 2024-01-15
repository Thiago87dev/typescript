interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement | null
  playButton: HTMLButtonElement | null
  stopButton: HTMLButtonElement | null
}

interface VideoPlayerProtocols {
  playToggle(): void
  stop(): void
  iniciarEventos(): void
}

export default class VideoPlayer implements VideoPlayerProtocols {
  private videoPlayer: HTMLVideoElement | null
  private playButton: HTMLButtonElement | null
  private stopButton: HTMLButtonElement | null

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer
    this.playButton = videoPlayerElements.playButton
    this.stopButton = videoPlayerElements.stopButton
  }
  stop(): void {
    throw new Error('Method not implemented.')
  }

  iniciarEventos(): void {
    if (this.playButton) {
      this.playButton.addEventListener('click', () => {
        this.playToggle()
      })
    }

    if (this.stopButton) {
      this.stopButton.addEventListener('click', () => {
        if (this.videoPlayer) {
          this.videoPlayer.pause()
          this.videoPlayer.currentTime = 0
        }
        if (this.playButton) {
          this.playButton.innerText = 'Play'
        }
      })
    }
  }

  playToggle(): void {
    if (this.playButton) {
      if (this.videoPlayer) {
        if (this.videoPlayer.paused) {
          this.videoPlayer.play()
          this.playButton.innerText = 'Pause'
        } else {
          this.videoPlayer.pause()
          this.playButton.innerText = 'Play'
        }
      }
    }
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
})

videoPlayer.iniciarEventos()
