class Album {
  download() {
    // Default behavior
  }
}

class SharedAlbum extends Album {
  override download() {
    // Override to get info from many sources
  }
}

class GoodAlbum extends Album {
  download() {
    // Override to get info from many sources
  }
}
