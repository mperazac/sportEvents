export const FacebookAppId = '726716517346478';

const nombres_dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const nombres_meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

export const getSpanishDate = (date) => {
  const fecha = new Date(date);
  const dia_mes = fecha.getDate(); //dia del mes
  const dia_semana = fecha.getDay(); //dia de la semana
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();

  return nombres_dias[dia_semana] + ' ' + dia_mes + ' de ' + nombres_meses[mes - 1] + ' de ' + anio;
};

export const getEventTime = (date) => {
  if (!date) return;
  let fechaHora = new Date(date.substr(0, date.length-5));
  let horas = fechaHora.getHours();
  let minutos = fechaHora.getMinutes();
  let sufijo = 'AM';

  if (horas > 12) {
    horas = horas - 12;
    sufijo = 'PM';
  }

  if (horas < 10) {
    horas = '0' + horas;
  }
  if (minutos < 10) {
    minutos = '0' + minutos;
  }
  return horas + ':'+ minutos + ' ' + sufijo;
};

export const getMonth = (date) => {
  if (!date) return 0;
  const month = new Date(date.substr(0, date.length-5)).getMonth();
  return nombres_meses[month];
};

export const getDay = (date) => {
  if (!date) return 0;
  const _date = new Date(date.substr(0, date.length-5));
  return _date.getDate();
};

export const getWeekDay = (date) => {
  if (!date) return 0;
  const _date = new Date(date.substr(0, date.length-5));
  return nombres_dias[_date.getDay()];
};
