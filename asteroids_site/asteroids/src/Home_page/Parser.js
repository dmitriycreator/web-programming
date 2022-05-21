const parseDate = (date) => {
  let currentDay = date.getDate();
  if (currentDay < 10) currentDay = '0' + currentDay;

  let currentMonth = date.getMonth() + 1;
  if (currentMonth < 10) currentMonth = '0' + currentMonth;

  return date.getFullYear() + '-' + currentMonth + '-' + currentDay;
};

export const getAPIUrl = () => {
  let key = process.env.REACT_APP_NASA_API_KEY;
  if (!key) key = 'DEMO_KEY';

  const day = new Date();
  const startDate = parseDate(day);

  day.setDate(day.getDate() + 7); // Because API only allows us to have a max range of 7 days
  const endDate = parseDate(day);

  return (
    'https://api.nasa.gov/neo/rest/v1/feed?start_date=' +
    startDate +
    '&end_date=' +
    endDate +
    '&api_key=' +
    key
  );
};

const toAsteroidObj = (data) => {
  return {
    name: data.name,
    date: data.close_approach_data[0].close_approach_date,
    grade: data.is_potentially_hazardous_asteroid ? 'опасен' : 'не опасен',
    size:
      (data.estimated_diameter.meters.estimated_diameter_min +
        data.estimated_diameter.meters.estimated_diameter_max) /
      2.0,
    distance: data.close_approach_data[0].miss_distance.kilometers
  };
};

export const convertAPIDataToList = (data) => {
  const outList = [];

  for (const asteroidListName in data.near_earth_objects)
    if (asteroidListName !== -1)
      for (const asteroidName in data.near_earth_objects[asteroidListName])
        if (asteroidName !== -1)
          outList.push(toAsteroidObj(data.near_earth_objects[asteroidListName][asteroidName]));

  return outList;
};
