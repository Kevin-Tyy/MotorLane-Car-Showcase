
export const fetchCars = async () => {
    const headers = {
        'X-RapidAPI-Key': '4e398042e3msh659ac940dbb6dcap1d7a79jsndddf05ac940b',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' , {
    headers : headers
  })
  const result = await response.json();
  return result;
}
