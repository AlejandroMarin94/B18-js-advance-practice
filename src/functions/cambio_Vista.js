export function cambioVista(container, image, claseActiva, claseInactiva) {
  if (!container || !image) {
    console.error("Contenedor o imagen no existen en el DOM");
    return;
  }
  image.addEventListener("click", () => {
    console.log("Haciendo cambio de vista");
    
    if (!container.classList.contains(claseActiva)) {
      container.classList.remove(claseInactiva);
      container.classList.add(claseActiva);
    }
  });
}
