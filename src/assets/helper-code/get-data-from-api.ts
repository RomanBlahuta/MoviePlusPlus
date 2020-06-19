export function getFromAPI(yourUrl){
  const Httpreq = new XMLHttpRequest();
  Httpreq.open('GET', yourUrl, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

export function getJSONFromAPI(yourUrl) {
  return JSON.parse(getFromAPI(yourUrl));
}

