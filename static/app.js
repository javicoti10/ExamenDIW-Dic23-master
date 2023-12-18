console.log("Hola mundo...");

// Continuar codigo javascript desde aqui ...
document.addEventListener('DOMContentLoaded', function () {
    const newEntryBtn = document.getElementById('newEntryBtn');
    const newEntryModal = document.getElementById('newEntryModal');
    const deleteModal = document.getElementById('deleteModal');
  
    newEntryBtn.addEventListener('click', function () {
      toggleModal(newEntryModal);
    });
  
    // Puedes agregar eventos para otros botones y modales según sea necesario
  
    function toggleModal(modal) {
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
      } else {
        modal.style.display = 'block';
      }
    }
  });
  