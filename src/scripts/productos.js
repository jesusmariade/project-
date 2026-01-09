// scripts/productos.js - Versión actualizada

document.addEventListener('DOMContentLoaded', () => {
  const buscador = document.getElementById("buscador");
  const filterChips = document.querySelectorAll(".filter-chip");
  const productCards = Array.from(document.querySelectorAll("[data-tipo]"));
  
  let filtroActual = "all";

  function aplicarFiltros() {
    const termino = (buscador.value || "").trim().toLowerCase();
    
    productCards.forEach((card) => {
      const tipo = card.dataset.tipo;
      const nombre = card.dataset.nombre || "";
      const descripcion = card.dataset.descripcion || "";
      
      const coincideTipo = filtroActual === "all" || tipo === filtroActual;
      const coincideTexto = !termino || 
        nombre.toLowerCase().includes(termino) || 
        descripcion.toLowerCase().includes(termino);
      
      card.style.display = coincideTipo && coincideTexto ? "" : "none";
    });
  }

  // Event listener para búsqueda
  buscador.addEventListener("input", aplicarFiltros);

  // Event listeners para chips de filtro
  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      // Remover clase active de todos los chips
      filterChips.forEach((c) => c.classList.remove("active"));
      
      // Agregar clase active al chip clickeado
      chip.classList.add("active");
      
      // Actualizar filtro actual
      filtroActual = chip.dataset.filter;
      
      // Aplicar filtros
      aplicarFiltros();
    });
  });

  // Inicializar filtros
  aplicarFiltros();
});