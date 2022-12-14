import React from 'react'
import { useSongContext } from '@/context/SongContext'
import './songlist.css'

const SongList = () => {
  const context = useSongContext()

  return (
    <div>
      {
        context.loading
          ? <h1>Cargando...</h1>
          : context.list.filter(song => {
            if (context.search === '') {
              return song // Si la busqueda es vacía, retorno todas las canciones
            } else if (song.title.toLowerCase().includes(context.search.toLowerCase())) {
              return song // Retorno la canción que cumple con el criterio de busqueda
            }
            return null // Ninguna canción coincide
          }).map((song) => (
            <div className='row-song' key={song.id} onClick={() => { context.setSelectedSong(song) }}>
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
            </div>
          ))
      }
    </div>
  )
}

export default SongList
