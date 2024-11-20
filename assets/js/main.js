class Libro {
    constructor(titulo, autor, edicion, precio, cantidadDisponible) {
      this.titulo = titulo;
      this.autor = autor;
      this.edicion = edicion;
      this.precio = precio;
      this.cantidadDisponible = cantidadDisponible;
    }
  }
  
  class Biblioteca {
    constructor() {
      this.libros = [];
    }
  
    agregarLibro(libro) {
      this.libros.push(libro);
    }
  
    venderLibro(titulo, cantidad) {
      const libro = this.libros.find(l => l.titulo === titulo);
      if (libro && libro.cantidadDisponible >= cantidad) {
        libro.cantidadDisponible -= cantidad;
        console.log(`Venta realizada: ${cantidad} copias de "${titulo}"`);
      } else {
        console.log(`No hay suficientes copias disponibles de "${titulo}"`);
      }
    }
  
    mostrarInformacionLibros() {
      this.libros.forEach(libro => {
        console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Edición: ${libro.edicion}, Precio: $${libro.precio}, Cantidad Disponible: ${libro.cantidadDisponible}`);
      });
    }
  }
  
  const bibliotecaEjemplo = new Biblioteca();
  bibliotecaEjemplo.agregarLibro(new Libro('Libro 1', 'Autor 1', '1ª edición', 20, 10));
  bibliotecaEjemplo.agregarLibro(new Libro('Libro 2', 'Autor 2', '2ª edición', 15, 5));
  bibliotecaEjemplo.mostrarInformacionLibros();
  