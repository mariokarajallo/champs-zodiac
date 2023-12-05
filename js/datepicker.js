// Inicializar el selector de fecha
$(document).ready(function () {
  $(".datepicker").datepicker({
    language: "es",
    format: "dd/mm/yyyy",
    clearBtn: true,
    orientation: "bottom auto",
    todayHighlight: true,
    autoclose: true,
  });
});
